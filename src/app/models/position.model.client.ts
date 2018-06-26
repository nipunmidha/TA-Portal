import {Course} from './course.model.client';
import {Instructor} from './instructor.model.client';

export class Position {
  _id: String;
  semester: String;
  classStrength: Number;
  noOfTa: Number;
  skillsMustNeeded: String;
  sectionName: String;
  year: Number;
  postionsFilled: Boolean;
  courseCompleted: Boolean;
  instructor: Instructor;
  course: Course;
  syllabus: String;
  taHired: Number;
}

