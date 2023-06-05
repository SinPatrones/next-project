import styled from "styled-components";
import {useFetch} from "@/hooks/useFetch";
import {IVehicle} from "@/interfaces/vehicle";

interface IProp {
  attribute?: string;
  value?: string | undefined;
  loadUrl?: string;
}

const DataCell = ({attribute, value, loadUrl = ''}: IProp) => {
  const fetchData = useFetch(loadUrl);

  if (loadUrl !== '') {
    return (
      <DataCellStyled>
        <Text $light={true}>{(fetchData.data as IVehicle)?.name}</Text>
      </DataCellStyled>
    );
  }
  return (
    <DataCellStyled>
      <Text $light={true}>{attribute}</Text>
      <Text $align='right'>{value}</Text>
    </DataCellStyled>
  );
};

const DataCellStyled = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  gap: 16px
`;

const Text = styled.span<{ $align?: string; $light?: boolean }>`
  text-transform: capitalize;
  flex: 1;
  text-align: ${props => props.$align ?? "left"};
  color: ${props => props.$light ? '#828282' : '#333333'}
`;


export default DataCell;
