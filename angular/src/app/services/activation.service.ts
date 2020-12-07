import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Activation } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ActivationService extends SuperService<Activation> {

  constructor() {
    super('activations');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, prenom, email, nomProduit, macId, cpuId, biosId, baseId, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${prenom}/${email}/${nomProduit}/${macId}/${cpuId}/${biosId}/${baseId}`);
  }

  sendEmail(o) {
    return this.http.post(`${this.urlApi}/${this.controller}/sendEmail`, o);
  }

  getAllForStatistique(nom, prenom, email, nomProduit, macId, cpuId, biosId, baseId, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${nom}/${prenom}/${email}/${nomProduit}/${macId}/${cpuId}/${biosId}/${baseId}`);
  }

}
