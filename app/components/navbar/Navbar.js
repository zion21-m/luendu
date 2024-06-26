"use client";
import { useState, useEffect } from "react";

import LogoLink from "./LogoLink";

import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Signout from "@/app/login/Signout";
import { API_URL } from "@/app/lib/constants";

const Navbar = ({ userData }) => {
  // const [userData, setUserData] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="hidden relative py-6 sm:flex flex-row justify-between items-center border shadow-md px-4">
        {/* Logo and Desktop Navigation Links */}
        <LogoLink />
        <div className="flex gap-3 items-center">
          <div className="hover:text-blue-400">
            <Link href="https://luendu.org">Accueil</Link>
          </div>
          <div className="hover:text-blue-400">
            <Link href="/mur-de-luendu">Mur de Luendu</Link>
          </div>
          {session ? (
            <div className="flex gap-3 items-center">
              <div className="hover:text-blue-400">
                <Link href="/mon-compte">Mon compte</Link>
              </div>
              <div>
                Bienvenue,{" "}
                {userData
                  ? `${userData?.nickname} ${userData?.name}`
                  : session?.user?.name}
              </div>
              <div>
                <Signout />
              </div>
            </div>
          ) : (
            <div>
              <Link href="/login">Se connecter</Link>
            </div>
          )}
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
