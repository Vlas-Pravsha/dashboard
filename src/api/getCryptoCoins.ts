export async function getCryptoCoins() {
  const url =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}
