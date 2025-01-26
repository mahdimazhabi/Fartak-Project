export interface DataUser {
  userId: number;
  passWord: string;
  salt: string;
  mobile: string;
  email: string;
  name: string;
  lastname: string;
  verify: string;
  status: string;
  kind: string;
}
export interface RegisterUser {
  name: string;
  lastname: string;
  password: string;
  salt: string;
  mobile: string;
  email: string;
  kind: string;
}

export interface LoginUser {
  mobile: string;
  password: string;
}
