import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'
import SeatsContext from '../../seatsContext/context'
import NormalSeat from '../PremiumSeat'
import './index.css'

const premium = [
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},

  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
  {id: uuidv4(), text: 'premium', price: 200},
]

class AllSeats extends Component {
  state = {activeBtn: [], limit: 1, amount: 0, total: 0}

  ChangeSeat = id => {
    const {activeBtn, limit} = this.state

    if (activeBtn.length < limit && !activeBtn.includes(id)) {
      this.setState(prevState => ({
        activeBtn: [...prevState.activeBtn, id],
        amount: prevState.amount + 200,
      }))
    }
  }

  changeInputVal = e => {
    this.setState({limit: e.target.value})
  }

  render() {
    const {activeBtn, amount, total} = this.state
    return (
      <SeatsContext.Consumer>
        {value => {
          const {setSeatIds} = value

          const sendDataToContext = () => {
            setSeatIds(activeBtn)
            this.setState({activeBtn: [], amount: 0})
            this.setState(prevState => ({total: prevState.total + amount}))
          }

          return (
            <div className="home-con">
              <div className="input-container">
                <div>
                  <label htmlFor="ticketType">Ticket Type</label>
                  <br />
                  <select id="ticketType">
                    <option>Premium</option>
                    <option>Normal</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <br />
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    onChange={this.changeInputVal}
                  />
                </div>
              </div>
              <div className="hole-con">
                <div className="main-con">
                  <div className="seats-con">
                    <ul className="alpha-ul">
                      <li>A</li>
                      <li>B</li>
                      <li>C</li>
                      <li>D</li>
                      <li>E</li>
                      <li>F</li>
                      <li>G</li>
                      <li>H</li>
                      <li>I</li>
                    </ul>
                    <ul>
                      {premium.map(each => (
                        <NormalSeat
                          single={each}
                          key={each.id}
                          ChangeSeat={this.ChangeSeat}
                          isActive={activeBtn.includes(each.id)}
                        />
                      ))}
                    </ul>
                  </div>
                  <h3>Screen</h3>

                  <button
                    type="button"
                    className="proceed-btn"
                    onClick={sendDataToContext}
                  >
                    Proceed
                  </button>
                </div>
                <ul className="information-ul">
                  <li className="information-li">amount:{amount}</li>
                  <li className="information-li">
                    <button type="button">seat</button>
                    <span>Available</span>
                  </li>

                  <li className="information-li">
                    <button type="button" className="btn-green">
                      seat
                    </button>
                    <span>Your seats</span>
                  </li>

                  <li className="information-li">
                    <button type="button" disabled>
                      seat
                    </button>
                    <span>Unavailable</span>
                  </li>
                  <li className="information-li">total amount:{total}</li>
                </ul>
              </div>
            </div>
          )
        }}
      </SeatsContext.Consumer>
    )
  }
}

export default AllSeats
