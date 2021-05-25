import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ticketMinus, ticketPlus, ticketReset } from '../redux/ticker/actions'


const Ticker = (props) => {

  const [num, setNum] = useState('')
  const [countNum, setCount] = useState(props.count)

  let inputOnChange = (event) => {
    setNum(Number((event.target.value)))
  }

  let send = () => {
    setCount(num + countNum)
  }

  return (
    <div>
      ticker: {countNum + props.count}

      <button onClick={props.ticketPlus}>PLUS</button>
      <button onClick={props.ticketMinus}>MINUS</button>
      <button onClick={props.ticketReset}>RESET</button>

      <hr width='0' />

      <input value={num} onChange={inputOnChange} />
      <button onClick={send}>SEND</button>
    </div>
  )
}

export default connect((state) => {
  return {
    count: state.ticket.count
  }
}, (dispatch) => ({
  ticketPlus: () => dispatch(ticketPlus()),
  ticketMinus: () => dispatch(ticketMinus()),
  ticketReset: () => dispatch(ticketReset())
}))(Ticker)
