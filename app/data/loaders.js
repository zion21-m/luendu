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
