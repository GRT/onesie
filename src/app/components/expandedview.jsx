import React from 'react';

class ExpandedView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <div>
        <h1>Detail View: {data.name}</h1>
        <div>
          <div style={{float:'left'}}>
            {data.version}
          </div>
          <div style={{float:'right' , textAlign:'right'}}>
            {data.status}
          </div>
        </div>
      </div>
    );
  }
}

ExpandedView.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default ExpandedView;
