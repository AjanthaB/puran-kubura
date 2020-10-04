import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SnackbarService} from '../../../core/services/snackbar.service';
import {PaddyFieldsService} from '../../service/paddy-fields.service';
import {catchError, tap} from 'rxjs/operators';
import {AlertDialogType} from '../../../shared/models/enums/alert-dialog-type.emum';
import {of} from 'rxjs';
import {PaddyFieldModel} from '../../../shared/models/paddy-fields/paddy-field.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-paddy-fields',
  templateUrl: './paddy-fields.component.html',
  styleUrls: ['./paddy-fields.component.scss']
})
export class PaddyFieldsComponent implements OnInit {

  paddyFields: PaddyFieldModel[] = [];
  displayedColumns: string[] = ['name', 'nic', 'telephone', 'city'];
  paginationConfig = {pageSize: 3, pageSizeOptions: [10, 20, 50]};

  constructor(private snackbarService: SnackbarService,
              private paddyFieldsService: PaddyFieldsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllPaddyFields();
  }

  getAllPaddyFields(): void {
    this.paddyFieldsService.getAll()
      .pipe(
        tap(paddyFields => {
          this.paddyFields = paddyFields;
          console.log(this.paddyFields);
        }),
        catchError(err => {
          this.snackbarService.openFromComponent(AlertDialogType.ERROR, 'Error getting Paddy Fields');
          return of(err);
        })
      )
      .subscribe();
  }

  goToAddPaddyField(): void {
    this.router.navigate(['paddy-fields/add']);
  }

  changePage(pageEvent: any): void {
    console.log(pageEvent);
  }
}
