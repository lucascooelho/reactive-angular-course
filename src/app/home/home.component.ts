import { CoursesServices } from './../services/courses.service';
import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import { Observable, throwError } from 'rxjs';
import { map, finalize, catchError } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { MessagesService } from '../messages/messages.service';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(
    private coursesServices: CoursesServices,
    private loadingService: LoadingService,
    private messagesService: MessagesService) {

  }

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    const courses$ = this.coursesServices.loadAllCourses()
      .pipe(map(courses => courses.sort(sortCoursesBySeqNo)),
      catchError(err => {
        const message = "Could not load courses";
        this.messagesService.showErros(message);
        console.log(message, err);
        return throwError(err);
      }));

    const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);

    this.beginnerCourses$ = loadCourses$
      .pipe(map(courses => courses.filter(course => course.category == "BEGINNER")));

    this.advancedCourses$ = loadCourses$
      .pipe(map(courses => courses.filter(course => course.category == "ADVANCED")));
  }
}




