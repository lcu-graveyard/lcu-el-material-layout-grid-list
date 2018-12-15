import { Component, Injector } from '@angular/core';
import { IControlBuilder, ForgeGenericControl } from '@lowcodeunit/elements';
import { ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig } from '../material-layout-grid-list.core';
import { PageUIService } from '@lowcodeunit/core';
import { ForgeMaterialLayoutGridListSettingsDialog } from '../dialogs/grid-list-settings/grid-list-settings.dialog';
import { BaseModeledResponse, isResultSuccess } from '@lowcodeunit/common';
import { ForgeMaterialLayoutGridListItemSettingsDialog } from '../dialogs/grid-list-builder-settings/grid-list-item-settings.dialog';

@Component({
	selector: 'forge-material-layout-grid-list-builder',
	templateUrl: './material-layout-grid-list-builder.component.html',
	styleUrls: ['./material-layout-grid-list-builder.component.scss']
})
export class ForgeMaterialLayoutGridListBuilderComponent
	extends ForgeGenericControl<ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig>
	implements IControlBuilder<ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig> {
		//  Fields
	
		//  Properties
	
		//  Constructors
		constructor(protected pageUiSvc: PageUIService, protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
		}
	
		//	API Methods
		public ManageGridSettings() {
			var dialogRef = this.pageUiSvc.Dialog.Open(ForgeMaterialLayoutGridListSettingsDialog, this.Details,
				(result: BaseModeledResponse<ForgeMaterialLayoutGridListDetails>) => {
					if (isResultSuccess(result)) {
						this.Element.Control.Details = Object.assign(this.Element.Control.Details, result.Model);
	
						this.updateElement();
					}
				}, '90%');
		}
	
		public ManageItemSettings(config: ForgeMaterialLayoutGridListConfig) {
			var dialogRef = this.pageUiSvc.Dialog.Open(ForgeMaterialLayoutGridListItemSettingsDialog, config,
				(result: BaseModeledResponse<ForgeMaterialLayoutGridListConfig>) => {
					if (isResultSuccess(result)) {
						config = Object.assign(config, result.Model);
	
						this.updateElement();
					}
				}, '90%');
		}
	
		//	Helpers
		protected loadDefaultConfig() {
			return <ForgeMaterialLayoutGridListConfig>{ ColumnSpan: 1, RowSpan: 1 };
		}
}
