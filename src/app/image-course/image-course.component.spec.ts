import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCourseComponent } from './image-course.component';

describe('ImageCourseComponent', () => {
  let component: ImageCourseComponent;
  let fixture: ComponentFixture<ImageCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
