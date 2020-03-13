import React, {Component} from 'react';
import Series from '../../containers/Series';
import './index.css';

const SeriesListItem = ({ series }) => (
    <li key={series.show.id}>
      {series.show.name}
    </li>
)

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
      {props.list.map(series => {
        return (
          <SeriesListItem series={ series } key={series.show.id}/>
          )
      })}
      </ul>
    </div>
  )
}

export default SeriesList;
