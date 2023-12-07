import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
