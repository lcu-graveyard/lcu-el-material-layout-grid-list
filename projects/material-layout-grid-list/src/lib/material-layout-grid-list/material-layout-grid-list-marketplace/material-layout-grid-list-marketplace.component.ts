import { Component, Injector } from '@angular/core';
import { IControlMarketplace, ForgeGenericControl } from '@lowcodeunit/elements';
import { ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig } from '../material-layout-grid-list.core';

@Component({
	selector: 'forge-material-layout-grid-list-marketplace',
	templateUrl: './material-layout-grid-list-marketplace.component.html',
	styleUrls: ['./material-layout-grid-list-marketplace.component.scss']
})
export class ForgeMaterialLayoutGridListMarketplaceComponent
	extends ForgeGenericControl<ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig>
	implements IControlMarketplace<ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
