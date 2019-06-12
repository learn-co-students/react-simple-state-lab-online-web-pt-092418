import React from 'react';

class Cell extends React.Component {
  constructor(){
    super()
    this.state = {
      color:  '#FFF'
    }
  }


  changeColor = {} => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }
  render (){
    return(
      <div class="cell" style={{backgroundColor: '#F00'}} onClick={this.changeColor}>
      </div>
    )
  }
}
