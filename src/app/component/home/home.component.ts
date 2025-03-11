import { Component } from '@angular/core';
import { Strings } from '../enum/strings.enum';
import { CoursesComponent } from '../courses/courses.component';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-home',
  imports: [CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses:Course[]=[];
  ngOnInit(){
    this.getCourses()
  }
  getCourses=()=>{
    const data = localStorage.getItem(Strings.STORAGE_KEY)
  console.log(data)
  if(data){
    this.courses=JSON.parse(data);
  
  }
  }
}
