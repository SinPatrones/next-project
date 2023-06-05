import {IFetchAllPeople} from "@/interfaces/fetchAllPeople";
import {swApi} from "@/api/swApi";
import {useQuery} from "@tanstack/react-query";

const fetchPeople = async (page: number = 1): Promise<IFetchAllPeople> => {
  const {data} = await swApi.get(`https://swapi.dev/api/people?page=${page}`);
  return data as IFetchAllPeople;
};

export const usePeople = (page: number) => {

  const peopleQuery = useQuery(
    {
      queryKey: ['people', {page}],
      queryFn: () => fetchPeople(page),
      keepPreviousData: true,
    }
  );

  return peopleQuery;
}
