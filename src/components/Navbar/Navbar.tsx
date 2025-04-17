import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/icons/logo.png";

export default function NavBar() {
  const menuItems = ["Table", "List"];
  const location = useLocation();
  const isTable = location.pathname === "/table";
  const isList = location.pathname === "/";

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img alt="Logo" className="h-8" src={Logo} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img alt="Logo" className="h-8" src={Logo} />
        </NavbarBrand>
        <NavbarItem isActive={isTable}>
          <Link color="foreground" to="/table">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isList}>
          <Link aria-current="page" color="warning" to="/">
            List
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              to="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
