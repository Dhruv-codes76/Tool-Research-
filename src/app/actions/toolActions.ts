"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getRepoStats, parseGitHubUrl } from "@/lib/github";

/**
 * Server action to submit a new tool.
 */
export async function submitTool(formData: FormData, userId: string) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const repoUrl = formData.get("repoUrl") as string;
  const category = formData.get("category") as string;

  // Validate required fields
  if (!name || !description || !repoUrl || !category) {
    throw new Error("All fields are required.");
  }

  // Fetch live stats from GitHub
  const githubInfo = parseGitHubUrl(repoUrl);
  let stats = { stars: 0, forks: 0, issues: 0 };
  
  if (githubInfo) {
    const fetchedStats = await getRepoStats(githubInfo.owner, githubInfo.repo);
    if (fetchedStats) {
      stats = {
        stars: fetchedStats.stars,
        forks: fetchedStats.forks,
        issues: fetchedStats.issues,
      };
    }
  }

  const tool = await prisma.tool.create({
    data: {
      name,
      description,
      repoUrl,
      category,
      userId,
      ...stats,
      published: true, // Auto-publish for now
    },
  });

  revalidatePath("/");
  return tool;
}

/**
 * Server action to get all published tools.
 */
export async function getTools(query?: string, category?: string) {
  return prisma.tool.findMany({
    where: {
      published: true,
      ...(query && {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      }),
      ...(category && { category }),
    },
    orderBy: {
      stars: "desc",
    },
  });
}

/**
 * Server action to get a single tool by repo URL.
 */
export async function getToolByUrl(url: string) {
  return prisma.tool.findUnique({
    where: { repoUrl: url },
  });
}
