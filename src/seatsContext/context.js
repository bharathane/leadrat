import {createContext} from 'react'

const SeatsContext = createContext({
  seatIds: [],
  setSeatIds: () => {},
})
export default SeatsContext
