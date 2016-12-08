import React from 'react';
import fdqns from '../requests/get-fdqns';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import CopyToClipboard from 'react-copy-to-clipboard';

class ExpandedView extends React.Component {

  constructor(props) {
    super(props);

    const data = this.props.data;
    _.map(data.platforms, (plat) => {
      this.getFDQNs(plat);
    });
  }

  componentWillMount() {
    this.fqdnCopyText = [];
    this.ipCopyText = [];
    this.platformIpArray = [];
    this.state = {textCopiedMessage: ''};
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

  getFqdns(obj, index) {
    var fqdns = Object.keys(obj);
    this.fqdnCopyText[index] = fqdns.toString();
    return fqdns;
  }

  getIps(obj, index) {
    var ips = obj.ip;
    this.platformIpArray[index] = ips.toString(); // add IP to array within current platform
    return ips;
  }

  setIpCopyText(index) {
    // ipCopyText is an array of array
    // it can be referenced as ipCopyText[platformIndex][ipIndex]
    this.ipCopyText[index] = this.platformIpArray;
  }

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
            return this.getFqdns(fdqn, index-1);
            })
          }

          <h3 style={{marginBottom: '0.5em'}}>Computers</h3>
          { _.map(plat.ips, (obj) => {
            cpuIndex += 1;
            return ( <div style={{paddingBottom: '1em'}} key={cpuIndex}>
                      <b>{obj.hostname}</b>
                      <br/>
                      {this.getIps(obj, cpuIndex-1)}
                    </div>);
            })
          }
          {this.setIpCopyText(index-1)}
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
        <div style={{display: 'flex', height: '34em', overflow: 'auto'}}>
          {_.map(data.platforms, (plat) => {
            index += 1;
            return this.renderPlatform(plat , index);
          })}
        </div>
        <div>
          <CopyToClipboard text={this.fqdnCopyText.toString()}
            onCopy={() => this.setState({textCopiedMessage: 'FQDNs copied'})}>
            <button>Copy FQDNs to Clipboard</button>
          </CopyToClipboard>&nbsp;
          <CopyToClipboard text={this.ipCopyText.toString()}
            onCopy={() => this.setState({textCopiedMessage: 'IPs copied'})}>
            <button>Copy IPs to Clipboard</button>
          </CopyToClipboard>
          <span style={{fontSize: '12px', color: 'red'}}>&nbsp;{this.state.textCopiedMessage}</span>
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
