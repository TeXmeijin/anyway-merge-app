import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ContributorHeading from "~/components/atoms/contributer-heading/index";
import { contributors } from "~/data";
import { getGitHubUser } from "~/data/github";
import { convertTextToHtml } from "~/libs/convertTextToHtml";
import { encodeHtml } from "~/libs/encodeHtml";

function ContributorPage() {
  const {
    query: { slug },
  } = useRouter();
  const [avatarUrl, setAvatarUrl] = useState<string>();

  const contributor = contributors.find((c) => c.slug === slug);

  useEffect(() => {
    const githubUrl = contributor?.links?.find(
      (link) => link.name === "GitHub"
    )?.url;
    githubUrl &&
      getGitHubUser({ githubUrl }).then((user) => {
        setAvatarUrl(user.avatar_url as string);
      });
  }, [contributor?.links]);

  if (!contributor) return <ErrorPage statusCode={404} />;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributorHeading iconUrl={avatarUrl}>
            {contributor.name}
          </ContributorHeading>
          <p
            dangerouslySetInnerHTML={encodeHtml(
              convertTextToHtml(contributor?.description)
            )}
          />
          <ul>
            {(contributor.links ?? []).map((link) => (
              <li
                key={link.url}
                className={(() => {
                  if (link.name === "Twitter") {
                    return styles.listTwitter;
                  } else if (link.name === "GitHub") {
                    return styles.listGitHub;
                  }
                })()}
              >
                <a target="_blank" rel="noreferer noreferrer" href={link.url}>
                  {(() => {
                    if (link.name === "Twitter") {
                      return `@${link.url.split("/").splice(-1)[0]}`;
                    } else if (link.name === "GitHub") {
                      return `@${link.url.split("/").splice(-1)[0]}`;
                    } else {
                      return link.name;
                    }
                  })()}
                </a>
              </li>
            ))}
          </ul>
          {contributor?.additionalSection && (
            <>{contributor.additionalSection}</>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContributorPage;
