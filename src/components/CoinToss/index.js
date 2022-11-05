// Write your code here
import {Component} from 'react'

import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, tossImg: headsImg}

  tossCoin = () => {
    const {heads, tails, tossImg, total} = this.state
    const tossCoin = Math.ceil(Math.random() * 2)
    let newTossImg = tossImg
    let newHeads = heads
    let newTails = tails

    if (tossCoin === 1) {
      newTossImg = headsImg
      newHeads += 1
    } else {
      newTossImg = tailsImg
      newTails += 1
    }
    this.setState({heads: newHeads, tails: newTails, tossImg: newTossImg})
    this.setState(() => ({total: total + 1}))
  }

  render() {
    const {total, heads, tails, tossImg} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div className="img-container">
            <img className="img" src={tossImg} alt="toss result" />
          </div>
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="countOfToss">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
