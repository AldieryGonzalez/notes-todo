import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button variant={"outline"} size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href="/signup">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
