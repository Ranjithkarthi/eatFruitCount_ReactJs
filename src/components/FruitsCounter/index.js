// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  bananaCount = () => {
    this.setState(prevBananaCount => ({banana: prevBananaCount.banana + 1}))
  }

  mangoCount = () => {
    this.setState(prevMangoCount => ({mango: prevMangoCount.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state

    return (
      <div className="bg-container-1">
        <div className="bg-container-2">
          <h1 className="heading">
            Bob ate <span className="num-color">{mango}</span> mangoes{' '}
            <span className="num-color">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img-size"
              />
              <button className="btn" type="button" onClick={this.mangoCount}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-size"
              />
              <button className="btn" type="button" onClick={this.bananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
