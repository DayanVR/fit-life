import Image from "next/image";
import Header from "./ui/header";
import Intro from "./ui/intro/intro";

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col ">
      <main className="flex-grow">
        <Intro />
      </main>

      <footer className="border-t py-8">
        <div className="text-muted-foreground container mx-auto px-4 text-center">
          <p>&copy; 2023 FitLife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
