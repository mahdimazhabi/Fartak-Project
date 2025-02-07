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
  title: string;
  description: string; // اصلاح نوشتاری
  ownerId: string;
  price: string;
  [key: string]: string; // برای ویژگی‌های داینامیک
}
