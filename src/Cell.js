import React from 'react';

class Cell extends React.Component {
  constructor(){
    super()
    this.state = {
      color:  '#FFF'
    }
  }

  render (){
    return(
      <div class="cell" style={{backgroundColor: '#F00'}}>
      </div>
    )
  }
}
