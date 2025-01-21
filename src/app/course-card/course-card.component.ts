import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';
import { ImageCourseComponent } from "../image-course/image-course.component";

@Component({
  selector: 'course-card',
  imports: [ImageCourseComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course: Course;
  @Input() index: Number;
  @Output() clickCourse = new EventEmitter<Course>()

  handleClick() {
    this.clickCourse.emit(this.course);
  }
}
