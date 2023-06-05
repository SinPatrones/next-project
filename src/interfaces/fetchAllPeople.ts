import {IPeople} from "@/interfaces/people";

export interface IFetchAllPeople {
  count: number;
  next: string;
  previous: null | string;
  results: IPeople[];
}
