import React, {Component} from 'react' ;

class ResultComponent extends Component {

    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}

export default ResultComponent ;