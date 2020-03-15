import React, { Component } from 'react';
import Loader from '../../components/Loader';
import ShowDetails from '../../components/ShowDetails';
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
            <ShowDetails detail={ this.state.show }/>
          </div>
        }

      </div>
    )
  }
}

export default SingleSeries;
