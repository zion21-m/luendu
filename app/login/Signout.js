"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Signout = () => {
  return (
    <Link
      href={"/login"}
      onClick={() => signOut()}
      className="p-2 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md"
    >
      Se deconnecter
    </Link>
  );
};

export default Signout;
