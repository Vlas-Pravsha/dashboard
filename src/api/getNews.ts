export async function getNews() {
  const url =
    "https://newsapi.org/v2/everything?q=apple&from=2023-08-15&to=2023-08-15&sortBy=popularity&apiKey=3d5c7c053e504c1ba0adddce9e454e39";
  try {
    const res = await fetch(url);
    return (await res.json()).articles;
  } catch (e) {
    console.error(e);
  }
}

