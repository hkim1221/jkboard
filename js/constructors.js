// Task card constructor
export default class TaskManager {
  constructor(title, desc, member, date, tag, status) {
    this.title = title;
    this.desc = desc;
    this.member = member;
    this.date = date;
    this.tag = tag;
    this.status = status;
    this.id = new Date().valueOf().toString();
  }
}
