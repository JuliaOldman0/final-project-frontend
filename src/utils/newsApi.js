const newsApiBaseUrl =
  import.meta.env.PROD ?
    "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const API_KEY = "1f9a8f37640e485fa2a4866b4bd675ec";

function getDateSevenDaysAgo() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split("T")[0];
}

function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}

export function searchNews(keyword) {
  const fromDate = getDateSevenDaysAgo();
  const toDate = getCurrentDate();

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(
    keyword,
  )}&apiKey=${API_KEY}&from=${fromDate}&to=${toDate}&pageSize=100`;

  return fetch(url).then(checkResponse);
}
