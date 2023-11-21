import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <div className="fixed bottom-0 w-full border-t bg-zinc-100 px-4 py-2">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
