import http from "./http-common.js";

class SectionTimeDataService {
  create(data) {
    return http.post("/schedule-t3/sectiontime", data);
  }
  update(id, data) {
    return http.put(`/schedule-t3/sectiontime/${id}`, data);
  }
  getAll() {
    return http.get("/schedule-t3/sectiontime");
  }
  getDaysOfWeek(daysofweek) {
    return http.get(`/schedule-t3/sectiontime/daysofweek/${daysofweek}`);
  }
  getEndDate(enddate) {
    return http.get(`/schedule-t3/sectiontime/enddate/${enddate}`);
  }
  getEndTime(endtime) {
    return http.get(`/schedule-t3/sectiontime/endtime/${endtime}`);
  }
  getRoomID(roomid) {
    return http.get(`/schedule-t3/sectiontime/roomid/${roomid}`);
  }
  getSectionID(sectionid) {
    return http.get(`/schedule-t3/sectiontime/sectionid/${sectionid}`);
  }
  getStartDate(startdate) {
    return http.get(`/schedule-t3/sectiontime/startdate/${startdate}`);
  }
  getStartTime(starttime) {
    return http.get(`/schedule-t3/sectiontime/starttime/${starttime}`);
  }
  delete(id) {
    return http.delete(`/schedule-t3/sectiontime/${id}`);
  }
}

export default new SectionTimeDataService();
