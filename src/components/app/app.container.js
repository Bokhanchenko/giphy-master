import { connect } from 'react-redux';
import { withRouter } from "react-router";
import App from './app';
import { hideGiphyDisplay } from "../../actions/giphy-display";

function mapStateToProps (state) {
  return {
    giphyDisplayShown: state.giphyDisplay.isShown,
    giphyDisplayed: state.giphyDisplay.giphy
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideGiphyDisplay: () => dispatch(hideGiphyDisplay()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
