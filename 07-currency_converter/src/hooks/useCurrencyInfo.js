import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    const fetchCurrencyData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch currency data');
        }
        
        const result = await response.json();
        setData(result[currency] || {});
      } catch (err) {
        setError(err.message);
        console.error('Currency API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;