import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GpsNexteraNominationModule } from './nomination/nomination.module';
import { GpsNexteraReductionReasonModule } from './reduction-reason/reduction-reason.module';
import { GpsNexteraActivityModule } from './activity/activity.module';
import { GpsNexteraRateSchedModule } from './rate-sched/rate-sched.module';
import { GpsNexteraRateSchedValdModule } from './rate-sched-vald/rate-sched-vald.module';
import { GpsNexteraNominationPriorityModule } from './nomination-priority/nomination-priority.module';
import { GpsNexteraContractModule } from './contract/contract.module';
import { GpsNexteraContrLocModule } from './contr-loc/contr-loc.module';
import { GpsNexteraBusinessAssociateModule } from './business-associate/business-associate.module';
import { GpsNexteraBusinessAssociateAddressModule } from './business-associate-address/business-associate-address.module';
import { GpsNexteraMeasurementStationModule } from './measurement-station/measurement-station.module';
import { GpsNexteraLocationBAModule } from './location-ba/location-ba.module';
import { GpsNexteraContactModule } from './contact/contact.module';
import { GpsNexteraBusinessUnitModule } from './business-unit/business-unit.module';
import { GpsNexteraBusinessAssociateContactModule } from './business-associate-contact/business-associate-contact.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        GpsNexteraNominationModule,
        GpsNexteraReductionReasonModule,
        GpsNexteraActivityModule,
        GpsNexteraRateSchedModule,
        GpsNexteraRateSchedValdModule,
        GpsNexteraNominationPriorityModule,
        GpsNexteraContractModule,
        GpsNexteraContrLocModule,
        GpsNexteraBusinessAssociateModule,
        GpsNexteraBusinessAssociateAddressModule,
        GpsNexteraMeasurementStationModule,
        GpsNexteraLocationBAModule,
        GpsNexteraContactModule,
        GpsNexteraBusinessUnitModule,
        GpsNexteraBusinessAssociateContactModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraEntityModule {}
