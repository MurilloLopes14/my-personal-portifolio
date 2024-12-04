import styled from "styled-components";

export const ProjectsStyle = styled.section`
  position: relative;
  text-align: center;

  .btn-absolute {
    text-align: center;
    position: absolute;
    top: -0.8%;
    left: 1%;

    @media only screen and (max-width: 999px) {
      left: 45%;
    }

    @media only screen and (max-width: 768px) {
      left: 35%;
      top: -1.2%;
    }
  }
  .intro {
    margin-top: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 5rem;

      @media only screen and (max-width: 999px) {
        font-size: 3rem;
      }

      @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    h3 {
      font-size: 2rem;

      @media only screen and (max-width: 999px) {
        font-size: 1.4rem;
        margin-bottom: 2rem;
      }

      @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`;
