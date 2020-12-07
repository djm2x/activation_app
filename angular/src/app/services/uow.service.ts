import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { UserService } from './user.service';
import configs from '../../assets/json/configs.json';
import { ActivationService } from './activation.service';

@Injectable({
  providedIn: 'root'
})
export class UowService {
  accounts = new AccountService();
  users = new UserService();
  activations = new ActivationService();


  configs = configs;

  years = [...Array(new Date().getFullYear() - 2015).keys()].map(e => 2015 + e + 1);
  months = [...Array(12).keys()].map(e => e + 1);
  monthsAlpha = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ].map((e, i) => {
    return { id: i + 1, name: e };
  });

  daysAlpha = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((e, i) => ({ id: i + 1, name: e }));

  constructor() { }

  valideDate(date: Date): Date {
    date = new Date(date);

    const hoursDiff = date.getHours() - date.getTimezoneOffset() / 60;
    const minutesDiff = (date.getHours() - date.getTimezoneOffset()) % 60;
    date.setHours(hoursDiff);
    // date.setMinutes(minutesDiff);

    return date;
  }


}
