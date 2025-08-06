// Importing useState and useRef from React
import { useState, useRef } from 'react';

// Default export of the Player component
export default function Player() {

  // Creating a reference to directly access the input element in the DOM
  const PlayerName = useRef();

  // State to store the name entered by the user after clicking the button
  const [enteredName, setEnteredName] = useState(null);

  // Function that runs when the "Set Name" button is clicked
  function handleClick() {
    // Updates the state with the current value of the input field
    setEnteredName(PlayerName.current.value);
  }

  // JSX returned by the component
  return (
    <section id="player">
      {/* Shows a welcome message with the entered name or a default message */}
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>

      <p>
        {/* Input field where user types their name, connected via ref */}
        <input 
          type="text" 
          ref={PlayerName} // This links the input to the PlayerName ref
        />

        {/* Button that triggers handleClick when clicked */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
