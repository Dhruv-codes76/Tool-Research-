import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});

export async function getRepoStats(owner: string, repo: string) {
  try {
    const { data } = await octokit.rest.repos.get({
      owner,
      repo,
    });

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      issues: data.open_issues_count,
      description: data.description,
      lastUpdate: data.updated_at,
    };
  } catch (error) {
    console.error(`Error fetching repo stats for ${owner}/${repo}:`, error);
    return null;
  }
}

/**
 * Extracts owner and repo name from a GitHub URL.
 */
export function parseGitHubUrl(url: string) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (match) {
    return {
      owner: match[1],
      repo: match[2].replace(/\.git$/, ""),
    };
  }
  return null;
}
