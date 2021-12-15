import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { getGitHubUser } from "~/data/github";
import { Contributor } from "~/types";

const avatarUrlsState = atom<{ [key: string]: string }>({
  key: "contributors/avatarUrls",
  default: {},
});

export const useContributors = () => {
  const [avatarUrls, setAvatarUrls] = useRecoilState(avatarUrlsState);

  const loadAvatarUrl = useCallback(
    async (contributor: Contributor) => {
      if (avatarUrls[contributor.slug]) {
        return;
      }

      const githubUrl = contributor.links?.find(
        (link) => link.name === "GitHub"
      )?.url;
      if (!githubUrl) {
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
