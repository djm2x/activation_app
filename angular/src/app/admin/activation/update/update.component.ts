import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activation } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: Activation;
  title = '';
  visualisation = false;

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;
    this.visualisation = this.data.visualisation;
    this.createForm();

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Activation): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.activations.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.activations.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      nom: [this.o.nom, [Validators.required,]],
      prenom: [this.o.prenom, [Validators.required,]],
      email: [this.o.email, [Validators.required, Validators.email]],
      date: [this.o.date, [Validators.required,]],
      nomProduit: [this.o.nomProduit, [Validators.required,]],
      website: [this.o.website, [Validators.required,]],
      macId: [this.o.macId, [Validators.required,]],
      cpuId: [this.o.cpuId, [Validators.required,]],
      biosId: [this.o.biosId, [Validators.required,]],
      baseId: [this.o.baseId, [Validators.required,]],

    });
  }

  resetForm() {
    this.o = new Activation();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
