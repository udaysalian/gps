import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    RateSchedValdComponent,
    RateSchedValdDetailComponent,
    RateSchedValdUpdateComponent,
    RateSchedValdDeletePopupComponent,
    RateSchedValdDeleteDialogComponent,
    rateSchedValdRoute,
    rateSchedValdPopupRoute
} from './';

const ENTITY_STATES = [...rateSchedValdRoute, ...rateSchedValdPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RateSchedValdComponent,
        RateSchedValdDetailComponent,
        RateSchedValdUpdateComponent,
        RateSchedValdDeleteDialogComponent,
        RateSchedValdDeletePopupComponent
    ],
    entryComponents: [
        RateSchedValdComponent,
        RateSchedValdUpdateComponent,
        RateSchedValdDeleteDialogComponent,
        RateSchedValdDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraRateSchedValdModule {}
