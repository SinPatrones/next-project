import {NextPage} from "next";

import LoadingCell from "@/components/LoadingCell/LoadingCell";
import PersonCell from "@/components/PersonCell/PersonCell";
import {usePeople} from "@/hooks/usePeople";
import {IPeople} from "@/interfaces/people";
import {useEffect, useState} from "react";
import NoticeCell from "@/components/NoticeCell/NoticeCell";
import PersonData from "@/components/PersonData/PersonData";
import {useLayoutStore} from "@/store/layoutStore";

const Index: NextPage = () => {
  const [page, setPage] = useState(1);
  const [viewData, setViewData] = useState('');

  const {changeTitle, goBack} = useLayoutStore();

  const peopleQuery = usePeople(page);


  useEffect(() => {
    setViewData('');
    changeTitle('People');
  }, [])

  if (peopleQuery.isLoading) {
    return (
      <>
        <LoadingCell/>
      </>
    );
  }

  if (peopleQuery.isError) {
    changeTitle('People');
    return (
      <NoticeCell/>
    );
  }

  if (viewData != '' && goBack) {
    return <PersonData urlData={viewData}/>;
  } else {
    return (
      <>
        {
          peopleQuery.data?.results.map((person: IPeople) => {
            return <PersonCell key={person.url} name={person.name} homeworldUrl={person.homeworld}
              specieUrl={person.species[0] ?? ''} onClickFn={() =>
                setViewData(person.url)
              }/>
          })
        }
        <button onClick={() => setPage(prev => prev + 1)}>load more</button>
      </>
    );
  }

}


export default Index;
