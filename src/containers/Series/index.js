import React, { Component } from 'react';

import SeriesList from '../../components/SeriesList';
import '../../components/assets/loading.jpg'
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = (event) => {
    this.setState({seriesName: event.target.value, isFetching: true});
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
    .then(response => response.json())
    .then(json => this.setState({ series: json, isFetching: false }));
  }

  render(){

    const {series, seriesName, isFetching} = this.state;

    return (
      <div>{/*Series Container*/}
      <Intro message="Here you will find all your favourite shows"/>
        <div>
          <input
          value={seriesName}
          type='text'
          onChange={this.onSeriesInputChange}/>
        </div>
        {
          !isFetching && series.length === 0 && seriesName.trim() === '' &&
          <p>Please type a series name in to the input.</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== '' &&
          <p>We do not know that series. Try another.</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={this.state.series}/>
        }

      </div>
    )
  }
}

export default Series;
