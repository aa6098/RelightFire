"use client";
import React from "react";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

function NavLink({ href, label }: Props) {
  const pathName = usePathname();
  return (
    <NavbarItem
      isActive={pathName === href}
      as={Link}
      href={href}
      className="h-max text-white font-semibold hover:text-yellow-200"
    >
      {label}
    </NavbarItem>
  );
}

export default NavLink;
