import styled from "styled-components";
import Box from "./Box";
import TextBox from "./TextBox";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

function BoxContainer() {
  const monthData = useSelector((state) => state.accountBook.monthData);

  return (
    <Container>
      <BoxesWrapper>
        {monthData.map((month) => (
          <Box key={month.id} id={month.id} month={month.month} />
        ))}
      </BoxesWrapper>
      <TextBox />
    </Container>
  );
}

export default BoxContainer;
