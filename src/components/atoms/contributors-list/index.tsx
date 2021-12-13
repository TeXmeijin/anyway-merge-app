import Link from "next/link";
import { useEffect, useState } from "react";
import ContributorHeading from "~/components/atoms/contributer-heading/index";
import { contributors } from "~/data";
import { getGitHubUser } from "~/data/github";
import { pagesPath } from "~/libs/$path";
import styles from "~/styles/Home.module.css";
import { Contributor } from "~/types";

const ContributorsList = () => {
  return (
    <div>
      <ul className={styles.list}>
        {contributors.map((member) => (
          <ContributorsListMember key={member.toString()} member={member} />
        ))}
      </ul>
    </div>
  );
};

const ContributorsListMember = ({
  member,
}: {
  key: string;
  member: Contributor;
}) => {
  const [avatarUrl, setAvatarUrl] = useState<string>();
  useEffect(() => {
    const githubUrl = member?.links?.find(
      (link) => link.name === "GitHub"
    )?.url;
    githubUrl &&
      getGitHubUser({ githubUrl }).then((user) => {
        setAvatarUrl(user.avatar_url as string);
      });
  }, [member?.links]);
  return (
    <li key={member.slug} className={styles.listitem}>
      <Link href={pagesPath.contributors._slug(member.slug).$url()}>
        <a>
          <ContributorHeading iconUrl={avatarUrl}>
            {member.name}
          </ContributorHeading>
        </a>
      </Link>
    </li>
  );
};

export default ContributorsList;
