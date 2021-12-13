import Link from "next/link";
import { contributors } from "~/data";
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
  return (
    <li key={member.slug} className={styles.listitem}>
      <Link href={pagesPath.contributors._slug(member.slug).$url()}>
        <a>{member.name}</a>
      </Link>
    </li>
  );
};

export default ContributorsList;
