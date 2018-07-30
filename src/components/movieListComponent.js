import React, {Component} from "react";

import NoDataComponent from './noResponseData';
import SerchMoiveList from './sarchMovieList';

export default class MovieListComponent extends Component {
    constructor() {
        super();
        this.styles = {
            marginTop: 30
        };
    }


    render() {
        const dataLength = this.props.movies;

        if (dataLength !== undefined) {
            return <SerchMoiveList movies={this.props.movies} />
        }
        return <NoDataComponent />;
    }
}
