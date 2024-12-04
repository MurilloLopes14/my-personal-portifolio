//* Styles
import { DatabaseStyle } from "./DatabaseStyle";

//* Utils
import Mongodb from "../../assets/badges/mongodb.svg";
import Mysql from "../../assets/badges/mysql.svg";
import Sequelize from "../../assets/badges/sequelize.svg";

type Props = {};

export const Database = (props: Props) => {
  return (
    <DatabaseStyle>
      <div className="icons">
        <img src={Mongodb} alt="Language" title="MongoDB" />
        <img src={Mysql} alt="Language" title="MySQL" />
        <img src={Sequelize} alt="Language" title="Sequelize" />
      </div>
    </DatabaseStyle>
  );
};
