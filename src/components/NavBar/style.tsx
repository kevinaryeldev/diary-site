import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AnchorHTMLAttributes } from "react";

export const NavbarContainer = styled.nav`
  background-color: #bac1d8;
  padding-left: 10%;
  display: flex;
  overflow-x: auto;
`;
interface linkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  currPatch: boolean;
  to: string;
}

const onPage = css`
  background-color: #2e2e2e;
  color: #bac1d8;
`;

export const NavbarLink = styled(Link)<linkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  min-width: 120px;
  height: 40px;
  color: #2e2e2e;
  text-decoration: none;
  font-size: 1.5rem;
  ${(props) => props.currPatch && onPage}
  :hover {
    background-color: #404040;
    color: #bac1d8;
  }
  :active {
    background-color: #2e2e2e;
  }
`;
