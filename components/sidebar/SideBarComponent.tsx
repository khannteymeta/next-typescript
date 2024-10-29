"use client";

import { Sidebar } from "flowbite-react";

import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItems = {
  name: string;
  path: string;
  icon: React.ElementType;
};
export default function SideBarComponent() {
  const [menuList, setMenuList] = useState<MenuItems[]>(MenuList);
  return (
    <Sidebar aria-label="Default sidebar example ">
      <Sidebar.Items className="h-screen bg-blue-300  ">
        <Sidebar.ItemGroup>
          {menuList.map((items, index) => (
            <Sidebar.Item
              className="hover:text-black hover:bg-white "
              key={index}
              as={Link}
              href={items.path}
              icon={items.icon}
            >
              {items.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
