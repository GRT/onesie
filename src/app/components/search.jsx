import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions (item, index) {
    return ( <option value={index} key={index}>{index}</option>);
  }

  updateAssemblyList(event) {
    let assemblyName = event.target.value;
    {/* change this to be wildcard-ish */}
    if(this.props.search.items[this.props.search.selected].assemblies[assemblyName]) {
      this.props.setScrollList([this.props.search.items[this.props.search.selected].assemblies[assemblyName]]);
    }
    else {
      this.props.setScrollList([this.props.search.items[this.props.search.selected].assemblies]);
    }
  }

  render() {
    const selectedOrg = this.props.search.selected;
    let assemblies = [];

    if(selectedOrg){
      assemblies = this.props.search.items[selectedOrg].assemblies;
    }

    return (
      <div>
        <input id="assemblySelected" input="select" list="alist" placeholder="Search ..." onChange={this.updateAssemblyList.bind(this)} />
        <datalist id="alist">
          {_.map( assemblies, (item, index) => this.renderOptions(item, index) )}
        </datalist>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  search: React.PropTypes.object,
  setScrollList: React.PropTypes.func
};

function mapStateToProps(state){
  return {
    search: state.organizations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(SearchComponent);
