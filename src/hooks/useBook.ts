import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=UuofVhYNwhwMEhwhLLdIrlkqYFURbxLG`);
  console.log(result)
  const json = await result.json();
  return json;
}

export function useBook() {
  return useQuery(["books"], fetchData);
}