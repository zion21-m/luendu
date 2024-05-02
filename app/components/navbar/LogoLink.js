import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLink = () => {
  return (
    <div className="mb-4 text-center sm:mb-0">
      <Link href="https://luendu.org" className="">
        <Image
          src="/Luendu-logo.jpg"
          alt="le logo de luendu"
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
};

export default LogoLink;
