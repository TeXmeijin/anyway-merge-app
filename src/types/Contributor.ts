import React from "react";

export type Contributor = {
  name: string;
  slug: string;
  description?: string;
  additionalSection?: React.ReactNode;
  links?: {
    name: string;
    url: `https://${string}`;
  }[];
};
