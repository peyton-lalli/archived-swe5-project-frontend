import http from "./http-common.js";

class RoomsDataService {
  create(data) {
    return http.post("/schedule-t3/rooms", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/rooms/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/rooms");
  }
  getBuilding(building) {
    return http.get(`/schedule-t3/rooms/building${building}`);
  }
  getCapacity(capacity) {
    return http.get(`/schedule-t3/rooms/capacity/${capacity}`);
  }
  getNumber(number) {
    return http.get(`/schedule-t3/rooms/number/${number}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/rooms/${id}`);
  }
}
export default new RoomsDataService();
