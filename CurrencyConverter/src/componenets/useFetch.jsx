import { useEffect, useState } from "react";

const useFetch = (currency) => {
  const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
console.log(currency)

const URL = `${BASE_URL}/${currency}.json`;
  const [data, setData] = useState({});
  const [isPending, setPending] = useState(true);
  const [err, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(URL)
      .then((res) => {
        if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
          console.log("data is loaded")

        return res.json();
      })
      .then((d) => {
        setData(d[currency]);
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
  [currency]);
  // console.log("data is loaded out" + data)

  return { data };
};
export default useFetch;
