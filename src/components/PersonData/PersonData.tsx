import SectionHeader from "@/components/SectionHeader/SectionHeader";
import DataCell from "@/components/DataCell/DataCell";
import {useFetch} from "@/hooks/useFetch";
import {IPersonData} from "@/interfaces/personData";
import {useLayoutStore} from "@/store/layoutStore";
import {useEffect} from "react";

interface IProps {
  urlData: string;
}

const PersonData = ({urlData}: IProps) => {
  const {changeTitle} = useLayoutStore();

  const personData = useFetch(urlData);

  useEffect(() => {
    changeTitle((personData.data as IPersonData)?.name ?? '');
  }, [personData.data])

  return (
    <>
      <SectionHeader text='General Information'/>
      <DataCell attribute='Eye Color' value={(personData.data as IPersonData)?.eye_color}/>
      <DataCell attribute='Hair Color' value={(personData.data as IPersonData)?.hair_color}/>
      <DataCell attribute='Skin Color' value={(personData.data as IPersonData)?.skin_color}/>
      <DataCell attribute='Birth Year' value={(personData.data as IPersonData)?.birth_year}/>

      <SectionHeader text='Vehicles'/>
      {
        (personData.data as IPersonData)?.vehicles.map((url, idx) => (
          <DataCell key={idx} loadUrl={url}/>
        ))
      }

    </>
  );
};

export default PersonData;
