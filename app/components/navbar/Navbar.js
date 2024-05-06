"use client";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoLink from "./LogoLink";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="hidden relative py-6 sm:flex flex-row justify-between items-center border shadow-md px-4">
        {/* Logo and Desktop Navigation Links */}
        <LogoLink />
        <div className="flex gap-3">
          <div className="hover:text-blue-400">
            <Link href="https://luendu.org">Accueil</Link>
          </div>
          <div className="hover:text-blue-400">
            <Link href="#">Mon compte</Link>
          </div>
        </div>
        {/* <DesktopNavLinks /> */}
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        {/* Logo, Mobile Menu Button, Mobile Drawer */}
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </div>
  );
};

export default Navbar;
