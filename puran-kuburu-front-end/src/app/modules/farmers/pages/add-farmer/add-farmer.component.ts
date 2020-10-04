import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {catchError, tap} from 'rxjs/operators';
import {FarmerModel} from '../../../shared/models/farmers/farmer.model';
import {AlertDialogType} from '../../../shared/models/enums/alert-dialog-type.emum';
import {of} from 'rxjs';
import {FarmersService} from '../../services/farmers.service';
import {SnackbarService} from '../../../core/services/snackbar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.component.html',
  styleUrls: ['./add-farmer.component.scss']
})
export class AddFarmerComponent implements OnInit {

  farmer: FormGroup;

  constructor(private farmersService: FarmersService,
              private snackbarService: SnackbarService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.farmer = new FormGroup({
      name: new FormControl(''),
      telephone: new FormControl(''),
      nic: new FormControl(''),
      address: new FormGroup({
        addressLine: new FormControl(''),
        province: new FormControl(''),
        district: new FormControl(''),
        city: new FormControl(''),
        village: new FormControl('')
      })
    });
  }

  save(): void {
    // TODO: handle validations
    this.farmersService.createFarmer(this.farmer.value)
      .pipe(
        tap((farmer: FarmerModel) => {
          this.snackbarService.openFromComponent(AlertDialogType.SUCCESS, 'Saved Successfully');
          this.farmer.reset();
        }),
        catchError(err => {
          console.log(err);
          this.snackbarService.openFromComponent(AlertDialogType.ERROR, 'Error creating Farmer');
          return of(err);
        })
      )
      .subscribe();
  }
}
