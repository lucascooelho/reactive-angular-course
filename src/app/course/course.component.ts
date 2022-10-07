import { CoursesServices } from './../services/courses.service';
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import { Observable } from 'rxjs';
import {Lesson} from '../model/lesson';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute, private coursesServices: CoursesServices) {
  }

  ngOnInit() {
    const courseId = parseInt(this.route.snapshot.paramMap.get("courseId"));

    this.course$ = this.coursesServices.loadCourseById(courseId);

    this.lessons$ = this.coursesServices.loadAllCourseLessons(courseId);
  }
}











