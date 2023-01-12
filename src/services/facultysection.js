import http from "./http-common.js";

class FacultySectionDataService {
  create(data) {
    return http.post("/schedule-t3/facultysection", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/facultysection/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/facultysection");
  }
  getFacultyID(facultyid) {
    return http.get(`/schedule-t3/facultysection/facultyid/${facultyid}`);
  }
  getSectionID(sectionid) {
    return http.get(`/schedule-t3/facultysection/sectionid/${sectionid}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/facultysection/${id}`);
  }
}

export default new FacultySectionDataService();
