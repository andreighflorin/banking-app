import {createContext, useReducer} from 'react'

export const DataContext = createContext()

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {...state, data: action.payload}
    case 'SHOW_UPDATENAME':
      return {...state, name: action.payload}
    case 'SHOW_UPDATENUMBER':
      return {...state, number: action.payload}
    case 'SHOW_UPDATEDATE':
      return {...state, date: action.payload}
    case 'SHOW_UPDATECVC':
      return {...state, cvc: action.payload}
    case 'SHOW_UPDATETYPE':
      return {...state, type: action.payload}
    case 'SHOW_ADDFORM':
      return {...state, showAddForm: action.payload}
    case 'UPDATE_ERRORNAME':
      return {...state, errorName: action.payload}
    case 'UPDATE_ERRORNUMBER':
      return {...state, errorNumber: action.payload}
    case 'UPDATE_ERRORDATE':
      return {...state, errorDate: action.payload}
    case 'UPDATE_ERRORCVC':
      return {...state, errorCvc: action.payload}
    case 'UPDATE_SUCCESSNAME':
      return {...state, successName: action.payload}
    case 'UPDATE_SUCCESSNUMBER':
      return {...state, successNumber: action.payload}
    case 'UPDATE_SUCCESSDATE':
      return {...state, successDate: action.payload}
    case 'UPDATE_SUCCESSCVC':
      return {...state, successCvc: action.payload}
    case 'UPDATE_ISDISABLE':
      return {...state, isDisable: action.payload}
    default:
      return state
  }
}

export function DataProvider({children}) {
  const [state, dispatch] = useReducer(dataReducer, {
    data: '',
    name: null,
    number: null,
    date: null,
    cvc: null,
    type: null,
    showAddForm: false,
    errorName: null,
    errorNumber: null,
    errorDate: null,
    errorCvc: null,
    successName: null,
    successNumber: null,
    successDate: null,
    successCvc: null,
    isDisable: true
  })

  const updateName = (result) => {
    dispatch({type: 'SHOW_UPDATENAME', payload: result})
  }

  const updateNumber = (result) => {
    dispatch({type: 'SHOW_UPDATENUMBER', payload: result})
  }

  const updateDate = (result) => {
    dispatch({type: 'SHOW_UPDATEDATE', payload: result})
  }

  const updateCvc = (result) => {
    dispatch({type: 'SHOW_UPDATECVC', payload: result})
  }

  const updateType = (result) => {
    dispatch({type: 'SHOW_UPDATETYPE', payload: result})
  }

  const updateShowAddForm = (result) => {
    dispatch({type: 'SHOW_ADDFORM', payload: result})
  }

  const updateCards = (result) => {
    dispatch({type: 'UPDATE_DATA', payload: result})
  }

  const updateErrorName = (result) => {
    dispatch({type: 'UPDATE_ERRORNAME', payload: result})
  }

  const updateErrorNumber = (result) => {
    dispatch({type: 'UPDATE_ERRORNUMBER', payload: result})
  }

  const updateErrorDate = (result) => {
    dispatch({type: 'UPDATE_ERRORDATE', payload: result})
  }

  const updateErrorCvc = (result) => {
    dispatch({type: 'UPDATE_ERRORCVC', payload: result})
  }

  const updateSuccessName = (result) => {
    dispatch({type: 'UPDATE_SUCCESSNAME', payload: result})
  }

  const updateSuccessNumber = (result) => {
    dispatch({type: 'UPDATE_SUCCESSNUMBER', payload: result})
  }

  const updateSuccessDate = (result) => {
    dispatch({type: 'UPDATE_SUCCESSDATE', payload: result})
  }

  const updateSuccessCvc = (result) => {
    dispatch({type: 'UPDATE_SUCCESSCVC', payload: result})
  }

  const updateIsDisable = (result) => {
    dispatch({type: 'UPDATE_ISDISABLE', payload: result})
  }

  return (
    <DataContext.Provider value={{...state, updateName, updateNumber, updateDate, updateCvc, updateType, updateShowAddForm, updateCards, updateErrorName, updateErrorNumber, updateErrorDate, updateErrorCvc, updateSuccessName, updateSuccessNumber, updateSuccessDate, updateSuccessCvc, updateIsDisable}}>
      {children}
    </DataContext.Provider>
  )
}