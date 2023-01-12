import http from "./http-common.js";

class FacultyDataService {
  create(data) {
    return http.post("/schedule-t3/faculty"), data;
  }
  update(id, data) {
    return http.put(`/schedule-t3/faculty/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/faculty");
  }
  getName(name) {
    return http.get(`/schedule-t3/faculty/name/${name}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/faculty/${id}`);
  }
}

export default new FacultyDataService();
