import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { contributors } from "~/data";
import { avatars } from "~/data/avatars";
import { getGitHubUser } from "~/data/github";
import { Contributor } from "~/types";

const avatarUrlsState = atom<{ [key: string]: string }>({
  key: "contributors/avatarUrls",
  default: {},
});

export const useContributors = () => {
  const [avatarUrls, setAvatarUrls] = useRecoilState(avatarUrlsState);

  const getGitHubIconUrl = useCallback((contributor: Contributor) => {
    return contributor.links?.find((link) => link.name === "GitHub")?.url;
  }, []);

  const getDefaultAvatarUrl = useCallback((contributor: Contributor) => {
    const index = contributors.findIndex((c) => c.slug === contributor.slug);
    const noIconCount = contributors
      .slice(0, index)
      .filter((c) => !getGitHubIconUrl(c)).length;
    const avatarIndex = noIconCount % avatars.length;
    return `/images/avatars/${avatars[avatarIndex]}`;
  }, []);

  const loadAvatarUrl = useCallback(
    async (contributor: Contributor) => {
      if (avatarUrls[contributor.slug]) {
        return;
      }

      const githubUrl = getGitHubIconUrl(contributor);
      if (!githubUrl) {
        setAvatarUrls((avatarUrls) => ({
          ...avatarUrls,
          [contributor.slug]: getDefaultAvatarUrl(contributor),
        }));
        return;
      }

      const user = await getGitHubUser({ githubUrl });
      setAvatarUrls((avatarUrls) => ({
        ...avatarUrls,
        [contributor.slug]: user.avatar_url as string,
      }));
    },
    [Object.keys(avatarUrls).length]
  );

  const getAvatarUrl = useCallback(
    (contributor?: Contributor) => {
      if (!contributor) {
        return undefined;
      }
      return avatarUrls[contributor.slug];
    },
    [Object.keys(avatarUrls).length]
  );

  return { getAvatarUrl, loadAvatarUrl };
};
