import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, tap} from "rxjs/operators";
import {AlertDialogType} from "../../../shared/models/enums/alert-dialog-type.emum";
import {of} from "rxjs";
import {SnackbarService} from "../../../core/services/snackbar.service";
import {PaddyFieldsService} from "../../service/paddy-fields.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-paddy-field',
  templateUrl: './add-paddy-field.component.html',
  styleUrls: ['./add-paddy-field.component.scss']
})
export class AddPaddyFieldComponent implements OnInit {

  paddyFieldForm: FormGroup;

  constructor(private snackbarService: SnackbarService,
              private paddyFieldsService: PaddyFieldsService,
              private router: Router) { }

  ngOnInit(): void {
    this.initPaddyFieldForm();
  }

  initPaddyFieldForm(): void {
    this.paddyFieldForm = new FormGroup({
      city: new FormControl()
    });
  }

  save(): void {
    this.paddyFieldsService.create(this.paddyFieldForm.value)
      .pipe(
        tap(paddyField => {
          this.snackbarService.openFromComponent(AlertDialogType.SUCCESS, 'Saved Successfully');
        }),
        catchError(err => {
          this.snackbarService.openFromComponent(AlertDialogType.ERROR, 'Error creating Paddy Field');
          return of(err);
        })
      )
      .subscribe();
  }
}
