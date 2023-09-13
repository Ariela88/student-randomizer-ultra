import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getStudents():Promise<Student[]> {
   return fetch('./assets/student.json').then(res => res.json())

  }

  constructor() { }















}
