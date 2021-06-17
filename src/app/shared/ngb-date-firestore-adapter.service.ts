import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class NgbDateFirestoreAdapter extends NgbDateAdapter<firebase.firestore.Timestamp> {
  /**
   * Converts Firestore TimeStamp to a NgbDateStruct
   */

  fromModel(ts: firebase.firestore.Timestamp): NgbDateStruct | null {
    if (ts instanceof firebase.firestore.Timestamp) {
      return {
        year: ts.toDate().getFullYear(),
        month: ts.toDate().getMonth() + 1,
        day: ts.toDate().getDate()
      };
    } else return null;
  }

  /**
   * Converts a NgbDateStruct to a Firestore TimeStamp
   */
  toModel(ngbDate: NgbDateStruct): firebase.firestore.Timestamp {
    if (!ngbDate) {
      return null as any;
    }
    const jsDate = new Date(
      ngbDate.year ? ngbDate.year : new Date().getFullYear(),
      ngbDate.month ? ngbDate.month - 1 : new Date().getMonth() - 1,
      ngbDate.day ? ngbDate.day : new Date().getDate(),
      12
    );
    return firebase.firestore.Timestamp.fromDate(jsDate);
  }

}