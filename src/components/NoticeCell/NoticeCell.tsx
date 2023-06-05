import styled from "styled-components";

interface IProp {
  text?: string;
}

const NoticeCell = ({text = 'Failed to Load Data'}: IProp) => (
  <Wrapper>
    {text}
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 16px;
  text-align: center;
  color: #EC5757;
  font-weight: bold;
`;

export default NoticeCell;
