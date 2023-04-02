import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Accordion} from "./components/Accordion/Accordion";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    console.log("App rendering")
    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            {/*<Rating value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)} }/>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

        </div>
    );
}

function AppTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;

