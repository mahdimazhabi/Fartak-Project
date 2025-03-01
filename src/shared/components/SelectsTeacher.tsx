import { useTeacherDataApi } from "@/api/teaching/TeacherDataApi";
import Loading from "../common/Loading";
const SelectsTeacher = () => {
  const {
    DataGetByFilterAndTeacherTypeId,
    LoadingGetByFilterAndTeacherTypeId,
  } = useTeacherDataApi();

  return (
    <section>
      <div className="p-4 ">
        {LoadingGetByFilterAndTeacherTypeId && <Loading />}
        <div>
          {DataGetByFilterAndTeacherTypeId?.length ?? 0 ? (
            DataGetByFilterAndTeacherTypeId?.map((item) => (
              <div key={item.teacherUserId}>
                <span>data user</span>
              </div>
            ))
          ) : (
            <div className=" bg-[#E7E7E74D] dark:bg-white/5 rounded-3xl py-16">
              <p className=" font-bold text-lg text-center text-[#E4911F]">
                استادی وجود ندارد
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SelectsTeacher;
