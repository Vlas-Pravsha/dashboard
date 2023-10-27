export async function getBtcToUsd() {
  const url =
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=3&e=CCCAGG";
  try {
    const res = await fetch(url);
    return (await res.json()).Data.Data;
  } catch (e) {
    console.error(e);
  }
}
export async function getETHToUsd() {
  const url =
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=30&aggregate=3&e=Kraken&extraParams=your_app_name";
  try {
    const res = await fetch(url);
    return (await res.json()).Data.Data;
  } catch (e) {
    console.error(e);
  }
}
