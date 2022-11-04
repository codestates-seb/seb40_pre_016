import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://fuzzy-dancers-rule-113-52-194-59.loca.lt/';
// axios.defaults.withCredentials = true;

export const useAxios = (axiosParams, auto = true) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const clickFetchFunc = (config) => {
    console.log('axios 실행됨');
    fetchData(config);
  };
  // =======
  //     const [response, setResponse] = useState(undefined);
  //     const [error, setError] = useState('');
  //     const [loading, setLoading] = useState(true);
  //     const fetchData = async (params) => {
  //         try {
  //             const result = await axios.request(params);
  //             setResponse(result.data);
  //         } catch (error) {
  //             setError(error);
  //         } finally {
  //             setLoading(false);
  //         }
  //     };
  //     const clickFetchFunc = (config) => {
  //         fetchData(config);
  //     };
  // >>>>>>> 43cd93fe0136431d32659e5276de98f4c67d5e32

  useEffect(() => {
    if (auto) {
      fetchData(axiosParams);
    } else {
    }
  }, []); // execute once only

  return { response, error, loading, clickFetchFunc };
};