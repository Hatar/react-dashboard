import React, { Component } from 'react'

class UserLayout extends Component {

  componentDidMount(){
    document.body.classList.add('background')
  }
  componentWillMount(){
    document.body.classList.remove('background')
  }
  render() {
    return (
      <>
        <div className="fixed-background">
          <main>
            <div className="container">{this.props.children}</div>
          </main>
        </div>
      </>
    )
  }
}
export default UserLayout