import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {useLayoutStore} from "@/store/layoutStore";

interface IProps {
  text: string;
  showBackButton?: boolean;
}

const Title = ({text, showBackButton = false}: IProps) => {
  const {toggleGoBack} = useLayoutStore();

  return (
    <TitleStyled>
      {showBackButton && <BackButton onClick={toggleGoBack}/>}
      {text}
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  background-color: black;
  color: white;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const BackButton = styled(AiOutlineArrowLeft)`
  color: white;
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  left: 23px;
`

export default Title;
