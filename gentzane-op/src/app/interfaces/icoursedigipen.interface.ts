export interface ICourse {
  code: string;
  title: string;
  description: string;
}

export interface ICategory {
  id: number;
  title: string;
  courses: ICourse[];
}
