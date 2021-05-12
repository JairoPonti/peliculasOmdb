import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions/index";



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Películas o Series</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
       
          <nav className="col-10 m-auto p-5">
        <ul className="row">
          {this.props.movies && this.props.movies.map((peli, i) => (
            <div key={i} className="col p-3">
              <img src={peli.Poster} alt="Imágen No disponible"/>
              <div className="col">
              <NavLink id="visit" to={`/movie/${peli.imdbID}`}>
                {peli.Title}
              </NavLink>
              </div>
              <div className="col">
              <button className="add" onClick={() => this.props.addMovieFavorite({ title: peli.Title, id: peli.imdbID, img: peli.Poster })}>Fav</button>
              </div>
            </div>))}
        </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


