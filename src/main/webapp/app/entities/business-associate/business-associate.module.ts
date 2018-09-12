import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    BusinessAssociateComponent,
    BusinessAssociateDetailComponent,
    BusinessAssociateUpdateComponent,
    BusinessAssociateDeletePopupComponent,
    BusinessAssociateDeleteDialogComponent,
    businessAssociateRoute,
    businessAssociatePopupRoute
} from './';

const ENTITY_STATES = [...businessAssociateRoute, ...businessAssociatePopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BusinessAssociateComponent,
        BusinessAssociateDetailComponent,
        BusinessAssociateUpdateComponent,
        BusinessAssociateDeleteDialogComponent,
        BusinessAssociateDeletePopupComponent
    ],
    entryComponents: [
        BusinessAssociateComponent,
        BusinessAssociateUpdateComponent,
        BusinessAssociateDeleteDialogComponent,
        BusinessAssociateDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraBusinessAssociateModule {}
