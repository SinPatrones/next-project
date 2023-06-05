import {swApi} from "@/api/swApi";
import {useQuery} from "@tanstack/react-query";

const fetchData = async (url: string): Promise<any> => {
  const {data} = await swApi.get(url);
  return data;
};

export const useFetch = (url: string = '') => {
  const fetchQuery = useQuery({
    queryKey: ['fetch', {url}],
    queryFn: () => fetchData(url),
    enabled: !!url
  });

  return fetchQuery;
}
