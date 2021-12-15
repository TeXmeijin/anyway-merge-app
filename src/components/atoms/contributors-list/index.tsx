import Link from "next/link";
import ContributorIcon from "../contributor-icon";
import styles from "./styles.module.css";
import { contributors } from "~/data";
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

const ContributorsListMember = ({ member }: { member: Contributor }) => {
  return (
    <li key={member.slug} className={homeStyles.listitem}>
      <Link href={pagesPath.contributors._slug(member.slug).$url()}>
        <a className={styles.link}>
          <ContributorIcon
            contributor={member}
            className={styles.linkImg}
            placeholder={<div className={styles.linkImg} />}
          />
          <div className={styles.linkName}>{member.name}</div>
        </a>
      </Link>
    </li>
  );
};

export default ContributorsList;
