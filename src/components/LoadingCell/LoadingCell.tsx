import styled from "styled-components";
import {FaSpinner} from "react-icons/fa";

interface IProp {
  text?: string;
}

const LoadingCell = ({text = 'Loading'}: IProp) => (
  <LoadingCellStyled>
    <Icon/>
    {text}
  </LoadingCellStyled>
);

const LoadingCellStyled = styled.div`
  padding: 16px 16px;
  text-align: center;
  font-weight: bold;
`;

const Icon = styled(FaSpinner)`
  margin-right: 10px;
`;

export default LoadingCell;
