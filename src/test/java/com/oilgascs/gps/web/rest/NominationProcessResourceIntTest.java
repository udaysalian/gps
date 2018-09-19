package com.oilgascs.gps.web.rest;

import com.oilgascs.gps.GpsNexteraApp;
import org.checkerframework.checker.units.qual.A;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.stream.messaging.Processor;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
/**
 * Test class for the NominationProcessResource REST controller.
 *
 * @see NominationProcessResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = GpsNexteraApp.class)
public class NominationProcessResourceIntTest {

    private MockMvc restMockMvc;
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    @Qualifier("Processor")
    Processor processor = null;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);


        @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")


        NominationProcessResource nominationProcessResource = new NominationProcessResource(  processor);
        restMockMvc = MockMvcBuilders
            .standaloneSetup(nominationProcessResource)
            .build();
    }

    /**
    * Test submitNoms
    */
    @Test
    public void testSubmitNoms() throws Exception {
        restMockMvc.perform(post("/api/nomination-process/submit-noms"))
            .andExpect(status().isOk());
    }

}
