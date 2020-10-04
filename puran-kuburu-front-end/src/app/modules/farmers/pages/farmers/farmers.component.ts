import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FarmersService} from '../../services/farmers.service';
import {FarmerModel} from '../../../shared/models/farmers/farmer.model';
import {SnackbarService} from '../../../core/services/snackbar.service';
import {catchError, tap} from 'rxjs/operators';
import {AlertDialogType} from '../../../shared/models/enums/alert-dialog-type.emum';
import {of} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss']
})
export class FarmersComponent implements OnInit {

  farmers: FarmerModel[] = [];
  displayedColumns: string[] = ['name', 'nic', 'telephone', 'city'];
  paginationConfig = {pageSize: 3, pageSizeOptions: [10, 20, 50]};
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private farmersService: FarmersService,
              private snackbarService: SnackbarService,
              private router: Router) { }

  ngOnInit(): void {
    this.getFarmers();
  }

  getFarmers(): void {
    this.farmersService.getFarmers()
      .pipe(
        tap(farmers => this.farmers = farmers),
        catchError(err => {
          this.snackbarService.openFromComponent(AlertDialogType.ERROR, 'Error getting Farmers');
          return of(err);
        })
      )
      .subscribe();
  }

  changePage(pageEvent: any): void {
    console.log(pageEvent);
  }

  goToAddFrmer(): void {
    this.router.navigate(['farmers/add']);
  }

}
