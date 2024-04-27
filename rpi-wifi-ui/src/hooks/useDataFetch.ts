import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export function useDataFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, error, isLoading, refetch };
}

export function useDataPost<T>(url: string, onFinish?: () => void) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData<S>(mPostData: S) {
    setIsLoading(true);
    try {
      const response = await axios.post(url, mPostData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      onFinish?.();
    }
  }

  // useEffect(() => {
  //   if (!manual) {
  //     fetchData();
  //   }
  // }, [url]);

  function refetch<S>(postData: S) {
    fetchData<S>(postData);
  }

  return { data, error, isLoading, refetch };
}

export function useDeleteConnection(url: string, onFinish?: () => void) {
  const [data, setData] = useState();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(connection: string) {
    setIsLoading(true);
    try {
      const response = await axios.delete(url + "?name=" + connection);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      onFinish?.();
    }
  }

  function refetch(connection: string) {
    fetchData(connection);
  }

  return { data, error, isLoading, refetch };
}

export function useUpConnection(
  onSuccess?: () => void,
  onError?: () => void,
  onFinish?: () => void
) {
  const [data, setData] = useState();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(connection: string) {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "api/connectToExisting?name=" + connection
      );
      setData(response.data);
      onSuccess?.();
    } catch (error) {
      setError(error);
      onError?.();
    } finally {
      setIsLoading(false);
      onFinish?.();
    }
  }

  function refetch(connection: string) {
    fetchData(connection);
  }

  return { data, error, isLoading, refetch };
}
