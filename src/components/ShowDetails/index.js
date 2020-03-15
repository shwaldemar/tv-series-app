import React from 'react';
import SingleSeries from '../../containers/SingleSeries';
const ShowDetails = (props) => {
  const show = props.detail;
    return (
      <div>
        <p>Name: {show.name.toUpperCase()}</p>
        <p>Premier: {show.premiered}</p>
        <p>Rating: {show.rating.average}</p>
        <p>Episodes: {show._embedded.episodes.length}</p>
        <p>
          <img alt="show image" src={show.image.medium}/>
        </p>
        <p>
          Summary:
          {show.summary.replace(/<p>|<b>|<i>|<\/p>|<\/b>|<\/i>/g, "")}
        </p>
      </div>
    )
}

export default ShowDetails;
