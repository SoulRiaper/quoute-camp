import React from "react";
import { connect } from "react-redux";


class Quoute extends React.Component {
    constructor (props) {
        super(props);
        console.log(props);
    }

    render () {
        return (
            <div>
                <div className="quoute-text">
                    {this.props.text}
                </div>
                <div className="quoute-author">
                    {this.props.author}
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return state.quoute;
}

export default connect(mapStateToProps)(Quoute);