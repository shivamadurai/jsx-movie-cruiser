import React, {Component, Fragment} from "react";
import SearchComponent from "./searchComponent";
import "jquery"
import "bootstrap";
import MovieListComponent from "./movieListComponent";

export default class MovieApp extends Component {


    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };

        this.styles = {
            padding: 20
        };
    }

    searchMovies(searchTerm) {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=f58323742f0d3b835da1b436ef1eada3&query="+searchTerm)
        .then(res => res.json())
        .then(
        (response) => {
            this.setState({
                isLoaded: true,
                movies: response.results
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    }

    componentDidMount() {
        let getMyFavMovies = localStorage.getItem("myfavmovies");
        let favData = {"results": JSON.parse(getMyFavMovies)};

        if (favData.results !== null) {
            this.setState({
                isLoaded: true,
                movies: favData.results
            });

        }
    }

    render() {
        return (
            <Fragment>
                <SearchComponent onSearch={this.searchMovies.bind(this)} />
                <div className="container" style={this.styles}>
                    <div className="row">
                        <MovieListComponent movies={this.state.movies} />
                    </div>
                </div>
            </Fragment>
        )
    }
}
