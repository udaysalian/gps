import { NgModule } from '@angular/core';

import { GpsNexteraSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GpsNexteraSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GpsNexteraSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GpsNexteraSharedCommonModule {}
