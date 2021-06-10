import { useEffect, useState } from "react";

function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(url);
    const items = await data.json();
    setData(items);
  };
  return data;
}

export default useFetch;
