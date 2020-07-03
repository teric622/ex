import React from 'react';
import {shallow} from 'enzyme';
import Counter from '../Counter'
// ./ currently at i.e counter needed toget counter.test.js 
// ../ get in to folder and then getting out is 2 dots 1 to access and 1 to get out 

describe ('Counter component', ()=> {
    it('increments count by 1 when the increment button is clicked', () => {

        const wrapper = shallow(<Counter/>);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
         incrementBtn.simulate('click');
          incrementBtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect (text). toEqual ('3');
    });
    });


describe ('Counter component', ()=> {
    it('message appears when mas 3 reached', () => {

        const wrapper = shallow(<Counter/>);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
         incrementBtn.simulate('click');
          incrementBtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect (text). toEqual ('3');
        const result = wrapper.find('h3').text();
        expect (result). toBe ('Limit Reached');
       
    });
    });

    

    describe ('Counter component', ()=> {
    it('decrements count by 1 when the decrement button is clicked', () => {

        const wrapper = shallow(<Counter/>);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect (text). toEqual ('0');
    });
    });

    describe ('Counter component', ()=> {
    it('shows message when max 0 reached', () => {

        const wrapper = shallow(<Counter/>);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect (text). toEqual ('0');
        const result = wrapper.find('h3').text();
        expect (result). toBe ('slow down Reached');
       
    });
    });

 

    // Following did not work to get the message : (  

    //describe ('Counter component', ()=> {
   // it('shows max reached', () => {
       // const currentCount = wrapper.find('button.decrement');
       //currentCount.simulate('click');
       // currentCount.simulate('click');
      //// currentCount.simulate('click');
      //  const currentResult = wrapper.find('h2').text();
      //  expect (currentResult). toEqual ('slow down reached');
// });
 //   });


 // thinking 
 // 

    
   