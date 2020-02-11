import React, { useEffect } from "react";

import Summary from "./Summary";
import { useHttp } from "../hooks/http";
import PlanetDetails from "./PlanetDetails";

const Character = props => {
  const [fetchedData] = useHttp(
    "https://swapi.co/api/people/" + props.selectedChar,
    [props.selectedChar],
  );

  let loadedCharacter = null;

  // check if useHttp returned any data..
  if (fetchedData) {
    loadedCharacter = {
      id: props.selectedChar,
      name: fetchedData.name,
      height: fetchedData.height,
      colors: {
        hair: fetchedData.hair_color,
        skin: fetchedData.skin_color
      },
      gender: fetchedData.gender,
      movieCount: fetchedData.films.length,
      planet: fetchedData.homeworld
    };
  }

  // This is equiv to compoDidMount
  useEffect(() => {
    return () => {
      // This is equiv to compoWillUnmount
      console.log("Unmount: Character Card");
    };
  }, []);
  // [] as 2nd arg means it runs once only

  let content = <p>Loading Character...</p>;

  if (loadedCharacter) {
    content = (
      <React.Fragment>
        <Summary
          name={loadedCharacter.name}
          gender={loadedCharacter.gender}
          height={loadedCharacter.height}
          hairColor={loadedCharacter.colors.hair}
          skinColor={loadedCharacter.colors.skin}
          movieCount={loadedCharacter.movieCount}
        />
        <PlanetDetails
          planetURL={loadedCharacter.planet}
        />
      </React.Fragment>
    );
  }

  console.log(`Render: Character (${loadedCharacter ? loadedCharacter.name : 'Loading'})`);
  return content;
};

// memo means it only rerenders when props change
export default React.memo(Character);
