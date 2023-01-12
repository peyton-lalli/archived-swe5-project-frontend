import http from "./http-common.js";

class SemestersDataService {
  create(data) {
    return http.post("/schedule-t3/semesters", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/semesters/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/semesters");
  }
  getCode(code) {
    return http.get(`/schedule-t3/semesters/code/${code}`);
  }
  getEndData(enddate) {
    return http.get(`/schedule-t3/semesters/enddate/${enddate}`);
  }
  getStartDate(startdate) {
    return http.get(`/schedule-t3/semesters/startdate/${startdate}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/semesters/${id}`);
  }
}

export default new SemestersDataService();
