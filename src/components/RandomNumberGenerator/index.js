import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickCountButton = () => {
    this.setState(preState => ({
      count: Math.ceil(Math.random() * 100) - (preState.count - preState.count),
    }))
  }

  render() {
    const {count} = this.state
    const {topHeading, buttonText} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="top-heading">{topHeading}</h1>
          <p className="paragraph-style">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="style-button"
            type="button"
            onClick={this.onClickCountButton}
          >
            {buttonText}
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
