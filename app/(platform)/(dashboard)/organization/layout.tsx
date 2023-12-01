import Sidebar from "../_components/sidebar";

type OrganizationLayoutProps = {
  children: React.ReactNode;
};

const OrganizationLayout: React.FC<OrganizationLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-4 md:pt-8 2xl:max-w-screen-xl">
      <div className="flex gap-x-7">
        <div className="hidden w-64 shrink-0 md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
