import styled from "styled-components";
import {AiOutlineRight} from "react-icons/ai";
import {useFetch} from "@/hooks/useFetch";
import {IHomeworld} from "@/interfaces/homeworld";
import {ISpecie} from "@/interfaces/specie";
import {useLayoutStore} from "@/store/layoutStore";

interface IProps {
  name: string;
  specieUrl: string;
  homeworldUrl: string;
  onClickFn: () => void;
}

const PersonCell = ({name, specieUrl = '', homeworldUrl, onClickFn}: IProps) => {
  const {data: homewordData} = useFetch(homeworldUrl);
  const {data: specieData} = useFetch(specieUrl);

  const {toggleGoBack} = useLayoutStore();

  return (
    <PersonCellWrapper onClick={() => {
      onClickFn();
      toggleGoBack();
    }}>
      <PersonDataWrapper>
        <PersonName>{name}</PersonName>
        <PersonHomeworld>{`${(specieData as ISpecie)?.name ?? 'Human'} from ${(homewordData as IHomeworld)?.name}`}</PersonHomeworld>
      </PersonDataWrapper>
      <Icon/>
    </PersonCellWrapper>
  );
};

const PersonCellWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PersonName = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const PersonHomeworld = styled.p`
  font-size: 17px;
`;

const PersonDataWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;

const Icon = styled(AiOutlineRight)`
  margin-right: 22px
`;

export default PersonCell;
