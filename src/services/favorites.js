import http from "./http-common.js";

class FavoritesDataService {
  create(data) {
    return http.post("/schedule-t3/favorites", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/favorites/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/favorites");
  }
  getCourseID(courseid) {
    return http.get(`/schedule-t3/favorites/courseid/${courseid}`);
  }
  getUserID(userid) {
    return http.get(`/schedule-t3/favorites/userid/${userid}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/favorites/${id}`);
  }
}

export default new FavoritesDataService();
