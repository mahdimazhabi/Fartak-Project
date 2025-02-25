import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-20 grid place-content-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <ReactLoading type="bubbles" height={100} width={100} />
        {/* پیام متنی در صورت نیاز */}
        {/* <p className="text-white mt-4">در حال بارگذاری...</p> */}
      </div>
    </div>
  );
};

export default Loading;
