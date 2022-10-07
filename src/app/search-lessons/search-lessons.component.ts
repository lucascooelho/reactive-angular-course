import { CoursesServices } from './../services/courses.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../model/lesson';


@Component({
  selector: 'course',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchLessonsComponent implements OnInit {
  searchResults$: Observable<Lesson[]>;
  activeLesson: Lesson;
  
  constructor(private courseService: CoursesServices) {

  }

  ngOnInit() {

  }

  onSearch(search: string) {
    this.searchResults$ = this.courseService.searchLessons(search);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.activeLesson = null;
  }
}











