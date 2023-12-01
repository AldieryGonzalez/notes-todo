import OrgControl from "./_components/org-control";

type OrganizationIdLayoutProps = {
  children: React.ReactNode;
};

const OrganizationIdLayout: React.FC<OrganizationIdLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
