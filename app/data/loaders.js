import { API_URL } from "../lib/constants";
import { flattenAttributes } from "../lib/utils";

export async function getBricksData() {
  try {
    const response = await fetch(`${API_URL}/bricks`, {
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
  try {
    const response = await fetch(`${API_URL}/bricks/${brickId}?populate=user`, {
      next: { revalidate: 0 },
    });
    const data = await response.json();

    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getUserData({ userId }) {
  if (!userId) return null;
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      next: { revalidate: 0, tags: ["users", userId] },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}
export async function getUserBrickData({ userId }) {
  try {
    const response = await fetch(
      `${API_URL}/bricks?filters[user][$eq]=${userId}`,
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
