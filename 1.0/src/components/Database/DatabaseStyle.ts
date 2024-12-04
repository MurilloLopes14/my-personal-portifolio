import styled from "styled-components";

export const DatabaseStyle = styled.section`
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icons {
    margin-top: 30rem;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }

    img {
      width: 100px;
      height: 100px;
      transition: all 0.2s;

      @media only screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
