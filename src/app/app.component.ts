import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    public course1 = COURSES[0];
    public course2 = COURSES[1];
    public course3 = COURSES[2];
}
