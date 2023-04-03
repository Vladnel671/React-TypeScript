import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";



export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e) => {
    const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    }/>-{value}</>
}

export const ControlledInputWithFixedValue = () => <input value={'abc'} />