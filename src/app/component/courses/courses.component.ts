import { Component, EventEmitter, Input, output } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
@Input() course:any;
@Input() isDelete:boolean=false; 
del = output<void>()
deleteCourse(){
  this.del.emit(this.course);
}
}
