export interface IStudent {
  id: number;
  name: string;
  age: number;
  absents: number;
  isGraduated: boolean;
  coursesList: string[];
}

export interface IUserData {
  username: string;
  role: Role;
}

export enum Role {
  ADMIN = "admin",
  TEACHER = "teacher",
  GUEST = "guest",
}
