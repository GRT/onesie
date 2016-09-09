import React from 'react';

class ThumbView extends React.Component {

  constructor(props) {
    super(props);
  }

  ipString(platform){
    const ips = _.map(platform.ips , (obj) => {
      return obj.ip;
    });


    if(ips.length > 0){
      return ips.join(', ');
    } else {
      return 'No Ips Found';
    }
  }

  renderPlatforms() {
    const data = this.props.data;
    return _.map(data.platforms, (plat, index) =>
              (<div key={index} style={{width: '100%'}}>
                  <div style={{width: '100%' , fontWeight: 'bold', fontSize: '.75em'}}>
                    <div style={{float: 'left'}}>{plat.ciName}</div>
                    <div style={{float: 'right'}}>{plat.ciAttributes.version}.VER</div>
                  </div>
                  <div style={{width: '100%' , clear: 'both', fontSize: '.5em'}}>
                    {this.ipString(plat)}
                  </div>
                </div>));
  }

  render() {
    const data = this.props.data;

    return (
      <div className="thumbView" style={{ display: 'flex' , flexDirection: 'column' , flexGrow: '1'}}>
        {/* Title */}
        <div style={{margin: '0em' , flexGrow: '0'}}>
          <h3 style={{margin: '0em' , float: 'left'}}>
            {data.profile}
          </h3>
          <h4 style={{margin: '.1em 0 0 0' , float: 'right'}}>
            {data.name}
          </h4>
        </div>

        {/* Body */}
        <div className="thumbBody" style={{fontSize: '1em' , width: '100%' , height: 'auto', flexGrow: '3'}}>
          {this.renderPlatforms()}
        </div>

        {/* Footer */}
        <div className="thumbFooter" style={{fontSize: '0.5em' , width: '100%', flexGrow: '0'}}>
          <div style={{display:'inline-block', verticalAlign: 'top', textAlign:'left', width: '70%'}}>
            {data.description}
          </div>
          <div style={{display:'inline-block', verticalAlign: 'top' , textAlign:'right' , width: '30%'}}>
            Clouds: {data.clouds}
          </div>
        </div>
      </div>
    );
  }
}

ThumbView.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default ThumbView;
