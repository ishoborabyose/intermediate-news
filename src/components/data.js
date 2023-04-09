export async function fetchData() {
  const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=10`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch request:", error);
  }
}

export async function fetchDataPublishers() {
  const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";

  const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.sources);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch request:", error);
  }
}
