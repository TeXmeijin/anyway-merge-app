import { useEffect } from "react";
import { useContributors } from "~/hooks/useContributors";
import { Contributor } from "~/types";

type Props = {
  contributor: Contributor;
  className?: string;
  placeholder?: JSX.Element;
};

const ContributorIcon = (props: Props) => {
  const { getAvatarUrl, loadAvatarUrl } = useContributors();
  const { contributor, placeholder, ...others } = props;
  const avatarUrl = getAvatarUrl(contributor);

  useEffect(() => {
    loadAvatarUrl(contributor);
  }, [avatarUrl, contributor]);

  if (!avatarUrl) {
    return placeholder ?? <></>;
  }

  return <img src={avatarUrl} alt={contributor.name} {...others} />;
};

export default ContributorIcon;
