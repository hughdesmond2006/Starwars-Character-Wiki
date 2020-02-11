import React from "react";

import "./Summary.css";
import { useHttp } from "../hooks/http";
import Resident from "./Resident";

const PlanetDetails = props => {
  const [fetchedData] = useHttp(props.planetURL, [props.planetURL]);

  console.log("Render: Planet Details");

  if (!fetchedData) {
    return (
      <div className="summary">
        <p>loading planet...</p>
      </div>
    );
  } else {
    return (
      <div className="summary">
        <h1>{fetchedData.name}</h1>
        <p>
          Terrain:{" "}
          <span className="summary__output">{fetchedData.terrain}</span>
        </p>
        <p>Residents: </p>
        <div className="scroll">
          {fetchedData.residents.map((resident, index) => (
            <Resident residentURL={resident} num={index} key={index} />
          ))}
        </div>
      </div>
    );
  }
};

export default React.memo(PlanetDetails);
