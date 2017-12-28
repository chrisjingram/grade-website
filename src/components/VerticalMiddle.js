import React from 'react';

class VerticalMiddle extends React.Component{
  render(){
    return (
    <div style={{width: "100%", height: "100%", display: "table"}}>
      <div style={{width: "100%", height: "100%", display: "table-cell", verticalAlign: "middle", textAlign: 'center'}}>
        {this.props.children}
      </div>
    </div>);
  }
}

export default VerticalMiddle;
