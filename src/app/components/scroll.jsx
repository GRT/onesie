import _ from 'lodash';
import React from 'react';
import Assembly from './assembly.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

const scollStyles = {
  padding:'0px 0px 20px 0px'
};

class Scroll extends React.Component {

  constructor(props) {
    super(props);
    this.renderAssembies = this.renderAssembies.bind(this);
  }

  renderAssembies (item, index) {
    return ( <Assembly key={index} item={item}/> );
  }

  render() {
    let assemblies = [];
    assemblies = this.props.organizations.scrollList.assemblies;
    return (
      <div style={scollStyles}>
        {_.map( assemblies, (item, index) => this.renderAssembies(item, index) ) }
      </div>
    );
  }
}

Scroll.propTypes = {
  organizations: React.PropTypes.object
};

function mapStateToProps(state){
  return {
    organizations: state.organizations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(Scroll);
