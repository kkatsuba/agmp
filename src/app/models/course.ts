import { Type } from 'serializer.ts/Decorators';

export interface ICourse {
  id: number;
  title: string;
  description?: string;
  createdDate?: Date;
  duration?: number;
  topRated: boolean;
}

export class Course implements ICourse {
  id: number;

  title: string;

  description?: string;

  @Type(() => Date)
  createdDate?: Date;

  duration?: number;

  topRated = false;
}
