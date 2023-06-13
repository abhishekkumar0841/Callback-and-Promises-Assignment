let api = fetch("https://jsonplaceholder.typicode.com/todos/1");

async function fetchData(api) {
  try {
    const response = await api;
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error is --> ",err);
  }
}

fetchData(api);
