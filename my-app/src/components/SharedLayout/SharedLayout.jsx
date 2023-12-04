import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <div>
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          ПП "АРІ КО"
        </div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contacts">Сontacts</NavLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
