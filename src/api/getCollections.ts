export async function getCollections(categoryId: number, page: number) {
  const category = categoryId ? `category=${categoryId}` : "";
  const url = `https://6413ad9ec469cff60d684431.mockapi.io/collections?page=${page}&limit=3&${category}`;
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}
