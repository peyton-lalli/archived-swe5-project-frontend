import http from "./http-common.js";

class SectionsDataService {
  create(data) {
    return http.post("/schedule-t3/sections", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/sections/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/sections");
  }
  getCourseID(courseid) {
    return http.get(`/schedule-t3/sections/courseid/${courseid}`);
  }
  getSemesterID(semesterid) {
    return http.get(`/schedule-t3/sections/semesterid/${semesterid}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/sections/${id}`);
  }
}

export default new SectionsDataService();
