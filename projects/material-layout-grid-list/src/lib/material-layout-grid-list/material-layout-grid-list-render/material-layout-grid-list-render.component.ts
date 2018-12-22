import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig } from '../material-layout-grid-list.core';

@Component({
	selector: 'forge-material-layout-grid-list-render',
	templateUrl: './material-layout-grid-list-render.component.html',
	styleUrls: ['./material-layout-grid-list-render.component.scss']
})
export class ForgeMaterialLayoutGridListRenderComponent
	extends ForgeGenericControl<ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig>
	implements IControlRender<ForgeMaterialLayoutGridListDetails, ForgeMaterialLayoutGridListConfig> {
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
