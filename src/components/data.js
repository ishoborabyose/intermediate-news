export async function fetchData(searchQuery = "") {
  const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";

  const url = `https://news-proxy.netlify.app/api/top-headlines?country=us&apiKey=${API_KEY}&pageSize=10`;
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

  const response = await fetch(
    `https://news-proxy.netlify.app/api/top-headlines?country=us&q=${searchQuery}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function fetchDataPublishers() {
  const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";

  const url = `https://news-proxy.netlify.app/api/top-headlines/sources?apiKey=${API_KEY}`;
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
