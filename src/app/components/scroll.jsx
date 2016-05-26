import _ from 'lodash';
import React from 'react';
import ScrollArea from 'react-scrollbar';

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
                  const assemStyle = { width: 800, height: 300, fontSize: 18,
                    boxSizing: 'border-box', paddingLeft: 10, paddingTop: 10 };
                  assemStyle.background = ( index % 2 === 0 ) ? 'grey': 'white';
                  return <div key={index} style={assemStyle}>{item}</div>;
                })
              }
            </ScrollArea>
        </div>
    );
  }
}

Scroll.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Scroll;
