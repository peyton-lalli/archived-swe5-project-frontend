import http from "./http-common.js";

class UsersDataService {
  create(data) {
    return http.post("/schedule-t3/users", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/users/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/users");
  }
  getEmail(email) {
    return http.get(`/schedule-t3/users/email/${email}`);
  }
  getFacultyID(facultyid) {
    return http.get(`/schedule-t3/users/facultyid/${facultyid}`);
  }
  getRole(role) {
    return http.get(`/schedule-t3/users/role/${role}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/users/${id}`);
  }
}

export default new UsersDataService();
