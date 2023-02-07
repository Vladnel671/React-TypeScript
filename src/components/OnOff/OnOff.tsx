import React from 'react';
import './OnOff.css'




type OnOffPropsType = {
    on: boolean
    off: boolean
}


const OnOff: React.FC<OnOffPropsType> = (props) => {
    return (
        <div className="wrapper">
            <div className="rectangle" style={{backgroundColor: props.on ? 'green' : 'white' }}>On</div>
            <div className="rectangle" style={{backgroundColor: props.off ? 'red' : 'white' }}>Off</div>
            <div className="round" style={{backgroundColor: props.off ? 'red' : 'green' }}></div>

        </div>
    );
};


export default OnOff;