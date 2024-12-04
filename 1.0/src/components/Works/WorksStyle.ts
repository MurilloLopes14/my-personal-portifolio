import styled from "styled-components";

export const WorksStyle = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  #container {
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }

    .left-side {
      flex: 1;
      display: flex;
      align-items: center;

      @media only screen and (max-width: 768px) {
        padding: 20px;
        justify-content: center;
      }

      .list {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .right-side {
    flex: 1;
  }
`;

//* Must be done like this, for some reason SC do not get props on a HTML
//* simple component
export const Li = styled.li`
  font-size: 5.5rem;
  font-weight: bold;
  color: transparent;
  position: relative;
  -webkit-text-stroke: 1px white;
  cursor: pointer;

  @media only screen and (max-width: 999px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.title}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    color: var(--zimablue);
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
