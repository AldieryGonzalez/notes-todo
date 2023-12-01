"use client";
import { UserButton } from "@clerk/nextjs";

type ProtectedPageProps = {};
const ProtectedPage: React.FC<ProtectedPageProps> = ({ ...props }) => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProtectedPage;
