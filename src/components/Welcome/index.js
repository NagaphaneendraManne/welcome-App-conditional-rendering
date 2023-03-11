// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  renderAuthButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button type="button" onClick={this.onSubscribe}>
          Subscribed
        </button>
      )
    }
    return (
      <button type="button" onClick={this.onSubscribe}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default Welcome
