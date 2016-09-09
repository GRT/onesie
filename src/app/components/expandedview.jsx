import React from 'react';

class ExpandedView extends React.Component {

  constructor(props) {
    super(props);
  }

  renderPlatform(plat) {
    return (
      <div style={{flex: '1' }}>
        <h2>{plat.ciName}</h2>
        <div style={{paddingLeft: '2em'}}>
          <h3>FQDNs</h3>
          { _.map(plat.fdqns , (fdqn) => {
            return (<div>
                      Hello
                    </div>)
            })
          }

          <h3 style={{marginBottom: '0.5em'}}>Computers</h3>
          { _.map(plat.ips, (obj) => {
            return ( <div style={{paddingBottom: '1em'}}>
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
    return (
      <div style={{padding: '1em'}}>
        <h3>{data.organization} > {data.assembly} > {data.name}</h3>
        <div style={{display: 'flex'}}>
          {_.map(data.platforms, (plat) => {
            return this.renderPlatform(plat);
          })}
        </div>
      </div>
    );
  }
}

ExpandedView.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default ExpandedView;
