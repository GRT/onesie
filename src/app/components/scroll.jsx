import _ from 'lodash';
import React from 'react';
import ScrollArea from 'react-scrollbar';
import Assembly from './assembly.jsx';

class Scroll extends React.Component {

  constructor(props) {
    super(props);
    this.renderAssembies = this.renderAssembies.bind(this);
  }

  renderAssembies (item, index) {
    return ( <Assembly key={index} item={item} organization={this.props.organization}/> );
  }

  render() {
    return (
      <ScrollArea
        smoothScrolling={true}
        minScrollSize={40}
        onScroll={this.handleScroll} >
        { _.map(this.props.assemblies, (item, index) => this.renderAssembies(item, index) ) }
      </ScrollArea>
    );
  }
}

Scroll.propTypes = {
  assemblies: React.PropTypes.array.isRequired,
  organization: React.PropTypes.string.isRequired
};

export default Scroll;
