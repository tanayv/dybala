import { connect } from 'react-redux';
import { startAuthentication } from '../actions/actions';
import Login from '../components/login.component/Login';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoginClick: () => dispatch(startAuthentication()),
  startLogin: (username, password) => {
    console.log(username + "~" + password);
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
