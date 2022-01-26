// log
import store from '../store'

const fetchDataRequest = () => {
 return {
  type: 'CHECK_DATA_REQUEST'
 }
}

const fetchDataSuccess = payload => {
 return {
  type: 'CHECK_DATA_SUCCESS',
  payload: payload
 }
}

const fetchDataFailed = payload => {
 return {
  type: 'CHECK_DATA_FAILED',
  payload: payload
 }
}


// change asper app requirement
export const fetchData = account => {
 return async dispatch => {
  dispatch(fetchDataRequest())
  try {
   let totalSupply = await store
    .getState()
    .blockchain.smartContract.methods.totalSupply()
    .call()
   //console.log(totalSupply)
   dispatch(
    fetchDataSuccess({
     totalSupply
    })
   )
  } catch (err) {
   dispatch(fetchDataFailed('Could not load data from contract.'))
  }
 }
}
