import {AlertDialogType} from "./enums/alert-dialog-type.emum";

export interface SnackbarDataModel {
  type: AlertDialogType;
  message: string;
}
