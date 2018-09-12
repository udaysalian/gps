import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    MeasurementStationComponent,
    MeasurementStationDetailComponent,
    MeasurementStationUpdateComponent,
    MeasurementStationDeletePopupComponent,
    MeasurementStationDeleteDialogComponent,
    measurementStationRoute,
    measurementStationPopupRoute
} from './';

const ENTITY_STATES = [...measurementStationRoute, ...measurementStationPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        MeasurementStationComponent,
        MeasurementStationDetailComponent,
        MeasurementStationUpdateComponent,
        MeasurementStationDeleteDialogComponent,
        MeasurementStationDeletePopupComponent
    ],
    entryComponents: [
        MeasurementStationComponent,
        MeasurementStationUpdateComponent,
        MeasurementStationDeleteDialogComponent,
        MeasurementStationDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraMeasurementStationModule {}
