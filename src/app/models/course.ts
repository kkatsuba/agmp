import { Type } from 'serializer.ts/Decorators';

export interface ICourse {
  id: string;
  title: string;
  description?: string;
  createdDate?: Date;
  duration?: number;
}

export class Course implements ICourse {
  _id: string;

  title: string;

  description?: string;

  @Type(() => Date)
  createdDate?: Date;

  duration?: number;

  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
}

export interface CoursesResponse {
  total: number;
  limit: number;
  skip: number;
  data: Array<Course>;
}
