import React from 'react'
import {connect} from 'react-redux'
import {ticketMinus, ticketPlus, ticketReset} from '../redux/ticker/actions'

const Ticker = (props) => {

  return (
      <div>
        ticker: {props.count}

        <button onClick={props.ticketPlus}>PLUS</button>
        <button onClick={props.ticketMinus}>MINUS</button>
        <button onClick={props.ticketReset}>RESET</button>
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
