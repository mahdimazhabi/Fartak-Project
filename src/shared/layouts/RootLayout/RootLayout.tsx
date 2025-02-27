import { Outlet } from "react-router-dom";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
const RootLayout = () => {
  return (
    <div className="  flex items-stretch flex-col min-h-screen ">
      <Header />
      <main className=" flex flex-col justify-center flex-1 mx-auto container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
