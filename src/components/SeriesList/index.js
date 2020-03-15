import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => (
    <li>
      <Link to={`/series/${series.show.id}`}>
        {series.show.name}
      </Link>
    </li>/*series is a prop passed from SeriesList*/
  )

const SeriesList = (props) => {
  return (
    <div>{/*Series List Component*/}
      <ul className='series-list'>
        {props.list.map(series => {
          return (
            <SeriesListItem series={series} key={series.show.id}/> /*series is a prop to pass to other components*/
          )
        })}
      </ul>
    </div>
  )
}
export default SeriesList
