import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList'
class Series extends Component {
  state = {
    series: []
  }
  componentDidMount() {

  }

  onSeriesInputChange = (event) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({
        series: json}))
    console.log(event)
    console.log(event.target.value)
  }

  render(){

    return (
      <div>
        The Length of The Array: {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange}></input>
        </div>
        <SeriesList list={this.state.series}/>
      </div>

    )
  }
}

export default Series;
