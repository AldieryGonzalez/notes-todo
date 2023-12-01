import { OrganizationList } from "@clerk/nextjs";

type CreateOrganizationPageProps = {};

const CreateOrganizationPage: React.FC<CreateOrganizationPageProps> = ({
  ...props
}) => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={"/organization/:id"}
      afterCreateOrganizationUrl={"/organization/:id"}
    />
  );
};

export default CreateOrganizationPage;
