import {Applicant} from './applicant.model.client';
import {Position} from './position.model.client';

export class Application {
  _id: String;
  isSelected: Boolean;
  instructorRemarks: String;
  instructorRating: Number;
  applicant: Applicant;
  position: Position;
}

