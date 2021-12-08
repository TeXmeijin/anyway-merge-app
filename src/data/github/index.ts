import { Octokit } from "@octokit/rest";

const idInGitHubUrlRegex = /https?:\/\/github\.com\/(.+)\/?/;

const octokit = new Octokit();

type GetUserOption = {
  githubUrl: string;
};

export const getGitHubUser = (opts: GetUserOption) => {
  const { githubUrl } = opts;
  const matchedId = githubUrl?.match(idInGitHubUrlRegex);
  const id = (matchedId && matchedId[1]) || undefined;

  if (id) {
    return octokit.rest.users
      .getByUsername({
        username: id,
      })
      .then(({ data }) => data);
  } else {
    return Promise.reject(new Error("user not found"));
  }
};

export const getRepoContributers = () => {
  return octokit.rest.repos
    .listContributors({
      owner: "TeXmeijin",
      repo: "anyway-merge-app",
    })
    .then(({ data }) =>
      data.filter((contributor) => contributor.type === "User")
    );
};
