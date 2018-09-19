package com.oilgascs.gps.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.oilgascs.gps.service.dto.NomSubmitDTO;
import com.oilgascs.gps.web.rest.errors.BadRequestAlertException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.integration.support.MessageBuilder;
import org.springframework.messaging.MessageChannel;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.cloud.stream.messaging.Processor;

import javax.validation.Valid;


/**
 * NominationProcessResource controller
 */
@RestController
@RequestMapping("/api/nominationProcess")
public class NominationProcessResource {

    private final Logger log = LoggerFactory.getLogger(NominationProcessResource.class);
    private MessageChannel channel;

    public NominationProcessResource(final Processor processor) {
        this.channel = processor.output();
    }

    /**
    * POST submitNoms


    */
    @PostMapping("/submit-noms")
    @Timed
    public ResponseEntity submitNoms(@Valid @RequestBody NomSubmitDTO nomSubmitDTO) {


        log.debug("REST request to process Order  for contract : {}", nomSubmitDTO.getContract().getContrId());
        if (nomSubmitDTO.getContract().getContrId() == null) {
            throw new BadRequestAlertException("Error submitting nom ", "CONTRACT", "not specified");
        }
        channel.send(MessageBuilder.withPayload(nomSubmitDTO).build());

        return ResponseEntity.ok(nomSubmitDTO);
    }
}
