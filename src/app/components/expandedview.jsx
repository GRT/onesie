import React from 'react';
import _ from 'lodash';
import fdqns from '../requests/get-fdqns';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import CopyToClipboard from 'react-copy-to-clipboard';

const imageStyle = {
  margin: 'auto',
  verticalAlign: 'top',
  width: '30px',
  backgroundColor: '#f0f0f5'
};

const clipboardImagePath = 'src/static/clipboard.png';
const clipboardImageMouseOverPath = 'src/static/clipboard_mouseover.png';

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
    const reqObj = {
      ooOrganization:this.props.data.organization,
      ooAssembly: this.props.data.assembly,
      ooEnvironment:this.props.data.name,
      ooPlatform: platform.ciName
    };
    const fqdnHandler = (domainNames) => {
      this.props.setFdqns(this.props.data.organization,
      this.props.data.assembly,
      this.props.data.name,
      platform.ciName, domainNames);
    };
    fdqns(this.error, reqObj, fqdnHandler);
  }

  error (e) { throw e; }

  getFqdns(obj, index) {
    let fqdns = Object.keys(obj);
    // this sets the instance variable that contains the FQDNs for a platform that can be copied
    this.fqdnCopyText[index] = fqdns.toString();
    return fqdns;
  }

  getIps(obj, index) {
    let ips = obj.ip;
    // this sets the instance variable that stores the list of IPs in an array that's specific for a platform
    this.platformIpArray[index] = ips.toString(); // add IP to array within current platform
    return ips;
  }

  setIpCopyText(index) {
    // ipCopyText is an array of array
    // it can be referenced as ipCopyText[platformIndex][ipIndex]
    // The index corresponds to the index of the platform
    this.ipCopyText[index] = this.platformIpArray;
  }

  convertIpCopyString(ipArray) { // convert IP array to a string containing IPs separated by new line to be copied
    if(ipArray == null || typeof ipArray == 'undefined') {
      return '';
    }
    else {
      return ipArray.join('\n');
    }
  }

  convertFqdnCopyString(fqdn) { // convert FQDNs to a string of FQDNs separated by new line to be copied
    if(fqdn == null) {
      return '';
    }
    else {
      return fqdn.split(',').join('\n');
    }
  }

  handleMouseOver(event) {
    event.target.src = clipboardImageMouseOverPath;
  }

  handleMouseOut(event) {
    event.target.src = clipboardImagePath;
  }

  renderPlatform(plat , index) {
    let cpuIndex = 0;
    let fdqnIndex = 0;
    this.platformIpArray = [];
    return (
      <div style={{flex: '1' }} key={index}>
        <h2>{plat.ciName}</h2>
        <div style={{paddingLeft: '2em'}}>
          <h3>FQDNs&nbsp;&nbsp;
            <CopyToClipboard text={this.convertFqdnCopyString(this.fqdnCopyText[index-1])}
              onCopy={() => this.setState({textCopiedMessage: 'FQDNs copied for platform ' + plat.ciName})}>
              <input type='image' src={clipboardImagePath} style={imageStyle} onMouseOver={(event)=>this.handleMouseOver(event)} onMouseOut={(event)=>this.handleMouseOut(event)} />
            </CopyToClipboard>
          </h3>
          { _.map(plat.fdqns , (fdqn) => {
            fdqnIndex += 1;
            return this.getFqdns(fdqn, index-1);
          })
          }

          <div key={index}>
            <h3 style={{marginBottom: '0.5em'}}>
              Computes&nbsp;&nbsp;
              <CopyToClipboard text={this.convertIpCopyString(this.ipCopyText[index-1])}
                onCopy={() => this.setState({textCopiedMessage: 'IPs copied for platform ' + plat.ciName})}>
                <input type='image' src={clipboardImagePath} style={imageStyle} onMouseOver={(event)=>this.handleMouseOver(event)} onMouseOut={(event)=>this.handleMouseOut(event)} />
              </CopyToClipboard>
            </h3>
          </div>
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
      );
  }

  render() {
    const data = this.props.data;
    let index = 0;
    return (
      <div style={{padding: '1em'}}>
        <h3>{data.organization} > {data.assembly} > {data.name}</h3>
        <div style={{display: 'flex', height: '35em', overflow: 'auto'}}>
          {_.map(data.platforms, (plat) => {
            index += 1;
            return this.renderPlatform(plat , index);
          })}
        </div>
        <div><span style={{fontSize: '12px', color: 'red'}}>&nbsp;{this.state.textCopiedMessage}</span></div>
      </div>
    );
  }
}

ExpandedView.propTypes = {
  data: React.PropTypes.object.isRequired,
  setFdqns: React.PropTypes.func
};

function mapStateToProps(state){
  return {
    organizations: state.organizations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(ExpandedView);
