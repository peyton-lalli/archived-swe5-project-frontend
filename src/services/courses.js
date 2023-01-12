// import { get } from "core-js/core/dict";
import http from "./http-common";
class CoursesDataService {
  create(data) {
    return http.post("/schedule-t3/course", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/courses/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/courses");
  }
  getNumber(id) {
    return http.get(`/schedule-t3/courses/number/${id}`);
  }
  getName(name) {
    return http.get(`/schedule-t3/courses/name/${name}`);
  }
  getLevel(level) {
    return http.get(`/schedule-t3/courses/level/${level}`);
  }
  getHours(hours) {
    return http.get(`/schedule-t3/courses/hours/${hours}`);
  }
  getSemesterAvailable(semesteravailable) {
    return http.get(
      `/schedule-t3/courses/semesteravailable/${semesteravailable}`
    );
  }
  getYearAvailable(yearavailable) {
    return http.get(`/schedule-t3/courses/yearavailable/${yearavailable}`);
  }
  getDescription(description) {
    return http.get(`/schedule-t3/courses/description/${description}`);
  }
  searchEverything(search) {
    return http.get(`/schedule-t3/courses/searcheverything/${search}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/course/${id}`);
  }
}
export default new CoursesDataService();
