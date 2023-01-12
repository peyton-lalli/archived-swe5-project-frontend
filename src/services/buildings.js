import http from "./http-common";
class BuildingsDataService {
  create(data) {
    return http.post("/schedule-t3/buildings", data);
  }
  update(id, data) {
    return http.post(`/schedule-t3/buildings/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/buildings");
  }
  getName(name) {
    return http.get(`/schedule-t3/name/${name}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/buildings/${id}`);
  }
}
export default new BuildingsDataService();
