import Navbar from "./_components/Navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
