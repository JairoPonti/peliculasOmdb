import React, { Component } from "react";
import { connect } from "react-redux";
import {  removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  goBack() {
    window.history.back();     
   }

  render() {
    return (
      <div>

        <h2>Películas Favoritas</h2>
        <button id="buttonStyle" onClick={()=> this.goBack()}>Atrás</button>
        <section className="col-10 m-auto p-5">
        <ul className="row">
          {this.props.movies && this.props.movies.map((el, i) => (
            <div key={i} className="col-4 p-3 ">
              <div>
                <h4 className="col">{el.title}</h4>
                <div className="col p-2">
                <button id="button" onClick={() => this.props.removeMovieFavorite({title:el.title, id:el.imdbID}) }>Eliminar</button>
                </div>
                </div>
                <img className="dimensiones" src={el.img} alt=""/>
              </div>
          ))
          }
        </ul>
        </section>
      </div> 
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
