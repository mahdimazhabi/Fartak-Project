import { Outlet } from "react-router-dom";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
