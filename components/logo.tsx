import Image from "next/image";
import Link from "next/link";

type LogoProps = {};

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="Taskify Logo" width={30} height={30} />
        <p className="pb-1 text-lg text-neutral-700">Taskify</p>
      </div>
    </Link>
  );
};

export default Logo;
