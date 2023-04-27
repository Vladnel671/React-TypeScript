import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

export default {
    title: 'components/Accordion',
    component: Accordion,

}

const callback = action("Accordion mode change event fired")
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []
}

export const UsersUncollapsedMode = Template.bind({})

UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Vlad', value: 1},
        {title: 'Ilya', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}]
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    titleValue: 'Users',
    items: [
        {title: 'Vlad', value: 1},
        {title: 'Ilya', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ],
    onClick: (value) => {
        alert(`user with id ${value} should be happy`)
    }
}