import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GpsNexteraSharedModule } from 'app/shared';
import {
    ContrLocComponent,
    ContrLocDetailComponent,
    ContrLocUpdateComponent,
    ContrLocDeletePopupComponent,
    ContrLocDeleteDialogComponent,
    contrLocRoute,
    contrLocPopupRoute
} from './';

const ENTITY_STATES = [...contrLocRoute, ...contrLocPopupRoute];

@NgModule({
    imports: [GpsNexteraSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ContrLocComponent,
        ContrLocDetailComponent,
        ContrLocUpdateComponent,
        ContrLocDeleteDialogComponent,
        ContrLocDeletePopupComponent
    ],
    entryComponents: [ContrLocComponent, ContrLocUpdateComponent, ContrLocDeleteDialogComponent, ContrLocDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsNexteraContrLocModule {}
