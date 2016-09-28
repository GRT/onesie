import _ from 'lodash';
import React from 'react';
import ScrollArea from 'react-scrollbar';
import Assembly from './assembly.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

class Scroll extends React.Component {

  constructor(props) {
    super(props);
    this.renderAssembies = this.renderAssembies.bind(this);
  }

  renderAssembies (item, index) {
    return ( <Assembly key={index} item={item}/> );
  }

  render() {
    var selectedOrg = this.props.organizations.selected;
    var assemblies = [];
    
    if(selectedOrg){
      assemblies = this.props.organizations.items[selectedOrg].assemblies;
    }

    return (
      <ScrollArea
        smoothScrolling={true}
        minScrollSize={40}
        onScroll={this.handleScroll} >
        {_.map( assemblies, (item, index) => this.renderAssembies(item, index) ) }
      </ScrollArea>
    );
  }
}

function mapStateToProps(state){
  return {
    organizations: state.organizations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(Scroll);
