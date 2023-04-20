const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";
const BASE_URL = "https://news-proxy.netlify.app/api/top-headlines";

export async function fetchData(searchQuery = "", publisherId = "") {
  const url = `${BASE_URL}?country=us&apiKey=${API_KEY}&pageSize=10${
    publisherId ? `&sources=${publisherId}` : ""
  }${searchQuery ? `&q=${searchQuery}` : ""}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch request:", error);
  }
}

export async function fetchDataPublishers() {
  const url = `${BASE_URL}/sources?apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch request:", error);
  }
}
