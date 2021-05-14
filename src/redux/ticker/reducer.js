const initialState = {
  count: 0
}


export default function reducerTicker(state = initialState, action) {
  switch (action.type) {
    case 'PLUS':
      return {
        count: state.count + 1
      }
    case 'MINUS':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: state.count = -10
      }
    case 'SEND':
      return {
        count: state.count
      }
    default:
      return state
  }
}
