import { Component, ElementRef, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    // To get the relation of any components in refs 
    @ViewChild('card1', { static: false }) card: CourseCardComponent;
    @ViewChild('card1', { read: ElementRef }) cardByElement: CourseCardComponent;
    @ViewChildren(CourseCardComponent) cardsElements: QueryList<CourseCardComponent>
    
    ngAfterViewInit(): void {
        console.log("Hello the cards");
        console.log(this.cardsElements)
        this.cardsElements.changes.subscribe((observer) => {
            console.log("some change to the list of courses", observer)
        })
    }

    public courses: Course[] = COURSES;

    public date: Date = new Date();

    public title: string = "Some tTittle";

    public price: number = 83.382324


    handleClick(course: Course) {
        console.log("Hello clicked here", course)
    }

    handleClickReference(course: Course) {
        console.log("Hello", this.card, this.cardByElement)

    }
    addListItem() {
        this.courses.push({
            id: 2,
            description: "RxJs In Practice Course",
            iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
            longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
            category: 'BEGINNER',
            lessonsCount: 10
        })
        console.log(this.courses)
    }
}
