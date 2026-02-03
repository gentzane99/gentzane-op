export interface ICourse {
  code: string;
  title: string;
  description: string;
}

export interface ICoursesDigipen {
  id: number;
  title: string;
  courses: ICourse[];
}
