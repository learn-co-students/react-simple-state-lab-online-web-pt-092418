import React from 'react';

export default class Cell extends React.Component {
  constructor(this.props.value){
    super(this.props.value)
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
