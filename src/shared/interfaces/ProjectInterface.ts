export interface getList {
  projectId: number;
  projectTypeId: number;
  title: string;
  description: string;
  ownerId: number;
  price: number;
  image: string;
}

export interface addProjects {
  Title: string;
  Description: string;
  OwnerId: string;
  Price: string;
}
