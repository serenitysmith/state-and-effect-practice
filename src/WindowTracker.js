import React, {useState, useEffect} from "react";

export default function WindowTracker() {
 /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */




 const [windowWidth, setWindowWidth] = React.useState (window.innerWidth)



// Create an event listener to update the window width on resize
     // we need a use effect statement since we are affecting the window which lays outside the the local react state 


//scrimba did it a little different 

    // React.useEffect(() => {
    //     window.addEventListener("resize", function() {
    //         setWindowWidth(window.innerWidth)
    //     })
    // }, [])






        React.useEffect(() => {

            console.log("Setting up...")
        function windowResize(){


setWindowWidth(window.innerWidth);

        }
        // Attach the event listener  
        window.addEventListener("resize", windowResize)



        //this   cleans up any side effects created 
// Clean up the event listener when the component unmounts


// we were getting a memory leak warning before we addded this clean up function

// basically it wouldnt recognize our toggle fuinction on app.js before it was cleaned up 
return () => {
    
    console.log("Cleaning up...")

    window.removeEventListener("resize", windowResize);
  };

    

        }, []);
        
           

       
    return (

        // origanl h1 added even listen to change window number without clickig button 
        // <h1>Window width: {window.innerWidth}</h1>
        // we need a use effect statement since we are affectign the window whcih lays outside the the local react state 


        <h1>Window width: {windowWidth}</h1>
    )
}