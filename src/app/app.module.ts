import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
import { ImageCourseComponent } from './image-course/image-course.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CourseCardComponent,
    ImageCourseComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
