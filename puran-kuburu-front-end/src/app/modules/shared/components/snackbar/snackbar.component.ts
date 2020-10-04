import {Component, Inject, OnInit} from '@angular/core';
import {AlertDialogType} from "../../models/enums/alert-dialog-type.emum";
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarDataModel} from "../../models/snackbar-data.model";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent{

  matSnackBarTye = AlertDialogType;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarDataModel, private matSnackBar: MatSnackBar) { }

  public close(): void {
    this.matSnackBar.dismiss();
  }
}
