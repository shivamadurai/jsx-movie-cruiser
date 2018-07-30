import React, {Component} from "react";

export default class NoDataComponent extends Component {
    constructor() {
        super();
        this.styles = {
            paddingLeft: 30
        };
    }

    render() {
        return <p style={this.styles}>No data available with this search</p>;
    }
}
