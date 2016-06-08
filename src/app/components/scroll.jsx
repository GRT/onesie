import _ from 'lodash';
import React from 'react';
import ScrollArea from 'react-scrollbar';
import ClusterToggleView from 'onesie-toggle-environment-block';

var mockDataThumb1 = {
  id: 1,
  serverList: ['192.168.1.1' , '192.168.1.2'] ,
  name: 'dev' ,
  status: 'Success',
  version: '1.5'
};


class Scroll extends React.Component{
  render() {
    var scrollbarStyles = {borderRadius: 5};
    var assemblyStyles = {
      width: '100%',
    	paddingBottom: '25%',
    	fontSize: '18px',
    	boxSizing: 'border-box',
    	paddingLeft: '10px',
      paddingRight: '10px',
      position: 'relative',
      color: '#d1d1e0'
    };
    var assemblyInnerStyles = {
      position: 'absolute',
      left: '10px',
      right: '10px',
      top: '10px',
      bottom: '10px',
      background: '#f0f0f5',
      border: '1px solid gray',
      boxShadow: '0 2px 4px rgba(0, 0, 0, .48)'
    };
    var paragraphStyles = {
      fontFamily: 'Helvetica Neue',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#111',
      paddingLeft: '20px'
    };
    return (
        <div>
            <ScrollArea
              className="area"
              contentClassName="content"
              verticalScrollbarStyle={scrollbarStyles}
              verticalContainerStyle={scrollbarStyles}
              horizontalScrollbarStyle={scrollbarStyles}
              horizontalContainerStyle={scrollbarStyles}
              smoothScrolling= {true}
              minScrollSize={40}
              onScroll={this.handleScroll} >
              {
                _.map(this.props.items, (item, index) => {
                  return <div key={index} className="assembly" style={assemblyStyles}>
                    <div className="assembly-inner" style={assemblyInnerStyles}><p style={paragraphStyles}>{item}</p></div>
                  </div>;
                })
              }
              <ClusterToggleView mode="thumbnail" environment={mockDataThumb1}></ClusterToggleView>
            </ScrollArea>
        </div>
    );
  }
}

Scroll.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Scroll;
