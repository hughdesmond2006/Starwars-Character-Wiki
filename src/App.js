import React, { useState } from "react";

import CharPicker from "./components/CharPicker";
import Character from "./components/Character";

const App = props => {
  // OLD WAY
  // const [state, setState] = useState({
  //   selectedCharacter: 1,
  //   destroyed: false
  // });

  // 1st elm is init state, 2nd elm is func for updating the state
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [chosenSide, setChosenSide] = useState("light");
  const [destroyed, setDestroyed] = useState(false);

  const sideHandler = side => {
    setChosenSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  let content;

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  } else {
    content = (
      <React.Fragment>
        <CharPicker
          side={chosenSide}
          selectedChar={selectedCharacter}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={selectedCharacter} />
        <button onClick={sideHandler.bind(this, "light")}>Light Side</button>
        <button onClick={sideHandler.bind(this, "dark")}>Dark Side</button>
        {chosenSide === "dark" && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );
  }

  console.log("Render: App (" + chosenSide + ')');
  return content;
};

// memo means it only rerenders when props change
export default React.memo(App);

