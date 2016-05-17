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
                  return <div key={index} className="assembly" >{item}</div>;
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
