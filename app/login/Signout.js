"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Signout = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="p-2 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
    >
      Se deconnecter
    </button>
  );
};

export default Signout;
