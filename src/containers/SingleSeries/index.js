import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
  state = {
    show: null,
    getEpisodes: null
  }

  componentDidMount(){
    const { id } = this.props.match.params
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
    .then(response => response.json())
    .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log(show)

    return (
      <div>
        {
          show === null && <Loader />
        }
        {
          show !== null &&
          <div>
          <p>Name: {show.name.toUpperCase()}</p>
          <p>Premier: {show.premiered}</p>
          <p>Rating: {show.rating.average}</p>
          <p>Episodes: {show._embedded.episodes.length}</p>
          <p>
            <img alt="show image" src={show.image.original}/>
          </p>
          <p>Summary: {show.summary.replace(/<p>|<b>|<i>|<\/p>|<\/b>|<\/i>/g, "")}</p>
          </div>
        }
        {

        }
      </div>
    )
  }
}

export default SingleSeries;
