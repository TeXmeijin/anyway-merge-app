import Link from "next/link";
import { contributors } from "~/data";
import { pagesPath } from "~/libs/$path";
import styles from "~/styles/Home.module.css";

const ContributorsList = () => {
  return (
    <div>
      <ul className={styles.list}>
        {contributors.map((member) => (
          <li key={member.slug} className={styles.listitem}>
            <Link href={pagesPath.contributors._slug(member.slug).$url()}>
              <a>{member.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContributorsList;
