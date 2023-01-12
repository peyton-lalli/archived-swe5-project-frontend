import http from "./http-common";
class EventsDataService {
  create(data) {
    return http.post("/schedule-t3/events", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/events/${id}`), data;
  }
  getAll() {
    return http.get("/schedule-t3/events");
  }
  getName(name) {
    return http.get(`/schedule/events/name/${name}`);
  }
  getRoom(roomid) {
    return http.get(`/schedule-t3/events/roomid/${roomid}`);
  }
  getSemester(semesterid) {
    return http.get(`/schedule-t3/events/semesterid/${semesterid}`);
  }
  getUser(userid) {
    return http.get(`/schedule-t3/events/userid/${userid}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/events/${id}`);
  }
}
export default new EventsDataService();
