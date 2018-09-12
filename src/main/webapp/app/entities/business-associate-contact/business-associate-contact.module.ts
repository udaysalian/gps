import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    BusinessAssociateContactComponent,
    BusinessAssociateContactDetailComponent,
    BusinessAssociateContactUpdateComponent,
    BusinessAssociateContactDeletePopupComponent,
    BusinessAssociateContactDeleteDialogComponent,
    businessAssociateContactRoute,
    businessAssociateContactPopupRoute
} from './';

const ENTITY_STATES = [...businessAssociateContactRoute, ...businessAssociateContactPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BusinessAssociateContactComponent,
        BusinessAssociateContactDetailComponent,
        BusinessAssociateContactUpdateComponent,
        BusinessAssociateContactDeleteDialogComponent,
        BusinessAssociateContactDeletePopupComponent
    ],
    entryComponents: [
        BusinessAssociateContactComponent,
        BusinessAssociateContactUpdateComponent,
        BusinessAssociateContactDeleteDialogComponent,
        BusinessAssociateContactDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraBusinessAssociateContactModule {}
