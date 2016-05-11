import React from 'react';
import ScrollArea from 'react-scrollbar';
import ClusterToggleView from 'onesie-toggle-environment-block';

var mockDataThumb1 = {
  id: 1,
  serverList: ["192.168.1.1" , "192.168.1.2"] ,
  name: "dev" ,
  status: "Success",
  version: "1.5"
};


class Scroll extends React.Component {
  handleScroll(scrollData) {
    console.log(scrollData);
  }

  render() {
    let assemblies = [];
    assemblies.push(<div className="assembly" id="primer">primer</div>);
    assemblies.push(<ClusterToggleView className="assembly" mode="thumbnail" environment={mockDataThumb1}></ClusterToggleView>);
    assemblies.push(<div className="assembly" id="onesie">onesie</div>);
    assemblies.push(<div className="assembly" id="landline">landline</div>);
    assemblies.push(<div className="assembly" id="jenkins">jenkins</div>);
    assemblies.push(<div className="assembly" id="slacker">slacker-acorn</div>);

    let scrollbarStyles = { borderRadius: 5 };

    return (
      <div>
        <ScrollArea
          className="area"
          contentClassName="content"
          verticalScrollbarStyle={scrollbarStyles}
          verticalContainerStyle={scrollbarStyles}
          horizontalScrollbarStyle={scrollbarStyles}
          horizontalContainerStyle={scrollbarStyles}
          smoothScrolling={1}
          minScrollSize={40}
          onScroll={this.handleScroll}
        >
          {assemblies}
        </ScrollArea>

      </div>
    );
  }
}

export default Scroll;
