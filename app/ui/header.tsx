import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <h1 className="text-primary text-2xl font-bold">FitLife</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/exercises" className="text-muted-foreground hover:text-primary">
              Exercises
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
