import React from 'react';
import PropTypes from 'prop-types';
import { SearchResult } from '../../../lib/custom-types'
import styles from './random.module.css'
import refrashIcon from '../../../images/Refresh_icon.svg.png'

export default class Random extends React.Component {
  render() {
    const { giphy, thumbnailClicked, getRandomGiphy } = this.props;

    const clicked = (e) => {
      e.preventDefault();
      thumbnailClicked(giphy)
    };

    return (
      <div className={styles.container}>
        <div>
          <button className={styles.button} onClick={getRandomGiphy}>
            <img className={styles.icon} src={refrashIcon} />
            Next Giphy
          </button>
        </div>
        {giphy && <div><a href="#" onClick={clicked}><img src={giphy.thumbnail} /></a></div>}
      </div>
    )
  }

  componentDidMount() {
    this.props.getRandomGiphy()
  }
}

Random.propTypes = {
  giphy: SearchResult,
  thumbnailClicked: PropTypes.func.isRequired,
  getRandomGiphy: PropTypes.func.isRequired,
};