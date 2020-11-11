import React, { Component } from 'react';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: "",
            values: []
        }
    }
    clearValues = () => {
        this.setState({
            elements: "",
            values: []
        });
    }
    onChange = (e) => {
        this.setState({
            elements: e.target.value
        });
    }
    calcFizzbuzz = (num) => {
        if (isNaN(num)) {
            return ["Invalid Item"];
        }
        if (num % 3 === 0 && num % 5 === 0) {
            return ["FizzBuzz"];
        }
        if (num % 3 === 0) {
            return ["Fizz"];
        }
        if (num % 5 === 0) {
            return ["Buzz"];
        }
        return [`Divided ${num} by 3`, `Divided ${num} by 5`];
    }
    calculate = () => {
        const { elements } = this.state;
        this.setState({
            values: elements.split(",").map(this.calcFizzbuzz).flat()
        });
    }
    render() {
        return (
            <div>
                <p>
                    This is an implementation of FizzBuzz
                </p>
                <p>
                    Put any values in a comma delimited into the input field and click "Calculate FizzBuzz" to see values.
                </p>
                <p>
                    Click "Clear" to clear input and values fields
                </p>
                <div>
                    <input
                        value={this.state.elements}
                        onChange={this.onChange}
                        type="text"
                        placeholder="put values here" />
                    <button onClick={this.calculate}>Calculate FizzBuzz</button>
                    <button onClick={this.clearValues}>Clear</button>
                </div>
                Values:
            <div>
                    {this.state.values.map(el => <div>{el}</div>)}
                </div>
            </div>
        );
    }
}

export default Dialog;