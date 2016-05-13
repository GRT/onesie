import _ from 'lodash';
import React from 'react';
import ScrollArea from 'react-scrollbar';

class Scroll extends React.Component{

  componentWillMount() {
    this.setState({items: []});
  }

  componentDidMount () {
    let dataFunc = this.props.ajaxFunc;
    let params = this.props.ajaxParams;
    dataFunc(this.error, params, (res) => {
      this.setState({items: _.map(res, 'ciName')});
    });
  }

  render() {
    let scrollbarStyles = {borderRadius: 5};

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
                _.map(this.state.items, (item, index) => {
                  return <div key={index} className="assembly" id="slacker">{item}</div>;
                })
              }
            </ScrollArea>
        </div>
    );
  }
}

Scroll.propTypes = {
  ajaxFunc: React.PropTypes.func.isRequired,
  ajaxParams: React.PropTypes.object.isRequired
};

export default Scroll;
