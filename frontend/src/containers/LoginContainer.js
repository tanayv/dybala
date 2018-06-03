import { connect } from 'react-redux';
import { fetchUserData } from '../actions/LoginActions';
import Login from '../components/login.component/Login';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  startLogin: (username, password) => {
    console.log(username + "~" + password);
    dispatch(fetchUserData(username, password));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
