"use client";
import Link from "next/link";
import React from "react";
import NavLinks from "./Nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
// import { signOut } from "next-auth/react";
// import ClientNavLinks from "./ClientNavLinks";
// import { APP_URL } from "@/url";

const Sidebar = ({ session }) => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          
          <div>
            Bienvienue
            <p>
               {session.user.firstName
                ? session.user.firstName
                : session.user.companyName} 
            </p>
          </div>
          <div className="font-semibold text-xl">La poste</div>
        </div>
      </Link> */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* {session.user.accountType === "postalAgent" ? (
          <NavLinks />
        ) : (
          <ClientNavLinks />
        )} */}

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

        <button
          //   onClick={() => signOut({ callbackUrl: `${APP_URL}/login` })}
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Se deconnecter</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
