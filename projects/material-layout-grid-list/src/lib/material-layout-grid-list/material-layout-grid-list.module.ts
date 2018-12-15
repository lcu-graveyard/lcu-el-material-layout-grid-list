import { NgModule } from '@angular/core';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lowcodeunit/common';
import { BaseDisplayModule, ForgeBuildersCoreModule } from '@lowcodeunit/elements';
import { ForgeMaterialLayoutGridListBuilderComponent } from './material-layout-grid-list-builder/material-layout-grid-list-builder.component';
import { ForgeMaterialLayoutGridListMarketplaceComponent } from './material-layout-grid-list-marketplace/material-layout-grid-list-marketplace.component';
import { ForgeMaterialLayoutGridListRenderComponent } from './material-layout-grid-list-render/material-layout-grid-list-render.component';
import { ForgeMaterialLayoutGridListSettingsDialog } from './dialogs/grid-list-settings/grid-list-settings.dialog';
import { ForgeMaterialLayoutGridListItemSettingsDialog } from './dialogs/grid-list-builder-settings/grid-list-item-settings.dialog';
import { MatAutocompleteModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule } from '@angular/material';

export class ForgeMaterialLayoutGridListDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeMaterialLayoutGridListBuilderComponent;
	}

	public Marketplace() {
		return ForgeMaterialLayoutGridListMarketplaceComponent;
	}

	public Render() {
		return ForgeMaterialLayoutGridListRenderComponent;
	}
}

var comps = [
	ForgeMaterialLayoutGridListBuilderComponent,
	ForgeMaterialLayoutGridListMarketplaceComponent,
	ForgeMaterialLayoutGridListRenderComponent,
	ForgeMaterialLayoutGridListSettingsDialog,
	ForgeMaterialLayoutGridListItemSettingsDialog,
];

@NgModule({
	imports: [
		FathymSharedModule,
		ForgeBuildersCoreModule,
		DndModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatMenuModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeMaterialLayoutGridListModule { }
