import React, {ChangeEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    return <input value={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.value)
    }}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    return <input type='checkbox' checked={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.checked)
    }}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'abc'}/>