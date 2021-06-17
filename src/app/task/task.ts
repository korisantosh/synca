import firebase from 'firebase/app';
import { Timestamp } from '@firebase/firestore-types';

export interface Task {
    id?: string,
    title: string,
    time: string,
    due: Timestamp,
    done: boolean
}
