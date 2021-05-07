import React, { Component } from "react";
import { connect } from "react-redux";
import {  removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <section className="col-10 m-auto p-5">
        <ul className="row">
          {this.props.movies && this.props.movies.map((el, i) => (
            <div key={i} className="col p-3">
              <div>
                <h4 className="col">{el.title}</h4>
                <button className="col" style={{marginLeft:"266.2px"}}onClick={() => this.props.removeMovieFavorite({title:el.title, id:el.imdbID}) }> X</button>
                </div>
                <img src={el.img}/>
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
