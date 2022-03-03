package org.apache.iotdb.ui.config.websocket;

import java.util.Collection;
import java.util.Map.Entry;
import java.util.Set;

import org.apache.iotdb.ui.config.ContinuousIoTDBSession;
import org.apache.iotdb.ui.config.tsdatasource.SessionDataSetWrapper;
import org.apache.shiro.session.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class TimerConfig {

	public static Long cou = System.currentTimeMillis() / 1000;

	protected static final Logger LOGGER = LoggerFactory.getLogger(TimerConfig.class);

	private Set<Entry<String, SessionDataSetWrapper>> sessionDataSetWrapperC = ContinuousIoTDBSession.continuousDataSetWrapperMap
			.entrySet();

	private Collection<WebsocketEndPoint> copyOnWriteArraySet = WebsocketConfiguration.webSocketIdMap.values();

	@Scheduled(cron = "0/1 * * * * *")
	public void sendmsg() {
		cou++;
		if (cou % 60 == 0) {
			copyOnWriteArraySet.forEach(c -> {
				try {
					Session subjectSession = (Session) c.getWssession().getUserProperties()
							.get(WebsocketEndPoint.SHIRO_SESSION);
					subjectSession.touch();
				} catch (Exception e) {
					WebsocketConfiguration.webSocketIdMap.remove(c.getWssessionId());
				}
			});
			sessionDataSetWrapperC.forEach(c -> {
				LOGGER.debug(c.getKey() + " sessionDataSet :" + (cou - c.getValue().getTimestamp()));
				if (cou - c.getValue().getTimestamp() > 300) {
					LOGGER.debug(c.getKey() + " sessionDataSet is remove");
					ContinuousIoTDBSession.continuousDataSetWrapperMap.remove(c.getKey());
				}
			});
		}
	}
}
