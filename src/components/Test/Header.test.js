import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header'

describe ('Header component',() => {
    it (' finds 1 h1 in Footer', () => {
        const wrapper = shallow (<Header/>);
        const header = wrapper.find('h1');
        expect (header).toHaveLength(1);
        // && ? to find ""
    })
})


describe ('Check if Header message is visible',() => {
    it (' finds animation', () => {
        const wrapper = shallow (<Header/>);
        const text = wrapper.find('h1').text();
        expect (text).toEqual("");
    })
})