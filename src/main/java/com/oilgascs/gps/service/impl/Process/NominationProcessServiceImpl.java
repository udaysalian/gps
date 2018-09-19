package com.oilgascs.gps.service.impl.Process;

import com.oilgascs.gps.repository.NominationRepository;
import com.oilgascs.gps.service.dto.NomSubmitDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.cloud.stream.messaging.Processor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class NominationProcessServiceImpl  {

    private final Logger log = LoggerFactory.getLogger(NominationProcessServiceImpl.class);

    private boolean nomEditing = false;

    NominationRepository nomRepo;

    public NominationProcessServiceImpl( NominationRepository nominationRepository) {
        this.nomRepo = nominationRepository;

    }

    @StreamListener(Processor.INPUT)
    public void submitNominations(NomSubmitDTO nomSubmitDTO) {

        //
    }

    public void editNomination() {
        // obtain lock to the nom table

    }


}
