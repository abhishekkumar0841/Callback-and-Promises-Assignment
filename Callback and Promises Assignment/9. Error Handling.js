const api = fetch("https://jsonplaceholder.typicode.com/posts/123456789");

async function retrieveDataFromAPI() {
  try {
    const response = await api;
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error !!!", err)
  }
}

retrieveDataFromAPI();
