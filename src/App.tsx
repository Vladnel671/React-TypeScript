import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";


function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <AppTitle title={"This is APP component"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff on={true} off={false}/>



        </div>
    );
}

function AppTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;

