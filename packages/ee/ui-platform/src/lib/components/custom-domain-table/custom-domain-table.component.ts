import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CustomDomainDataSource } from './custom-domain-table.datasource';
import { Observable, Subject, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { startWith } from 'rxjs';
import { CustomDomain, Platform } from '@activepieces/ee-shared';
import {
  DeleteEntityDialogComponent,
  DeleteEntityDialogData,
  featureDisabledTooltip,
} from '@activepieces/ui/common';
import { CustomDomainService } from '../../service/custom-domain.service';
import { CreateCustomDomainDialogComponent } from '../dialogs/create-custom-domain-dialog/create-custom-domain-dialog.component';

@Component({
  selector: 'app-custom-domain-table',
  templateUrl: './custom-domain-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDomainTableComponent implements OnInit {
  displayedColumns = ['domain', 'created', 'action'];
  dataSource!: CustomDomainDataSource;
  refresh$: Subject<boolean> = new Subject();
  dialogClosed$?: Observable<unknown>;
  featureDisabledTooltip = featureDisabledTooltip;
  @Input({ required: true }) platform!: Platform;
  constructor(
    private matDialog: MatDialog,
    private customDomainService: CustomDomainService
  ) {}
  ngOnInit(): void {
    this.dataSource = new CustomDomainDataSource(
      this.refresh$.asObservable().pipe(startWith(false)),
      this.customDomainService,
      !!this.platform.isDemo
    );
  }
  createKey() {
    const dialog = this.matDialog.open(CreateCustomDomainDialogComponent, {
      disableClose: true,
    });
    this.dialogClosed$ = dialog.beforeClosed().pipe(
      tap((res) => {
        if (res) {
          this.refresh$.next(true);
        }
      })
    );
  }

  deleteCustomDomain(key: CustomDomain) {
    const dialogData: DeleteEntityDialogData = {
      deleteEntity$: this.customDomainService.delete(key.id).pipe(
        tap(() => {
          this.refresh$.next(true);
        })
      ),
      entityName: key.domain,
      note: $localize`This will delete the custom domain; make sure you understand the consequences.`,
    };
    const dialog = this.matDialog.open(DeleteEntityDialogComponent, {
      data: dialogData,
    });
    this.dialogClosed$ = dialog.beforeClosed().pipe(
      tap((res) => {
        if (res) {
          this.refresh$.next(true);
        }
      })
    );
  }
}
