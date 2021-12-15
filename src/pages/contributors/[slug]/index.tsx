import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./styles.module.css";
import ContributorHeading from "~/components/atoms/contributer-heading/index";
import Seo from "~/components/Seo";
import { contributors } from "~/data";
import { useContributors } from "~/hooks/useContributors";
import { convertTextToHtml } from "~/libs/convertTextToHtml";
import { encodeHtml } from "~/libs/encodeHtml";

function ContributorPage() {
  const {
    query: { slug },
  } = useRouter();
  const { getAvatarUrl, loadAvatarUrl } = useContributors();
  const contributor = contributors.find((c) => c.slug === slug);
  const avatarUrl = getAvatarUrl(contributor);

  useEffect(() => {
    if (!contributor) {
      return;
    }
    loadAvatarUrl(contributor);
  }, [loadAvatarUrl, contributor]);

  if (!contributor) return <ErrorPage statusCode={404} />;

  return (
    <>
      <Seo
        title={`${contributor.name}｜ 毎日誰かのプルリクを脳死でマージするアドベントカレンダー`}
        description={`${contributor.name}の自己紹介ページです。`}
      />
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
                  <a
                    target="_blank"
                    rel="nofollow noreferrer noopener me"
                    href={link.url}
                  >
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
    </>
  );
}

export default ContributorPage;
