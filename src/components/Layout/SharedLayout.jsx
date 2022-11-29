import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css"
import styled from "styled-components"
const { NavLink } = require("react-router-dom");


const StyledLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={css.navigation}>
          <StyledLink className={css.navigation__item} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.navigation__item} to="/movies">Movies</StyledLink>
        </nav>
      </header>
    <Outlet />
    </>
  );
};

export default SharedLayout