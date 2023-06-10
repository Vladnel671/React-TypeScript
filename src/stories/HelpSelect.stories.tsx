import {useMemo, useState} from "react";
import React from 'react';
import './HelpSelect.css'
import {Select} from "../components/Select/Select";

type CounterPropsType = {
    counter: number
    onInc: () => void
    onDec: () => void
}

const CounterWithoutReactMemo: React.FC<CounterPropsType> = (props) => {
    console.log('counter rerender!')
    return (
        <>
            <h3>Counter: {props.counter}</h3>
            <button onClick={props.onInc}> +</button>
            <button onClick={props.onDec}> -</button>
        </>
    )
}
const Counter = React.memo(CounterWithoutReactMemo)
export default {
    title: 'HelperSelect',
    component: Select,
}
export const HelperSelect = () => {

    const cities = useMemo(() => [
        {value: '1', title: 'Minsk', population: 1975170, country: 'Belarus'},
        {value: '2', title: 'Moscow', population: 12678079, country: 'Russia'},
        {value: '3', title: 'Kiev', population: 2884000, country: 'Ukraine'},
        {value: '4', title: 'New York', population: 8398748, country: 'USA'},
        {value: '5', title: 'Los Angeles', population: 3990456, country: 'USA'},
        {value: '6', title: 'Buenos Aires', population: 2890151, country: 'Argentina'},
        {value: '7', title: 'Seattle', population: 744955, country: 'USA'},
        {value: '8', title: 'Jakarta', population: 10770487, country: 'Indonesia'},
        {value: '9', title: 'Vienna', population: 1897491, country: 'Austria'},
        {value: '10', title: 'Casablanca', population: 3359818, country: 'Morocco'},
        {value: '11', title: 'Helsinki', population: 656229, country: 'Finland'},
        {value: '12', title: 'Nairobi', population: 4397073, country: 'Kenya'},
        {value: '13', title: 'Adelaide', population: 1345777, country: 'Australia'},
        {value: '14', title: 'San Francisco', population: 883305, country: 'USA'},
        {value: '15', title: 'Durban', population: 595061, country: 'South Africa'},
        {value: '16', title: 'Bratislava', population: 437725, country: 'Slovakia'},
        {value: '17', title: 'Milan', population: 1378689, country: 'Italy'},
    ], []);

    const citiesStartingWithM = useMemo(() => cities.filter((city) => city.title.startsWith('M')), [cities])
    const citiesWithPopulationGreaterThan3M = useMemo(() => cities.filter((city) => city.population > 3000000), [cities])
    const citiesInUSA = useMemo(() => cities.filter((city) => city.country === 'USA'), [cities])


    const [value1, setValue1] = useState(citiesStartingWithM[0].value);
    const [value2, setValue2] = useState(citiesWithPopulationGreaterThan3M[0].value);
    const [value3, setValue3] = useState(citiesInUSA[0].value);

    const [counter, setCounter] = useState(0)
    const inc = () => {
        setCounter(counter + 1)
    }
    const dec = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div className={'HelperMain'}>
                <p style={{marginRight: '20px'}}>citiesStartingWithM: </p>
                <Select onChange={setValue1}
                        value={value1}
                        items={citiesStartingWithM}/>
                <hr style={{marginRight: "20px", marginLeft: "30px"}}/>
                <p style={{marginRight: '20px'}}>citiesWithPopulationGreaterThan3M: </p>
                <Select onChange={setValue2}
                        value={value2}
                        items={citiesWithPopulationGreaterThan3M}/>
                <hr style={{marginRight: "20px", marginLeft: "55px"}}/>
                <p style={{marginRight: '20px'}}>citiesInUSA: </p>
                <Select onChange={setValue3}
                        value={value3}
                        items={citiesInUSA}/>
            </div>
            <div className={'HelperCounter'}>
                <Counter counter={counter} onInc={inc} onDec={dec}/>
            </div>
        </>
    )
}
