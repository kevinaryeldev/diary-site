import { NavbarContainer, NavbarLink } from "./style";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const url = useLocation().pathname;
  console.log(url);
  return (
    <>
      <NavbarContainer>
        <NavbarLink to="/" currPatch={url === "/"}>
          Home
        </NavbarLink>
        <NavbarLink currPatch={url === "/posts"} to="/posts">
          Posts
        </NavbarLink>
        <NavbarLink currPatch={url === "/contato"} to="/">
          Contato
        </NavbarLink>
        <NavbarLink currPatch={url === "/sobre"} to="/">
          Sobre Mim
        </NavbarLink>
        <NavbarLink currPatch={url === "/asoas"} to="/"></NavbarLink>
      </NavbarContainer>
    </>
  );
};
