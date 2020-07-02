import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header'

describe ('Header component',() => {
    it (' finds 1 h1 in Footer', () => {
        const wrapper = shallow (<Header/>);
        const text = wrapper.find('h1');
        expect (text).toHaveLength(1);
        // && ? to find ""
    })
})