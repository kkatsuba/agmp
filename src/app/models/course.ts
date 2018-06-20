export interface ICourse {
  id: number;
  title: string;
  description?: string;
  createdDate?: Date;
  duration?: number;
}

export class Course implements ICourse {
  constructor(public id: number, public title: string, public description?: string,
    public createdDate?: Date, public duration?: number) { }
}
