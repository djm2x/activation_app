import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Activation } from 'src/app/models/models';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Activation[] = [];
  selectedList: Activation[] = [];

  displayedColumns = [/*'select',*/  'nom', 'prenom', 'email', 'date', 'nomProduit', 'macId', 'website', 'option'];

  panelOpenState = false;

  nom = new FormControl('');
  prenom = new FormControl('');
  email = new FormControl('');
  nomProduit = new FormControl('');
  macId = new FormControl('');
  cpuId = new FormControl('');
  biosId = new FormControl('');
  baseId = new FormControl('');




  dataSubject = new Subject();
  isListTabSelected = true;
  isChartTabSelected = true;
  listTabSelectedEvent = new Subject();
  chartTabSelectedEvent = new Subject();

  constructor(public uow: UowService, public dialog: MatDialog
    , private mydialog: DeleteService) { }

  ngOnInit() {
    const sub = merge(...[this.sort.sortChange, this.paginator.page, this.update]).pipe(startWith(null as any)).subscribe(
      r => {
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.isLoadingResults = true;
        this.getPage(
          startIndex,
          this.paginator.pageSize,
          this.sort.active ? this.sort.active : 'id',
          this.sort.direction ? this.sort.direction : 'desc',
          this.nom.value === '' ? '*' : this.nom.value,
          this.prenom.value === '' ? '*' : this.prenom.value,
          this.email.value === '' ? '*' : this.email.value,
          this.nomProduit.value === '' ? '*' : this.nomProduit.value,
          this.macId.value === '' ? '*' : this.macId.value,
          this.cpuId.value === '' ? '*' : this.cpuId.value,
          this.biosId.value === '' ? '*' : this.biosId.value,
          this.baseId.value === '' ? '*' : this.baseId.value,

        );
      }
    );



    this.subs.push(sub);
  }

  reset() {
    this.nom.setValue('');
    this.prenom.setValue('');
    this.email.setValue('');
    this.nomProduit.setValue('');
    this.macId.setValue('');
    this.cpuId.setValue('');
    this.biosId.setValue('');
    this.baseId.setValue('');

    this.update.next(true);
  }


  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, nom, prenom, email, nomProduit, macId, cpuId, biosId, baseId,) {
    const sub = this.uow.activations.getAll(startIndex, pageSize, sortBy, sortDir, nom, prenom, email, nomProduit, macId, cpuId, biosId, baseId,).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  getAllForStatistique(nom, prenom, email, nomProduit, macId, cpuId, biosId, baseId,) {
    const sub = this.uow.activations.getAllForStatistique(nom, prenom, email, nomProduit, macId, cpuId, biosId, baseId,).subscribe(
      (r: any[]) => {
        console.log(r);
        const barChartLabels = r.map(e => e.name);
        const barChartData = [
          { data: [], label: 'name' },
        ];

        r.forEach(e => {
          barChartData[0].data.push(e.value);
        });

        this.dataSubject.next({ barChartLabels, barChartData, title: 'Activation' });
      }
    );

    this.subs.push(sub);
  }

  selectedIndexChange(index: number) {
    // this.isListTabSelected = index === 0;
    // this.isChartTabSelected = index === 1;
    // this.listTabSelectedEvent.next(index === 0);
    // this.chartTabSelectedEvent.next(index === 1);
  }

  openDialog(o: Activation, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new Activation(), `Ajouter Activation`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Activation) {
    this.openDialog(o, `Modifier Activation`, false).subscribe((result: Activation) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  sendEmail(o: Activation) {
    const sub = this.uow.activations.sendEmail(o).subscribe(r => {
      console.log(r)
    });
  }

  detail(o: Activation) {
    this.openDialog(o, `Détail Activation`, true).subscribe((result: Activation) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog('Activation').toPromise();
    if (r === 'ok') {
      const sub = this.uow.activations.delete(id).subscribe(() => this.update.next(true));

      this.subs.push(sub);
    }
  }

  //check box
  //
  isSelected(row: Activation): boolean {
    return this.selectedList.find(e => e.id === row.id) ? true : false;
  }

  check(row: Activation) {
    const i = this.selectedList.findIndex(o => row.id === o.id);
    const existe: boolean = i !== -1;

    existe ? this.selectedList.splice(i, 1) : this.selectedList.push(row);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selectedList.length;
    const numRows = this.dataSource.length;

    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selectedList = [] : this.selectedList = Array.from(this.dataSource);
  }

  async deleteList() {
    const r = await this.mydialog.openDialog('role').toPromise();
    if (r === 'ok') {
      const sub = this.uow.activations.deleteRange(this.selectedList as any).subscribe(() => {
        this.selectedList = [];
        this.update.next(true);
      });

      this.subs.push(sub);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}

