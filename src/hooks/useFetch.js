import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trigger, setTrigger] = useState(0);

  const triggerFetch = () => {
    setTrigger(trigger + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        alert("Something went wrong.");
      }
    };
    fetchData();
  }, [url, trigger]);

  return { loading, error, data, triggerFetch };
};

export default useFetch;
