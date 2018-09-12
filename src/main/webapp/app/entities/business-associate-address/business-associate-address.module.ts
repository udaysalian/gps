import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    BusinessAssociateAddressComponent,
    BusinessAssociateAddressDetailComponent,
    BusinessAssociateAddressUpdateComponent,
    BusinessAssociateAddressDeletePopupComponent,
    BusinessAssociateAddressDeleteDialogComponent,
    businessAssociateAddressRoute,
    businessAssociateAddressPopupRoute
} from './';

const ENTITY_STATES = [...businessAssociateAddressRoute, ...businessAssociateAddressPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BusinessAssociateAddressComponent,
        BusinessAssociateAddressDetailComponent,
        BusinessAssociateAddressUpdateComponent,
        BusinessAssociateAddressDeleteDialogComponent,
        BusinessAssociateAddressDeletePopupComponent
    ],
    entryComponents: [
        BusinessAssociateAddressComponent,
        BusinessAssociateAddressUpdateComponent,
        BusinessAssociateAddressDeleteDialogComponent,
        BusinessAssociateAddressDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraBusinessAssociateAddressModule {}
