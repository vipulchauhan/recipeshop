import { NgModule } from '@angular/core';

import { RecipeShopSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RecipeShopSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RecipeShopSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RecipeShopSharedCommonModule {}
