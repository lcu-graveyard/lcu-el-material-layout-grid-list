import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseModeledResponse, Status } from '@lowcodeunit/common';
import { ForgeMaterialLayoutGridListConfig } from './grid-list.core';

@Component({
	selector: 'grid-list-item-settings-dialog',
	templateUrl: './grid-list-item-settings.dialog.html',
	styleUrls: ['./grid-list-item-settings.dialog.scss']
})
export class ForgeMaterialLayoutGridListItemSettingsDialog implements OnInit {
	//	Fields

	//	Properties
	public Config: ForgeMaterialLayoutGridListConfig;

	//	Constructors
	constructor(protected dialogRef: MatDialogRef<ForgeMaterialLayoutGridListItemSettingsDialog>, @Inject(MAT_DIALOG_DATA) config: ForgeMaterialLayoutGridListConfig) {
		this.Config = JSON.parse(JSON.stringify(config));
	}

	//	Life Cycle
	public ngOnInit() {
	}

	//	API Methods
	public Cancel() {
		this.dialogRef.close(<BaseModeledResponse<ForgeMaterialLayoutGridListConfig>>{
			Model: null,
			Status: <Status>{
				Code: 1,
				Message: 'Cancelled'
			}
		});
	}

	public Save() {
		this.dialogRef.close(<BaseModeledResponse<ForgeMaterialLayoutGridListConfig>>{
			Model: this.Config,
			Status: <Status>{
				Code: 0,
				Message: 'Success'
			}
		});
	}
}
