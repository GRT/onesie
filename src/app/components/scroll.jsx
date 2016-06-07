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
    const scrollbarStyles = {borderRadius: 5};
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
                  var assemStyle = { width: 800, height: 300, fontSize: 18,
                    boxSizing: 'border-box', paddingLeft: 10, paddingTop: 10 };
                  assemStyle.background = ( index % 2 === 0 ) ? 'grey': 'white';
                  return <div key={index} style={assemStyle}>{item}</div>;
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
