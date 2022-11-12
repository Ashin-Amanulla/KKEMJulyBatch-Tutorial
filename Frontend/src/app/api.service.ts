import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})



export class ApiService {


   apiUrl:String = 'http://localhost:8524/api'

  constructor(private http :HttpClient) { }

  //to fetch all data list
getStudentList(){
  return this.http.get(`${this.apiUrl}/studentlist`)
}

// to delete student
deleteStudent(id:any){
  return this.http.delete(`${this.apiUrl}/student/${id}`)
}

// to add new student 

addStudent(data:any){
  return this.http.post(`${this.apiUrl}/student`, data)

}


// to update existing student 
updateStudent(data:any, id:any){
  return this.http.post(`${this.apiUrl}/student`, {data,id})

}


// to fetch data of a single student 

getSingleStudent(id:any){
  return this.http.get(`${this.apiUrl}/student/${id}`)
}


}
