import React, {Component} from 'react'

export default class Counter extends Component {

    constructor (props) {
        super(props);
        this.state={
            count: 0,
            result: null,
        }
    }

decrement = (x) => {
        return x -= 1;
    }

    decrementResult = (x) =>{
        if (x <= 0){
            return "slow down Reached";
        }
    }

    increment = (x) => {
        return x +=1;
    }

    findResult = (x) =>{
        if (x >= 3){
            return "Limit Reached";
        }
    }


handleClick = () => {
    const currentCount = this.increment(this.state.count);
    const currentResult = this.findResult(currentCount);
    if (currentCount > 3) {
        this.setState ({
            count: 0,
            result:""
        })
    } else 
    this.setState({
        count: currentCount,
        result: currentResult
    })
}

DecreClick = () => {
    const currentCount = this.decrement(this.state.count);
    const currentResult = this.decrementResult(currentCount);
    if (currentCount < 0) { 
        // currentCount < 0 is stating that when it is < 0 or at 0, it is setting the limit for the message.
        this.setState ({
            count: 0,// count is setting the stoping point for when user decreases all the way to 0.
            result:currentResult // decrement only want meesage to pop up below
        })
    } else 
    this.setState({
        count: currentCount,
        result: ""
    })
}





    render(){
        const currCount = this.state.count;
        const result = this.state.result;
        return(
            <div className = "Counter" >
                <h2 className ="current-count">{currCount}</h2>
                <h3 className = "result">{result}</h3>
               <button className="increment" onClick=
{this.handleClick}>Increase</button>
 <button className="decrement" onClick=
{this.DecreClick}>Decrease</button>
                </div>
            
        )
    }
}


