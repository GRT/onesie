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
      let assems = this.props.search.items[this.props.search.selected].assemblies;
      let assemObjsArr = _.values(assems);
      this.props.setScrollList(assemObjsArr);
    }
  }

  render() {
    const selectedOrg = this.props.search.selected;
    let assemblies = [];

    if(selectedOrg){
      assemblies = this.props.search.items[selectedOrg].assemblies;
    }

    const selectStyles = {
      margin: '10px 10px 10px 10px',
      float:'right',
      fontSize: '20px',
      color: '#111',
      width: '100%',
      maxWidth: '50%',
      border: '1px solid white',
      borderRadius: '3px',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .48)'
    };

    if(!selectedOrg) {
      return <div></div>;
    }

    return (
      <div>
        <input id='assemblySelected' input='search' list='alist' placeholder='Search ...' style={selectStyles} onChange={this.updateAssemblyList.bind(this)} />
        <datalist id='alist'>
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
