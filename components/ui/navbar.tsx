"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleMenuClick() {
    setOpen(!open);
  }

  return (
    <>
      {/* Navbar on mobile */}
      <div
        className={`bg-white w-screen h-screen absolute z-50 flex flex-col text-4xl font-extrabold pl-5 ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          onClick={handleMenuClick}
          className="w-fit text-4xl ml-auto mr-8 mt-3.5"
        >
          <IoMenu />
        </div>

        <div
          onClick={handleMenuClick}
          className="flex h-fit w-fit flex-col justify-around p-5 gap-y-6"
        >
          <Link href="#features" className="hover:underline">
            Features
          </Link>
          <Link href="#pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="#faq" className="hover:underline">
            FAQ
          </Link>
        </div>
      </div>

      <header className="z-0 sticky top-0 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Image
            src="/Budgetize-Logo-Black.svg"
            alt="Budgetize Logo"
            width={256}
            height={256}
            className="w-11 aspect-square"
          />

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:underline"
            >
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline">
              FAQ
            </Link>
          </nav>

          <div className="flex flex-row items-center gap-x-3">
            <div className="flex items-center gap-4">
              <Button className="bg-[#6964b5] hover:bg-[#5a56a3]">
                Open App
              </Button>
            </div>

            <div onClick={handleMenuClick} className="w-fit text-4xl lg:hidden">
              <IoMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
