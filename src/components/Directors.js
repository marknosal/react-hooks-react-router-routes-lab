import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div key={director.name}>
            <h3>{director.name}</h3>
            <h4>Movies:</h4>
            <ul>
              {director.movies.map(movie => {
                return (
                  <li key={movie}>{movie}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
    )
}

export default Directors;
