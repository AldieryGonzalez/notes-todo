"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useOrganizationList } from "@clerk/nextjs";

type OrgControlProps = {};

const OrgControl: React.FC<OrgControlProps> = ({ ...props }) => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (params.organizationId) {
      if (!setActive) return;
      setActive({ organization: params.organizationId as string });
    }
  }, [setActive, params.organizationId]);
  return null;
};

export default OrgControl;
