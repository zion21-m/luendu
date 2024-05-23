import { flattenAttributes } from "../lib/utils";

// const baseUrl = "http://localhost:1337";
const baseUrl = "https://api.luendu.org";

export async function getBricksData() {
  const url = new URL("/api/bricks", baseUrl);
  try {
    const response = await fetch(`${baseUrl}/api/bricks`, {
      next: { revalidate: 0 },
    });
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}
export async function getBrickData({ brickId }) {
  const url = new URL("/api/bricks", baseUrl);
  try {
    const response = await fetch(
      `${baseUrl}/api/bricks/${brickId}?populate=user`,
      {
        next: { revalidate: 0 },
      }
    );
    const data = await response.json();

    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getUserData({ userId }) {
  const url = new URL(`/api/users`, baseUrl);
  try {
    const response = await fetch(`${baseUrl}/api/users/${userId}`, {
      next: { revalidate: 0 },
    });
    const data = await response.json();
    console.log("data loader", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}
export async function getUserBrickData({ userId }) {
  try {
    const response = await fetch(
      `${baseUrl}/api/bricks?filters[user][$eq]=${userId}`,
      {
        next: { revalidate: 0, tags: ["bricks", userId] },
      }
    );
    const data = await response.json();

    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}
// https://api.luendu.org/api/bricks?filters[user][$eq]=8
