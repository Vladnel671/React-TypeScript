import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [time, setTime] = useState(new Date());
    console.log("SetTimeoutExample")
    useEffect(() => {
        setInterval(() => {
            setCounter((state => state + 1))
        }, 1000)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            {counter}
            <div>
                <h1>Current Time:</h1>
                <p>{time.toLocaleTimeString()}</p>
            </div>
        </div>
    );
};

