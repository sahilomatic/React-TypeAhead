import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";

export default function useFetch(query) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    debounce(async (signal) => {
      try {
        let request = await fetch(
          `https://swapi.dev/api/people/?search=${query}`,
          { signal }
        );
        let data = await request.json();
        console.log(data);
        setData(data.results);
      } catch (e) {
        setError(`Error: ${e}`);
      }
    }, 400),
    []
  );
  useEffect(() => {
    console.log(query);
    if (query == "") {
      console.log("here");
      setData([]);
      setError(null);

      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal);

    return () => {
      if (query == "") {
        console.log("here");
        setData([]);
        setError(null);
        return;
      }
      controller.abort();
    };
  }, [query]);

  return [data, error];
}
