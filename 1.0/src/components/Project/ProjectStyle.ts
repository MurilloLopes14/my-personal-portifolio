import styled from "styled-components";

export const ProjectStyle = styled.div`
  width: 1400px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: ${(props) =>
    props.property === "reverse" ? "row-reverse" : "row"};
  gap: 3rem;

  @media only screen and (max-width: 999px) {
    flex-direction: column;
    width: 100%;
    gap: 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 70vh;
    width: 100%;
  }

  .image {
    flex: 1;

    @media only screen and (max-width: 768px) {
      flex: 0;
    }

    img {
      transition: 0.2s;
      width: 700px;

      @media only screen and (max-width: 768px) {
        width: 300px;
      }

      :hover {
        transform: scale(1.05);
        box-shadow: rgb(12, 149, 207) 0px 0px 10px 1px;
        -webkit-box-shadow: rgb(12, 149, 207) 0px 0px 10px 1px;
        -moz-box-shadow: rgb(12, 149, 207) 0px 0px 10px 1px;

        @media only screen and (max-width: 768px) {
          box-shadow: none;
        }
      }
    }
  }

  .project-description {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;

    @media only screen and (max-width: 768px) {
      flex: 0;
    }

    h1 {
      font-size: 3rem;
      border-bottom: 1px solid lightgray;

      @media only screen and (max-width: 999px) {
        border-bottom: none;
      }

      @media only screen and (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    p {
      width: 90%;
      font-size: 1.3rem;

      @media only screen and (max-width: 768px) {
        font-size: 1rem;
        width: 100%;
      }
    }

    a {
      margin-top: 1rem;
      display: block;
      align-self: center;
    }

    h3 {
      margin-top: 0.5rem;

      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    ul {
      li {
        @media only screen and (max-width: 768px) {
          font-size: 1rem;
        }

        span {
          padding-right: 0.5rem;
          color: var(--zimablue);
        }
      }
    }
  }
`;
