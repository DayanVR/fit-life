"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Exercises", href: "/exercises" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="container relative py-4">
      <div className="fixed start-0 top-0 z-20 w-full bg-white dark:border-gray-600 dark:bg-gray-900">
        <Navbar
          className="mx-auto max-w-screen-2xl items-center justify-between md:p-3"
          fluid
        >
          <Navbar.Brand>
            <h1 className="text-primary text-2xl font-bold dark:text-white">
              FitLife
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {links.map((link) => (
              <Navbar.Link
                href={link.href}
                key={link.name}
                className={clsx("p-1.5 hover:bg-gray-400", {
                  "bg-gray-300 md:bg-transparent": pathname === link.href,
                })}
              >
                <span
                  className={clsx(
                    "py-1.5 text-xl font-semibold text-black md:py-4 md:px-2 xl:p-4",
                    {
                      "md:bg-gray-300": pathname === link.href,
                      "hover:bg-gray-400": pathname !== link.href,
                    },
                  )}
                >
                  {link.name}
                </span>
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

{
  /* <Navbar.Link
                href={link.href}
                key={link.name}
                className={clsx("p-3 md:p-4 text-black font-semibold text-xl", {
                  "bg-gray-500/85": pathname === link.href,
                  "hover:bg-gray-400": pathname !== link.href,
                })}
              >
                {link.name}
              </Navbar.Link> */
}
