import {School} from './school.model.client';

export class Applicant {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  type: String;
  school: School;
  resume: String;
  rated: Number;
  avgRating: Number;
}
