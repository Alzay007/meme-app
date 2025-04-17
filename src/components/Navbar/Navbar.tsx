import { useState } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "../../assets/icons/logo.png";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Table", path: "/table" },
    { label: "List", path: "/" },
  ];

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const handleMenuItemClick = (path: string) => {
    setIsMenuOpen(false);

    if (path !== currentPath) {
      navigate(path);
    }
  };

  return (
    <Navbar
      disableAnimation
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle onClick={handleMenuToggle} />
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
        {navItems.map(({ label, path }) => (
          <NavbarItem key={label} isActive={currentPath === path}>
            <Link
              aria-current={currentPath === path ? "page" : undefined}
              color={currentPath === path ? "warning" : "foreground"}
              to={path}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map(({ label, path }) => (
          <NavbarMenuItem key={label}>
            <span
              className="w-full cursor-pointer text-foreground"
              role="button"
              tabIndex={0}
              onClick={() => handleMenuItemClick(path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleMenuItemClick(path);
                }
              }}
            >
              {label}
            </span>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
