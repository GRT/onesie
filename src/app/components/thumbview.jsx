import React from 'react';

class ThumbView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <div className="thumbView" style={{ display: 'flex' , flexDirection: 'column' , flexGrow: '1'}}>
        {/* Title */}
        <h3 style={{margin: '0em' , flexGrow: '0'}}>
          {data.name}
        </h3>

        {/* Body */}
        <div className="thumbBody" style={{fontSize: '1em' , width: '100%' , height: 'auto', flexGrow: '3'}}>
            {data.version}
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
