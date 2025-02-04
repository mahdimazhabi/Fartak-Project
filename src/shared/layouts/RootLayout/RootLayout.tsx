import { Outlet } from "react-router-dom";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
