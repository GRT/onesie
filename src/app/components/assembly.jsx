import _ from 'lodash';
import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';



const assemblyInnerStyles = {
  margin:'10px 10px 10px 10px',
  height: 'auto',
  background: '#f0f0f5',
  border: '1px solid gray',
  boxShadow: '0 2px 4px rgba(0, 0, 0, .48)',
  overflow:'hidden'
};

const paragraphStyles = {
  fontSize: '18px',
  color: '#111',
  paddingLeft: '20px'
};

class Assembly extends React.Component{

  renderEnvironments() {
    return _.map(this.props.item.environments, (item, index) => {
      const data = {
        id: item.ciId ,
        name: item.ciName , 
        status: 'Success',
        version: item.impl
      };

      const thumbElem =( 
        <div>
          <h3>{data.name}</h3>
          <div>
            <div style={{float:'left'}}>
              {data.version}
            </div>
            <div style={{float:'right' , textAlign:'right'}}>
              {data.status}
              </div>
          </div>
      </div> );

      const thumbStyle = {
        backgroundColor: '#FF0000'
      };

      const detailStyle = {
        backgroundColor: '#0000FF'
      };

      const detailElem = ( 
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
      </div> );

      return (<ClusterToggleView key={index} mode="thumbnail" 
                  environment={data} 
                  thumbViewStyle={thumbStyle}
                  detailViewStyle={detailStyle}
                  thumbElement={thumbElem}
                  detailElement={detailElem}/>);
    });
  }

  error (e) { throw e; }

  render() {
    return (
      <div style={assemblyInnerStyles}>
        <b style={paragraphStyles}>{this.props.item.ciName}</b>
        {this.renderEnvironments()}
      </div>
    );
  }
}

Assembly.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default Assembly;