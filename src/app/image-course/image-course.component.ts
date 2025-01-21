import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-course',
  imports: [],
  templateUrl: './image-course.component.html',
  styleUrl: './image-course.component.css'
})
export class ImageCourseComponent {
  @Input() iconUrl: string; 
}
