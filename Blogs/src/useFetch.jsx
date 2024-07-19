import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [err, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url)
      .then((res) => {
        if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("data is loaded")
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
            console.log('fetch aborted')}
            else{
        setError(err.message);
        console.log("Error is found :(): " + err);
        setPending(null);}
      });
         // abort the fetch
    return () => abortCont.abort();
  },
  [url]);
//   console.log("data is loaded out" + {data})

  return { data, isPending, err };
};
export default useFetch;
