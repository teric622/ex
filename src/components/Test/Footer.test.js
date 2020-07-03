import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer'
// need to do another to expecting the text
// footer is like a street that has 1 really nice house
//and const wrapper is the neighbor hood in which shallow directs
// you to the street, 
//and gives you the streets name "footer"
// const text = wrapper. find is the end goal you want to get, 
//which in our analogy is the 1 really nice house whose name is 'h3'
// your friend tells you there are 2 really nice houses in that street\
// but you know and expect there to be only 1 really nice housee in that street
// First you had a goal: to find the 1 really preety hous in 'Footer street' 
//whose house number was h3
// first you had to know what neighborhod it was in
// then you had to know what specific street it was in
// then you had to find the house number 'h3'
// your friend tries to fool you saying there were 2 really nice house
// but you knew to expect only 1 really nice house 'h3' in Footer street
// and atlast, you found 'h3'


describe ('Footer component',() => {
    it (' finds 1 h3 in Footer', () => {
        const wrapper = shallow (<Footer/>);
        const footer = wrapper.find('h3');
        expect (footer).toHaveLength(1);
    })
})
describe ('Check if footer message is visible',() => {
    it (' finds message footer', () => {
        const wrapper = shallow (<Footer/>);
        const text = wrapper.find('h3').text();
        expect (text).toEqual("Did you reach your limit");
    })
})