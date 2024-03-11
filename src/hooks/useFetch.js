/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const responseInJSON = await response.json();
      setData(responseInJSON);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);
  return { data };
};
