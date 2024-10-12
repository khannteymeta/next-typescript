"use client";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarLink } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItems = {
  name: string;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const pathName = usePathname();
  const [menu, setMenu] = useState<MenuItems[]>(MenuList);

  // Function to update menu state when a link is clicked
  const updateMenu = (path: string) => {
    const newMenu = menu.map((item) =>
      path === item.path
        ? { ...item, active: true }
        : { ...item, active: false }
    );
    setMenu(newMenu);
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>

      <div className="hidden space-x-4 sm:flex md:flex">
        {menu.map((item, index) => (
          <NavbarLink
            onClick={() => updateMenu(item.path)}
            key={index}
            href={item.path}
            as={Link}
            active={item.active}
          >
            {item.name}
          </NavbarLink>
        ))}
      </div>
    </Navbar>
  );
}
