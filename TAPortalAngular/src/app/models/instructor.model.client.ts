import {School} from './school.model.client';

export class Instructor {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  type: String;
  school: School
}
