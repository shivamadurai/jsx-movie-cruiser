import React, {Component} from "react";

export default class NoDataComponent extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            paddingLeft: 30
        };
    }

    render() {
        return <p style={this.styles}>No data available with this search</p>;
    }
}
