import React from "react";

import "./Summary.css";
import { useHttp } from "../hooks/http";

const Resident = props => {
  const [fetchedData] = useHttp(props.residentURL, [props.residentURL]);

  if (fetchedData) {
    return <div>{props.num}. {fetchedData.name}</div>;
  }
};

export default React.memo(Resident);
