import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  groupNumber: number = 5;


  groupsArray:Student[][] = []


  studentsData: Student[] = []


  constructor(private dataServ:DataService){}



  randomize(){


    const tempArray = [];
    const originalLength = this.studentsData.length;
    for (let i = 0; i < originalLength; i++) {

      const randomIndex = Math.floor(Math.random() * this.studentsData.length);
      const student = this.studentsData[randomIndex];
      tempArray.push(student);
      this.studentsData.splice(randomIndex, 1);

    }
    this.studentsData = tempArray;
    this.createGroups()


  }

  ngOnInit(): void {

this.dataServ.getStudents().then(students => {
  this.studentsData = students;
  this.createGroups()
})




  }


  createGroups(){

    this.groupsArray = []

    for (let i = 0; i < this.studentsData.length; i++) {
      const groupIndex = i % this.groupNumber

      if (this.groupsArray[groupIndex] ===  undefined) {
          this.groupsArray[groupIndex] = []
      }


     const student = this.studentsData[i]
     this.groupsArray[groupIndex].push(student)

}


console.log(this.groupsArray)


//     for (let j = 0; j < this.groupNumber; j++) {
//       const group:Student[] = []

//       const studentNumber = Math.floor(this.studentsData.length / this.groupNumber)
// const start = studentNumber * j
// let endNumber;
// if (j === this.groupNumber - 1) {

//   endNumber = this.studentsData.length

// }else{

//   endNumber = start + studentNumber;
// }
//       for (let i = start; i < start + studentNumber; i++) {
//         if (i < this.studentsData.length) {


//         const student = this.studentsData[i];
//         group.push(student)

//  }
//       }

//       this.groupsArray.push(group)

//     }

}

}
