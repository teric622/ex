import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';
describe('test For Our App', () => {
    it ('knows that 2 and 2 make 4', ()=>{
        expect (2 +2).toEqual(4);
    }
    )
})
describe('App component', () => {
it('Has one Header', () => {
const wrapper = shallow(<App />);
const header = wrapper.find('Header');
expect(header).toHaveLength(1);
});
});

describe('App component', () => {
it('Has one footer', () => {
const wrapper = shallow(<App />);
const Footer = wrapper.find('Footer');
expect(Footer).toHaveLength(1);
});
});



describe('App component', () => {
it('Has one Counter', () => {
const wrapper = shallow(<App />);
const Counter = wrapper.find('Counter');
expect(Counter).toHaveLength(1);
});
});


