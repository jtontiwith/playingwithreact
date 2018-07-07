import React from 'react';
import ReactDOM from 'react-dom';

import NumberInput from './number-input';


export default class ProximityCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: Math.floor(Math.random() * 100) + 1,  
    }
  
  }
  
    render() {
     
        

        return (
            
            <div>
              <NumberInput ranNum={this.state.randomNum} />
            </div>   
        )

    }
    
    

}


/*
What do I really need to do?
DONE-generate a random number set initial state with that number
-allow user to enter a number


-check to see if that number is within 10 and if it display hot, else 
display cold



*/