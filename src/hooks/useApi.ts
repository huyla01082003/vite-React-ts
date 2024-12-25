import { useState } from 'react';

const useApi = (apiFunction: (params: any) => Promise<any>) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async (params: any): Promise<any> => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFunction(params);
      setData(response);
      return response; // 
    } catch (err) {
      setError((err as Error).message || 'Something went wrong');
      return null; 
    } finally {
      setLoading(false);
    }
  };

  return { callApi, data, loading, error };
};
export default useApi;