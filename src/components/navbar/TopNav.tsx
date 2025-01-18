"use client";
import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { FaFireAlt } from "react-icons/fa";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Members", href: "/members" },
    { label: "Lists", href: "/lists" },
    { label: "Messages", href: "/messages" },
    { label: "Log Out", href: "/" },
  ];

  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-indigo-800 to-indigo-400"
      classNames={{
        item: ["data-[active=true]:text-yellow-400"],
        content: ["data-[active=true]:bg-purple-700"],
        toggleIcon: ["text-amber-500", "font-bold"],
        menu: ["bg-indigo-100"],
        toggle: ["h-10", "w-10", "bg-indigo-700", "rounded-full"],
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden  pr-3">
        <NavbarBrand>
          <FaFireAlt className="text-amber-500 text-3xl" />
          <Link href="/" className="ml-1 font-bold text-inherit">
            <span className="text-amber-300">Relight</span>
            <span className="text-red-500">Fire</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <FaFireAlt className="text-amber-500 text text-3xl" />

          <Link href="/" className="ml-1 font-bold text-inherit">
            <span className="text-amber-300">Relight</span>
            <span className="text-red-500">Fire</span>
          </Link>
        </NavbarBrand>
        {/* Expanded Menu Items */}
        {menuItems.map(
          (item, index) =>
            item.href != "/" && (
              <NavbarMenuItem key={`${item}-${index}`}>
                <NavLink href={item.href} label={item.label} />
              </NavbarMenuItem>
            )
        )}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            className="bg-slate-300"
            href="/login"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-slate-300"
            href="/register"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="text-white">
        {/* collapsed menu items */}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-1/2 text-amber-700 hover:bg-amber-100"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
