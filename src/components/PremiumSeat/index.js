import SeatContext from '../../seatsContext/context'
import './index.css'

const NormalSeat = props => {
  const {single, ChangeSeat, isActive} = props
  const {id} = single

  const sendId = () => {
    ChangeSeat(id)
  }

  const changeSeatColor = isActive ? 'btn-green' : 'btn-seat'

  return (
    <SeatContext.Consumer>
      {value => {
        const {seatIds} = value
        const isInclude = seatIds.includes(id)
        return (
          <li>
            <button
              type="button"
              onClick={sendId}
              className={changeSeatColor}
              disabled={isInclude}
            >
              seat
            </button>
          </li>
        )
      }}
    </SeatContext.Consumer>
  )
}

export default NormalSeat
