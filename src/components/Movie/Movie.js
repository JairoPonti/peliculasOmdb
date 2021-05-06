import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css'

class Movie extends React.Component {

    componentDidMount(){
        const movieId = this.props.match.params.id  //Obtengo el id del obj match que se genera en el routing
        console.log(movieId)
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div id="contenedor" className="container p-2 bg-transparent">
                <h1>{this.props.movie.Title}</h1>
                <section className="col-12 ms-5">
            <div  className="row">
                <div className="col-4">
                <img  src={this.props.movie.Poster}/>
                </div>
                <div id="side" className="col">
                <h4>Type: {this.props.movie.Type}
                <br/>
                <br/>
                Year:  {this.props.movie.Year}
                <br/>
                <br/>
                Genre: {this.props.movie.Genre}
                <br/>
                <br/>
                Language: {this.props.movie.Language}
                <br/>
                <br/>
                Rated: {this.props.movie.Rated}
                Released: {this.props.movie.Released}
                <br/>
                <br/>
                Runtime: {this.props.movie.Runtime}
                <br/>
                <br/>
                Country: {this.props.movie.Country}
                <br/>
                <br/>
                Director: {this.props.movie.Director}
                <br/>
                <br/>
                Writer: {this.props.movie.Writer}
                <br/>
                <br/>
                Actors: {this.props.movie.Actors}
                <br/>
                <br/>
                Awards: {this.props.movie.Awards}
                </h4>
                </div>
                </div>
                </section>
            
                
                <h4 style={{fontSize: "20px", color: "#7124D3", marginLeft:"50px"}}>Rating: {this.props.movie.imdbRating}
                <br/>
                <br/>
               
             
                </h4>
                <p className="description" style={{color:"azure", marginLeft:"50px"}}>{this.props.movie.Plot}</p>
            </div>
           
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    };
  }  


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);
  