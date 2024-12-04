//* Styles
import { Li, WorksStyle } from "./WorksStyle";

//* Hooks
import { useState } from "react";

//* Components
import { WebDesign } from "../WebDesign/WebDesign";
import { Development } from "../Development/Development";
import { Backend } from "../Backend/Backend";
import { Database } from "../Database/Database";
import { Mobile } from "../Mobile/Mobile";

//* Mocks
import { WorksList } from "../../mocks/WorksList";

export const Works = () => {
  const [work, setWork] = useState("Web Design");

  const DataList: string[] = WorksList;

  return (
    <WorksStyle>
      <div id="container">
        <div className="left-side">
          <ul className="list">
            {DataList.map((item: string) => (
              <Li key={item} title={item} onClick={() => setWork(item)}>
                {item}
              </Li>
            ))}
          </ul>
        </div>
        <div className="right-side">
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Back-end" ? (
            <Backend />
          ) : work === "Database" ? (
            <Database />
          ) : work === "Mobile" ? (
            <Mobile />
          ) : (
            ""
          )}
        </div>
      </div>
    </WorksStyle>
  );
};
