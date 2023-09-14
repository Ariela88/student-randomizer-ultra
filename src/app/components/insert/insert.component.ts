import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent {

constructor(private dataserv:DataService){}


    newStudent: Student = {
    id: 0,
    name: '',
    surname: '',
    age: -1,
    imageUrl: ''

  }

  saveStudent() {
    this.dataserv.addStudent({...this.newStudent});
    this.newStudent = {
      id: 0,
    name: '',
    surname: '',
    age: -1,
    imageUrl: ''

    }


    console.log(this.newStudent)

  }

}
