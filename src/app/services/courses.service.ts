import { Course } from "./../model/course";
import { HttpClient } from "@angular/common/http";
import { map, shareReplay } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CoursesServices {
  constructor(private http: HttpClient) {}

  loadAllCourses() {
    return this.http.get<Course>("/api/courses").pipe(
      map((res) => res["payload"]),
      shareReplay()
    );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http
      .put(`/api/courses/${courseId}`, changes)
      .pipe(shareReplay());
  }
}
