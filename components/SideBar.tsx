import Link from "next/link";
import Image from "next/image";
import React from "react";

const SideBar = ({ user }: SidebarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            alt="Logo Horizon"
            className="size-[24px] max-xl:size-14"
            src="/icons/logo.svg"
            width={34}
            height={34}
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
      </nav>
    </section>
  );
};

export default SideBar;
