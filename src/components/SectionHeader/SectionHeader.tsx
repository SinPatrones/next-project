import styled from "styled-components";

interface IProps {
  text: string;
}

const SectionHeader = ({text}: IProps) => (
  <HeaderStyled>
    {text}
  </HeaderStyled>
);

const HeaderStyled = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 32px 16px 8px 16px;
`;

export default SectionHeader;
