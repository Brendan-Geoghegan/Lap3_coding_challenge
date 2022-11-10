import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BackButton from '.'

export default {
    title: 'BackButton',
    component: BackButton,
};

const Template = (args) => <MemoryRouter><BackButton {...args} /></MemoryRouter>;

export const Small = Template.bind({});
Small.args = {
size: 'small',
title: 'A Small BackButton',
author: 'Brendan-Geoghegan'
};

export const Large = Template.bind({});
Large.args = {
size: 'large',
title: 'A Large BackButton',
author: 'Brendan-Geoghegan'
};
