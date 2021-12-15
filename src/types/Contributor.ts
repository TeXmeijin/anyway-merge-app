import React from "react";

export type ContributorLink = {
  name: string;
  url: `https://${string}`;
};

export type Contributor = {
  name: string;
  slug: string;
  description?: string;
  additionalSection?: React.ReactNode;
  links?: ContributorLink[];
};
