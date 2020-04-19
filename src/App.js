import React, {Component} from 'react' ;
import ResultComponent from './Components/ResultComponent';
import KeyPadComponent from './Components/KeyPadComponent';
import './App.css';

class App extends Component {
    constructor() {
        super() ;
        this.state = {
            result : ""
        }
    }

    onClick = button => {
        if(button === "=") {
            this.calculate() ;
        }

        else if (button === "C") {
            this.reset() ;
        }

        else if(button === "CE") {
            this.backspace() ;
        }

        else {
            this.setState({
                result : this.state.result + button
            })
        }
    }

    calculate = () => {
        try {
            this.setState({
                //eslint-disable-next-line
                result : (eval(this.state.result) || "") + ""
            })
        } catch(e) {
            this.setState({
                result : "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result : ""
        })
    };

    backspace = () => {
        this.setState({
            result : this.state.result.slice(0, -1) 
        })
    }

    render() {
        return (
            <div className = "calculator-body">
                <h1>Simple Calculator</h1>
                <ResultComponent result = {this.state.result} />
                <KeyPadComponent onClick = {this.onClick} />
            </div>
        )
    }
}

export default App ;