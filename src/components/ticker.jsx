import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ticketMinus, ticketPlus, ticketReset, send } from '../redux/ticker/actions'


const Ticker = (props) => {

  const [num, setNum] = useState(0)

  return (
    <div>
      ticker: {props.count}

      <button onClick={props.ticketPlus}>PLUS</button>
      <button onClick={props.ticketMinus}>MINUS</button>
      <button onClick={props.ticketReset}>RESET</button>

      <hr width='0' />

      <input type='text' name='input' value={num} />
      <button onClick={() => setNum(num + props.count)}>SEND</button>
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
  ticketReset: () => dispatch(ticketReset()),
  send: () => dispatch(send())
}))(Ticker)
