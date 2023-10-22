import {Component} from 'react'
import AllSeats from './components/AllSeats'
import SeatsContext from './seatsContext/context'

class App extends Component {
  state = {btnsIds: []}

  setSeatIds = ids => {
    this.setState(prevState => ({btnsIds: [...prevState.btnsIds, ...ids]}))
  }

  render() {
    const {btnsIds} = this.state
    console.log(btnsIds)
    return (
      <SeatsContext.Provider
        value={{seatIds: btnsIds, setSeatIds: this.setSeatIds}}
      >
        <AllSeats />
      </SeatsContext.Provider>
    )
  }
}

export default App
