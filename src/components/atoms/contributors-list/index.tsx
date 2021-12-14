import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { contributors } from "~/data";
import { getGitHubUser } from "~/data/github";
import { pagesPath } from "~/libs/$path";
import homeStyles from "~/styles/Home.module.css";
import { Contributor } from "~/types";

const ContributorsList = () => {
  return (
    <div>
      <ul className={homeStyles.list}>
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
    <li key={member.slug} className={homeStyles.listitem}>
      <Link href={pagesPath.contributors._slug(member.slug).$url()}>
        <a className={styles.link}>
          {avatarUrl ? (
            <img src={avatarUrl} alt={member.name} className={styles.linkImg} />
          ) : (
            <div className={styles.linkImg} />
          )}
          <div className={styles.linkName}>{member.name}</div>
        </a>
      </Link>
    </li>
  );
};

export default ContributorsList;
