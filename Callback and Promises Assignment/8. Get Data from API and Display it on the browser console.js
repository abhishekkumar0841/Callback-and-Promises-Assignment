const api = fetch("https://jsonplaceholder.typicode.com/posts");

async function getDataFromAPI() {
  try {
    const response = await api;
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error Happening!!!", err)
  }
}

getDataFromAPI();