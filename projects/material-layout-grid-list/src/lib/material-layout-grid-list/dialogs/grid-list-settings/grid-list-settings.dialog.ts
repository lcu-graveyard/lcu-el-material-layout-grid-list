import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Status } from '@lcu/common';
import { BaseModeledResponse } from '@lcu/core';
import { ForgeMaterialLayoutGridListDetails } from '../../material-layout-grid-list.core';

@Component({
	selector: 'grid-list-settings-dialog',
	templateUrl: './grid-list-settings.dialog.html',
	styleUrls: ['./grid-list-settings.dialog.scss']
})
export class ForgeMaterialLayoutGridListSettingsDialog implements OnInit {
	//	Fields

	//	Properties
	public Details: ForgeMaterialLayoutGridListDetails;

	//	Constructors
	constructor(protected dialogRef: MatDialogRef<ForgeMaterialLayoutGridListSettingsDialog>, @Inject(MAT_DIALOG_DATA) details: ForgeMaterialLayoutGridListDetails) {
		this.Details = JSON.parse(JSON.stringify(details));
	}

	//	Life Cycle
	public ngOnInit() {
	}

	//	API Methods
	public Cancel() {
		this.dialogRef.close(<BaseModeledResponse<ForgeMaterialLayoutGridListDetails>>{
			Model: null,
			Status: <Status>{
				Code: 1,
				Message: 'Cancelled'
			}
		});
	}

	public Save() {
		this.dialogRef.close(<BaseModeledResponse<ForgeMaterialLayoutGridListDetails>>{
			Model: this.Details,
			Status: <Status>{
				Code: 0,
				Message: 'Success'
			}
		});
	}
}
