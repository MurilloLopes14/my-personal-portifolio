//* Styles
import GlobalStyle from "./Globals";

//* React-router
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <section className="App">
        <Outlet />
      </section>
    </>
  );
};

export default App;
