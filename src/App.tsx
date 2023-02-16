import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"} />
            <Accordion titleValue={"Menu"} collapsed={false}/>

            <UncontrolledRating />
            <Rating value={3}/>

        </div>
    );
}

function AppTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;

