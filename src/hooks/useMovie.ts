import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa0617a1d1587096d6bef6199d81e063`);
  console.log(result)
  const json = await result.json();
  return json;
}

export function useMovie() {
  return useQuery(["movies"], fetchData);
}