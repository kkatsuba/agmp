import { Type } from 'serializer.ts/Decorators';
import { IAuthor } from './author';

export interface ICourse {
  id: number;
  title: string;
  description?: string;
  date?: Date;
  duration?: number;
  topRated: boolean;
  authors: Array<IAuthor>;
}

export class Course implements ICourse {
  id: number;

  title: string;

  description?: string;

  @Type(() => Date)
  date?: Date;

  duration?: number;

  topRated = false;

  authors = null;
}
