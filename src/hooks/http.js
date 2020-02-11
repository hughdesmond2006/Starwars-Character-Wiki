import { useState, useEffect } from 'react';

// 'useSomething' is the convention for a Hook
export const useHttp = (url, dependencies) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    console.log("Http Request: " + url);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.log("useHttp Response Error: ");
          throw new Error("Could not fetch person!");
        }
        return response.json();
      })
      .then(data => {
        console.log("Http Response: ", data);
        setFetchedData(data);
      })
      .catch(err => {
        console.log("useHttp Fetch Error: ", err);
        setFetchedData(null);
      });
  }, dependencies);

  // can return any number of elms
  return [fetchedData];
};