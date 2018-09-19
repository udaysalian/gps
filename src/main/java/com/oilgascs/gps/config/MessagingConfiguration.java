package com.oilgascs.gps.config;


import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.messaging.Processor;


@EnableBinding(value = Processor.class)
public class MessagingConfiguration {
}
