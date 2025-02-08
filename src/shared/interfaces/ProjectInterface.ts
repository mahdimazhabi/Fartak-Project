export interface getList {
  projectId: number;
  projectTypeId: number;
  title: string;
  description: string;
  ownerId: number;
  price: number;
  image: string;
  duration: number;
}

export interface addProjects {
  title: string;
  description: string;
  duration: string;
  price: string;
  [key: string]: string;
}
