const PRODUCT_HUNT_API_URL = "https://api.producthunt.com/v2/api/graphql";

interface ProductHuntPost {
  id: string;
  name: string;
  tagline: string;
  url: string;
  votesCount: number;
  website: string;
}

interface ProductHuntResponse {
  posts: {
    edges: {
      node: ProductHuntPost;
    }[];
  };
}

/**
 * Utility to fetch data from Product Hunt GraphQL API.
 */
async function fetchFromProductHunt(query: string, variables: Record<string, unknown> = {}) {
  const response = await fetch(PRODUCT_HUNT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PRODUCTHUNT_API_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }
  return json.data as ProductHuntResponse;
}

/**
 * Get top tools today.
 */
export async function producthunt_top_of_day() {
  const query = `
    query {
      posts(first: 20, order: VOTES) {
        edges {
          node {
            id
            name
            tagline
            url
            votesCount
            website
          }
        }
      }
    }
  `;
  try {
    const data = await fetchFromProductHunt(query);
    return data.posts.edges.map((e) => e.node);
  } catch (error) {
    console.error("Error fetching Product Hunt top of day:", error);
    return [];
  }
}

/**
 * Get top tools this month.
 */
export async function producthunt_top_of_month() {
  const query = `
    query {
      posts(first: 50, order: VOTES) {
        edges {
          node {
            id
            name
            tagline
            url
            votesCount
            website
          }
        }
      }
    }
  `;
  try {
    const data = await fetchFromProductHunt(query);
    return data.posts.edges.map((e) => e.node);
  } catch (error) {
    console.error("Error fetching Product Hunt top of month:", error);
    return [];
  }
}

/**
 * Combined logic as requested in CLAUDE.md.
 */
export async function runProductHuntDiscovery() {
  console.log("Starting Product Hunt discovery...");
  
  const today = await producthunt_top_of_day();
  const month = await producthunt_top_of_month();
  
  // Combine and deduplicate by ID
  const combined = [...today, ...month];
  const uniqueTools = Array.from(new Map(combined.map(t => [t.id, t])).values());
  
  console.log(`Found ${uniqueTools.length} unique tools.`);
  return uniqueTools;
}
