import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

type MarketingPageProps = {
  children: React.ReactNode;
};

const MarketingPage: React.FC<MarketingPageProps> = ({
  children,
  ...props
}) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex w-fit items-center rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm">
          <Medal className="mr-2 h-6 w-6" />
          No 1 Task management
        </div>
        <h1 className="mb-6 text-center text-3xl text-neutral-800 md:text-6xl">
          Taskify helps teams move
        </h1>
        <div className=" rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 px-4 font-mono text-3xl font-bold text-white md:text-6xl">
          work forward.
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-xs text-center text-sm text-neutral-500 md:max-w-2xl md:text-lg">
        Collaborate, manage projects and reach new productivity peaks. From high
        rises to the home office, the way your team works is unique - accomplish
        it all with Taskify.
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href="/signUp">Get Taskify for free</Link>
      </Button>
    </div>
  );
};
export default MarketingPage;
