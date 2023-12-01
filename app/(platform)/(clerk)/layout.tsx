type ClerkLayoutProps = {
  children: React.ReactNode;
};

const ClerkLayout: React.FC<ClerkLayoutProps> = ({ children, ...props }) => {
  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
