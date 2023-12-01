import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "path/to/pages/Home";
import Contacts from "path/to/pages/Contacts";
import Products from "path/to/pages/Products";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <div>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
