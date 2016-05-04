import React from 'react'
import ScrollArea from 'react-scrollbar';

class Scroll extends React.Component{
    constructor(props){
        super(props);
    }

    handleScroll(scrollData){
      console.log(scrollData);
    }

    render() {
        var assemblies = [];
        assemblies.push(<div className="assembly" id="primer">primer</div>);
        assemblies.push(<div className="assembly" id="onesie">onesie</div>);
        assemblies.push(<div className="assembly" id="landline">landline</div>);
        assemblies.push(<div className="assembly" id="jenkins">jenkins</div>);
        assemblies.push(<div className="assembly" id="slacker">slacker-acorn</div>);

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
                  onScroll={this.handleScroll}
                  >
                  {assemblies}
                </ScrollArea>

            </div>
        );
    }
}

export default Scroll;
