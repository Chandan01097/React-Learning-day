import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_CrNzLLARnsucUrdoJAPuW3wwrLlHfFu9FZjKnqzs&base_currency=${currency.toUpperCase()}`;
    console.log("Fetching currency data from:", url);

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log("Received data:", response);
        if (response && response.data) {
          setData(response.data); // this contains the object with currencies
        } else {
          console.error("API response missing data:", response);
          setData({});
        }
      })
      .catch((error) => {
        console.error("API error:", error);
        setData({});
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
