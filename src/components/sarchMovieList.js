import React, {Component, Fragment} from "react";

const styles = {
    minCardWidth : {
        "minWidth": "265px"
    },
    cardStyle : {
        "padding": "20px",
        "height": "500px",
        "marginBottom": "20px"
    },
    titleStyle : {
        "maxHeight": "80px",
    },
    textStyle : {
        "maxHeight": "100px",
        "textOverflow": "ellipsis",
        "overflow": "hidden"
    },
    imgStyle : {
        "maxHeight": "200px"
    },
    deleteStyle : {
        "marginLeft":"10px"
    }
};
let results = [];

export default class SerchMoiveList extends Component {
    constructor(props) {
        super(props);
    }
    addToFav(id) {
        results.push(this.props.movies[id]);
        localStorage.setItem('myfavmovies', JSON.stringify(results));
    }

    deleteMovie(movieId, event) {
        event.preventDefault();
        document.querySelectorAll('.'+movieId)[0].remove();
    }

    render() {
        return (
            <Fragment>
                {this.props.movies.map((movie, index) => (
                    <div className={"col-4 movie" +index} key={movie.id} style={styles.minCardWidth}>
                        <div className="card" style={styles.cardStyle}>
                            <img className="card-img-top" style={styles.imgStyle} src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} alt={movie.title} />
                            <div className="card-body">
                                <h5 className="card-title" title={movie.title} style={styles.titleStyle}>{movie.title}</h5>
                                <p className="card-text" style={styles.textStyle}>{movie.overview}</p>
                                <button type="submit" onClick={this.addToFav.bind(this, index)} className="btn btn-primary mb-2">Add to Fav</button>
                                <button type="submit" onClick={this.deleteMovie.bind(this, "movie"+index)} className="btn btn-danger mb-2" style={styles.deleteStyle}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}
