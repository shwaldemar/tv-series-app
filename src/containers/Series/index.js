import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }
  componentDidMount() {

  }

  onSeriesInputChange = (event) => {
    this.setState({ seriesName: event.target.value, isFetching: false})
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({
        series: json}))
    console.log(event)
    console.log(event.target.value)
  }

  render(){
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        {/*The Length of The Array: {this.state.series.length}*/}
        <Intro message="Here you can find all of your most loved series"/>
        <div>
          <input
          value={seriesName}
          type="text"
          onChange={this.onSeriesInputChange}
          />
        </div>
        {
          !isFetching && series.length === 0 && seriesName.trim() === '' &&
          <p>Please enter a series...</p>
          /*conditional render if nothing has been input yet*/
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== '' &&
          <p>No Series with this name has been found</p>
          /*conditional render if no series with name input*/
        }
        {
          /*isFetching && <p>Loading...</p>*/
          isFetching && <Loader />
          /*conditional render if api still fetching*/
        }
        {
          !isFetching && <SeriesList list={this.state.series}/>
          /*conditional render if api loaded and series exists*/
        }

      </div>

    )
  }
}

export default Series;
