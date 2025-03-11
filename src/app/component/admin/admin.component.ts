import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { Strings } from '../enum/strings.enum';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CoursesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  model: any = {};
  cover!: string;
  cover_file: any;
  showError:boolean=false;
  courses:any[]=[];
ngOnInit (){
this.getCourses();
}
getCourses=()=>{
  const data = localStorage.getItem(Strings.STORAGE_KEY)
console.log(data)
if(data){
  this.courses=JSON.parse(data);

}
}
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cover_file = file;
    }
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
      const dataUrl = reader.result!.toString();
      this.cover = dataUrl;
    };
    reader.readAsDataURL(file);
    this.showError=false;
  }
  onSubmit(from: NgForm) {
    if (from.invalid || !this.cover) {
      from.control.markAllAsTouched();
      if(!this.cover){
        this.showError=true;
      }
      return;
    }
 
    this.saveCourse(from.value);
    from.resetForm(); 
    this.cover = ''; 
    this.showError = false
  }
  saveCourse(formValue: any) {
    const data = {
      ...formValue,
      image: this.cover,
      id: new Date().getTime() 
    };
  
    this.courses = [...this.courses, data];
    this.setItem(this.courses);
  }
  
  deleteCourse(course: any) {
    this.courses = this.courses.filter(course_item => course_item.id !== course.id);
    this.setItem(this.courses);
  }
  setItem(data:any){
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  }
}
