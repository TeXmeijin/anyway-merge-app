import ErrorPage from "next/error";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import ContributorHeading from "~/components/atoms/contributor-heading/index";
import ContributorsList from "~/components/atoms/contributors-list";
import Seo from "~/components/Seo";
import { getLayout } from "~/components/templates/Layout";
import { contributors } from "~/data";
import { useContributors } from "~/hooks/useContributors";
import { convertTextToHtml } from "~/libs/convertTextToHtml";
import { encodeHtml } from "~/libs/encodeHtml";
import { ContributorLink } from "~/types";

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

  const links: ContributorLink[] = [
    { name: "Qiita", url: `https://qiita.com/${contributor.slug}` },
    ...(contributor.links ?? []),
  ];

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
              <div>
                <h1 className={styles.heading}>{contributor.name}</h1>
                <ul>
                  {links.map((link) => (
                    <li
                      key={link.url}
                      className={(() => {
                        if (link.name === "Qiita") {
                          return styles.listQiita;
                        } else if (link.name === "Twitter") {
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
                          } else if (link.name === "Qiita") {
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
              </div>
            </ContributorHeading>
            <p
              dangerouslySetInnerHTML={encodeHtml(
                convertTextToHtml(contributor?.description)
              )}
            />
            {contributor?.additionalSection && (
              <div className={styles.additionalSection}>
                {contributor.additionalSection}
              </div>
            )}
          </div>
        </div>
        <div className={styles.contributorsListWrapper}>
          <ContributorsList />
        </div>
      </div>
    </>
  );
}

ContributorPage.layout = getLayout();

export default ContributorPage;
