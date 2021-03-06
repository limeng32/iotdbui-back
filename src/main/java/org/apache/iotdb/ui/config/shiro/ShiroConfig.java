/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.apache.iotdb.ui.config.shiro;

import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.iotdb.ui.config.EmailConfig;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.mgt.ExecutorServiceSessionValidationScheduler;
import org.apache.shiro.session.mgt.SessionManager;
import org.apache.shiro.session.mgt.eis.EnterpriseCacheSessionDAO;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.servlet.SimpleCookie;
import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShiroConfig {

	@Autowired
	private MyPermissionResolver myPermissionResolver;

	@Autowired
	private EmailConfig emailConfig;

	@Bean(name = "shiroFilterFactoryBean")
	public ShiroFilterFactoryBean getShiroFilterFactoryBean() {
		ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean();

		Map<String, String> map = new LinkedHashMap<>();
		map.put("/servicecheck/**", "anon");// ?????????????????????
		map.put("/error/**", "anon"); // error???????????????
		map.put("/v2/**", "anon"); // swagger?????????
		map.put("/actuator/**", "anon"); // actuator?????????
		map.put("/api/login/account", "anon"); // ???????????????
		map.put("/api/sendRegisterEmail", "anon"); // ???????????????????????????
		map.put("/api/acquireCaptcha", "anon"); // ??????????????????
		map.put("/api/register", "anon"); // ???????????????
		map.put("/api/activateAccount/**", "anon"); // ?????????????????????
		map.put("/api/sendResetPasswordMail", "anon"); // ?????????????????????????????????
		map.put("/api/resetPassword/**", "anon"); // ???????????????????????????
		map.put("/api/resetUpdatePassword", "anon"); // ?????????????????????
		map.put("/", "anon"); // ???handler?????????
		map.put("/**", "authc");// ??????????????????????????????????????????????????????????????????????????????

		// ???????????????????????????
		bean.setFilterChainDefinitionMap(map);
		// ??????????????????
		bean.setLoginUrl("http://" + emailConfig.getEndPoint());
		bean.setUnauthorizedUrl("/401");
		DefaultWebSecurityManager securityManager = getDefaultWebSecurityManager();
		bean.setSecurityManager(securityManager);
		// ???????????????????????????securityManager??????SecurityUtils???
		SecurityUtils.setSecurityManager(securityManager);
		return bean;
	}

	// ?????????????????????
	@Bean(name = "securityManager")
	public DefaultWebSecurityManager getDefaultWebSecurityManager() {
		DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
		AuthorizingRealm realm = getRealm();
		realm.setPermissionResolver(myPermissionResolver);
		securityManager.setRealm(realm);
		securityManager.setSessionManager(sessionManager());
		return securityManager;
	}

	// ???????????????
	@Bean
	public SessionManager sessionManager() {
		DefaultWebSessionManager sessionManager = new DefaultWebSessionManager();
		sessionManager.setSessionFactory(shiroSessionFactory());
		sessionManager.setSessionDAO(sessionDao());
		sessionManager.setDeleteInvalidSessions(true);
		sessionManager.setGlobalSessionTimeout(120 * 60 * 1000L);
		sessionManager.setSessionIdCookieEnabled(true);
		sessionManager.setSessionIdCookie(getSessionIdCookie());
		sessionManager.setSessionValidationScheduler(getExecutorServiceSessionValidationScheduler());
//		 ????????????redis???????????????????????????????????????true
		sessionManager.setSessionValidationSchedulerEnabled(false);
		return sessionManager;
	}

	@Bean(name = "sessionFactory")
	public ShiroSessionFactory shiroSessionFactory() {
		return new ShiroSessionFactory();
	}

	// ?????????Realm
	@Bean(name = "customerRealm")
	public AuthorizingRealm getRealm() {
		return new CustomRealm();
	}

	@Bean
	public EnterpriseCacheSessionDAO sessionDao() {
		EnterpriseCacheSessionDAO dao = new ShiroSessionDao();
		return dao;
	}

	@Bean(name = "sessionValidationScheduler")
	public ExecutorServiceSessionValidationScheduler getExecutorServiceSessionValidationScheduler() {
		ExecutorServiceSessionValidationScheduler scheduler = new ExecutorServiceSessionValidationScheduler();
		scheduler.setInterval(900000);
		return scheduler;
	}

	@Bean(name = "sessionIdCookie")
	public SimpleCookie getSessionIdCookie() {
		SimpleCookie cookie = new SimpleCookie("JSESSIONID");
		cookie.setHttpOnly(false);
		cookie.setMaxAge(-1);
		return cookie;
	}
}
