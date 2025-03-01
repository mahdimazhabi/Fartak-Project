export interface getDataTeachertype {
  teacherTypeId: string;
  title: string;
}
export interface getDataTeacher {
  teacherUserId: string;
  userId: string;
  description: string;
  videoName: string;
  imageName: string;
  gender: string;
  city: string;
  typeTeaching: string;
  onlinePrice: number;
  teacherTypeId: string;
  inPersonPrice: number;
  teacherName: string;
}
export interface getDataParentTeacherType {
  teacherTypeId: number;
  title: string;
  teacherTypeParentId: number;
}
