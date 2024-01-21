
import './App.css';

import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {
  // * Challenge:
  // // * 1. Create state called `show`, default to `true`
  // 2. When the button is clicked, toggle `show`
  // * 3. Only display `<WindowTracker>` if `show` is `true`
  // */
  // * 


  // added an event listener to our h1 in  window tracker component to have the wibdow change whenever resized without clicking button
  const [show, setShow] = React.useState(true);
  
  
  // my code didnt work, had to add the ! in front of show and 
  function toggleShown(){
setShow(!show);
  }


  // swcrimba wrote their function a little different either way works

//   function toggle() {
//     setShow(prevShow => !prevShow)
// }


    return (
        <div className="container">
            <button onClick={toggleShown}>
              {/* /this was my try :(  {show ?  <WindowTracker /> : !  <WindowTracker />} */}

              {/* to fix, just added text here and show below on line 35*/}
Toggle WindowTracker
            </button>
           {show && <WindowTracker/>}
        </div>
    );
}

// In this corrected code:

// We correctly use useState to manage the show state.

// The toggleShown function correctly toggles the value of show when the button is clicked.

// In the rendering part, we use the show state to conditionally render the WindowTracker component. If show is true, it will display the WindowTracker, and if show is false, it won't display it. This is achieved using the {show && <WindowTracker />} syntax.

// With this code, clicking the button will toggle the visibility of the WindowTracker component as expected.