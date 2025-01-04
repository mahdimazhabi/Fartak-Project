import { Outlet } from "react-router-dom";
import Header from "../HeaderLayout/HeaderLayout";
import Footer from "../FooteLayout/FooterLayout";

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
