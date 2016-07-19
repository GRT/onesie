import Main from './main.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';


function mapStateToProps(state){
  return {
    organizations: state.organizations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps , mapDispatchToProps)(Main);

export default App;