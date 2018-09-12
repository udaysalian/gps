import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    BusinessUnitComponent,
    BusinessUnitDetailComponent,
    BusinessUnitUpdateComponent,
    BusinessUnitDeletePopupComponent,
    BusinessUnitDeleteDialogComponent,
    businessUnitRoute,
    businessUnitPopupRoute
} from './';

const ENTITY_STATES = [...businessUnitRoute, ...businessUnitPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BusinessUnitComponent,
        BusinessUnitDetailComponent,
        BusinessUnitUpdateComponent,
        BusinessUnitDeleteDialogComponent,
        BusinessUnitDeletePopupComponent
    ],
    entryComponents: [
        BusinessUnitComponent,
        BusinessUnitUpdateComponent,
        BusinessUnitDeleteDialogComponent,
        BusinessUnitDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraBusinessUnitModule {}
