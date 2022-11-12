import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService :ApiService) { }

students:any =[]

  ngOnInit(): void {

    this.getData();

  }

  getData(){
    this.apiService.getStudentList().subscribe(res=>{
      this.students = res
    })
  }

  editStudent(){
    // this.apiService.updateStudent().subscribe(res=>{
    //   this.students = res
    // })
  }

  deleteStudent(id:any){
    this.apiService.deleteStudent(id).subscribe(res=>{
      this.students = res
    })
  }

}
