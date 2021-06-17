import {formatDate} from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Pipe({
  name: 'fdate'
})
export class FdatePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  transform(value: Date, exponent = 1): Date {
    debugger;
    var getSeconds = value;
    console.log(getSeconds);
    debugger;
    //var dateValue = new Date(0).setUTCSeconds(value);
    return value;
  }

}
