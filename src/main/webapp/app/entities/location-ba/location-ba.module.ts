import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    LocationBAComponent,
    LocationBADetailComponent,
    LocationBAUpdateComponent,
    LocationBADeletePopupComponent,
    LocationBADeleteDialogComponent,
    locationBARoute,
    locationBAPopupRoute
} from './';

const ENTITY_STATES = [...locationBARoute, ...locationBAPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LocationBAComponent,
        LocationBADetailComponent,
        LocationBAUpdateComponent,
        LocationBADeleteDialogComponent,
        LocationBADeletePopupComponent
    ],
    entryComponents: [LocationBAComponent, LocationBAUpdateComponent, LocationBADeleteDialogComponent, LocationBADeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraLocationBAModule {}
