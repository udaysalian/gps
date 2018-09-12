import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    ContractComponent,
    ContractDetailComponent,
    ContractUpdateComponent,
    ContractDeletePopupComponent,
    ContractDeleteDialogComponent,
    contractRoute,
    contractPopupRoute
} from './';

const ENTITY_STATES = [...contractRoute, ...contractPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ContractComponent,
        ContractDetailComponent,
        ContractUpdateComponent,
        ContractDeleteDialogComponent,
        ContractDeletePopupComponent
    ],
    entryComponents: [ContractComponent, ContractUpdateComponent, ContractDeleteDialogComponent, ContractDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraContractModule {}
