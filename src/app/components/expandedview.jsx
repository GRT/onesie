import React from 'react';
import fdqns from '../requests/get-fdqns';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';


class ExpandedView extends React.Component {

  constructor(props) {
    super(props);

    const data = this.props.data;
    _.map(data.platforms, (plat) => {
      this.getFDQNs(plat);
    });
  }

  getFDQNs(platform) {
    fdqns(this.error, {ooOrganization:this.props.data.organization, ooAssembly:this.props.data.assembly,
      ooEnvironment:this.props.data.name , ooPlatform: platform.ciName },
      (domainNames) => {
        this.props.setFdqns(this.props.data.organization,
                            this.props.data.assembly,
                            this.props.data.name,
                            platform.ciName, domainNames)
    });
  }

  error (e) { throw e; }

  renderPlatform(plat , index) {
    var cpuIndex = 0;
    var fdqnIndex = 0;
    return (
      <div style={{flex: '1' }} key={index}>
        <h2>{plat.ciName}</h2>
        <div style={{paddingLeft: '2em'}}>
          <h3>FQDNs</h3>
          { _.map(plat.fdqns , (fdqn) => {
            fdqnIndex += 1;
            return Object.keys(fdqn);
            })
          }

          <h3 style={{marginBottom: '0.5em'}}>Computers</h3>
          { _.map(plat.ips, (obj) => {
            cpuIndex += 1;
            return ( <div style={{paddingBottom: '1em'}} key={cpuIndex}>
                      <b>{obj.hostname}</b>
                      <br/>
                      {obj.ip}
                    </div>);
            })
          }
        </div>
      </div>
      )
  }

  render() {
    const data = this.props.data;
    var index = 0;
    return (
      <div style={{padding: '1em'}}>
        <h3>{data.organization} > {data.assembly} > {data.name}</h3>
        <div style={{display: 'flex', height: '35em', overflow: 'scroll'}}>
          {_.map(data.platforms, (plat) => {
            index += 1;
            return this.renderPlatform(plat , index);
          })}
        </div>
      </div>
    );
  }
}

ExpandedView.propTypes = {
  data: React.PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    organizations: state.organizations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(ExpandedView);;
