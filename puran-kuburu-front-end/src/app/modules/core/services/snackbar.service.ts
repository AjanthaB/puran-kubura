import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarRef} from "@angular/material/snack-bar";
import {SNACK_BAR_DURATION} from "../../../config/contants";
import {AlertDialogType} from "../../shared/models/enums/alert-dialog-type.emum";
import {SnackbarComponent} from "../../shared/components/snackbar/snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  readonly defaultSnackBarOptions: MatSnackBarConfig = {
    duration: SNACK_BAR_DURATION,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };

  constructor(public snackBar: MatSnackBar) { }

  public openFromComponent(type: AlertDialogType, message: string, config = this.defaultSnackBarOptions)
    : MatSnackBarRef<SnackbarComponent> {
    return this.snackBar.openFromComponent(SnackbarComponent, {
      ...this.defaultSnackBarOptions,
      ...config,
      data: { type, message },
      panelClass: this.getPanelClass(type)
    });
  }

  public dismissAll(): void {
    this.snackBar.dismiss();
  }

  private getPanelClass(type: AlertDialogType): string {
    switch (type) {
      case AlertDialogType.SUCCESS:
        return AlertDialogType[AlertDialogType.SUCCESS].toLowerCase();
      case AlertDialogType.ERROR:
        return AlertDialogType[AlertDialogType.ERROR].toLowerCase();
      case AlertDialogType.WARNING:
        return AlertDialogType[AlertDialogType.WARNING].toLowerCase();
      default:
        return '';
    }
  }
}
