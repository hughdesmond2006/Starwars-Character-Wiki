import React from "react";

import "./CharPicker.css";
import { useHttp } from "../hooks/http"; //Custom hook

const CharPicker = props => {
  // adding code here is equivalent to compoWillMount (code executed top to bottom)

  // RULE: can only call Hooks on top-level of compo func (built-in and custom)
  // Also cannot nest in an if block or for loop..
  // [] arg means it will only fetch all characters when compo loads
  const [fetchedData] = useHttp("https://swapi.co/api/people/", [], null);

  const selectedCharacters = fetchedData
    ? fetchedData.results.slice(0, 5).map((char, index) => ({
        name: char.name,
        id: index + 1
      }))
    : [];

  let content;

  if (selectedCharacters && selectedCharacters.length > 0) {
    console.log(`Render: CharPicker (Populated, ${props.side})`);
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={props.side}
      >
        {selectedCharacters.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else  {
    console.log(`Render: CharPicker (Loading)`);
    content = <p>Loading characters...</p>;
  }

  return content;
};

export default CharPicker;
