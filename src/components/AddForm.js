import './Modal.css'
import {useData} from '../hooks/useData'
import {useEffect} from 'react'
import SuccesIcon from '../media/images/form-success.svg'
import ErrorIcon from '../media/images/form-error.svg'

export default function AddForm() {

  const {data, name, number, date, cvc, type, isDisable, updateName, updateNumber, updateDate, updateCvc, updateType, successName, errorName, successNumber, errorNumber, successDate, errorDate, successCvc, errorCvc, updateShowAddForm, updateCards, updateErrorName, updateErrorNumber, updateErrorDate, updateErrorCvc, updateSuccessName, updateSuccessNumber, updateSuccessDate, updateSuccessCvc, updateIsDisable} = useData();

  useEffect(() => {
    if (name && number && date && cvc) {
      updateIsDisable(false);
    }
  }, [name, number, date, cvc]);

  //name should contain only letters and spaces
  const patternName = /^[a-zA-Z ]{1,20}$/;
  //mastercard should start with 5 and have 16 digits, visa should start with 4 and have 13 or 16 digits
  const patternNumber = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14}))$/;
  // expiry date should be in the format 00/00
  const patternDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  // cvc should be 3 digits
  const patternCvc = /^[0-9]{3,3}$/;

  const handleClickClose = () => {
    updateShowAddForm(false);
    updateErrorName(null);
    updateErrorNumber(null);
    updateErrorDate(null);
    updateErrorCvc(null);
    updateSuccessName(null);
    updateSuccessNumber(null);
    updateSuccessDate(null);
    updateSuccessCvc(null);
    updateName(null);
    updateNumber(null);
    updateDate(null);
    updateCvc(null);
    updateType(null);
  }

  const handleNameChange = e => {
    e.preventDefault();
    const name = e.target.value.trim();

    if (!patternName.test(name)) {
      updateErrorName('Please fill in your name');
    } else {
      updateName(name);
      updateErrorName(null);
      updateSuccessName(true);
    }
  }

  const handleNumberChange = e => {
    e.preventDefault();
    const number = e.target.value.trim();

    if (!patternNumber.test(number)) {
      updateErrorNumber('Please enter a valid credit card number');
    } else {
      updateNumber(number);
      updateErrorNumber(null);
      updateSuccessNumber(true);
    }

    if (number[0] == '4') {
      const type = 'visa';
      updateType(type);
    } else if (number[0] == '5') {
      const type = 'mastercard';
      updateType(type);
    }

  }

  const handleDateChange = e => {
    e.preventDefault();
    const date = e.target.value.trim();

    if (!patternDate.test(date)) {
      updateErrorDate('Please enter a valid expiry date');
    } else {
      updateDate(date);
      updateErrorDate(null);
      updateSuccessDate(true);
    }
  }

  const handleCvcChange = e => {
    e.preventDefault();
    const cvc = e.target.value.trim();

    if (!patternCvc.test(cvc)) {
      updateErrorCvc('Please enter a valid security code');
    } else {
      updateCvc(cvc);
      updateErrorCvc(null);
      updateSuccessCvc(true);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!name) {
      updateErrorName('Please fill in your name');
    }

    if (!number) {
      updateErrorNumber('Please enter a valid credit card number');
    }

    if (!date) {
      updateErrorDate('Please enter a valid expiry date');
    }
    
    if (!cvc) {
      updateErrorCvc('Please enter a valid security code');
    }

    if (name && number && date && cvc) {
      validateForm(name, number, date, cvc, type);
    }
  }

  const validateForm = (name, number, date, cvc, type) => {
      const result = {
        'name': name,
        'number': number,
        'date': date,
        'cvc': cvc,
        'type': type
      }
      updateCards([...data, result]);
      updateShowAddForm(false);
      updateSuccessName(null);
      updateSuccessNumber(null);
      updateSuccessDate(null);
      updateSuccessCvc(null);
      updateName(null);
      updateNumber(null);
      updateDate(null);
      updateCvc(null);
      updateType(null);
      updateIsDisable(true);
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h2>Add your card details</h2>
        <form className="add-card-form">
          <label>Name in card</label>
          <input type="text" placeholder="John Doe" name="name" style={errorName ? ({color: '#FC484C', borderBottomColor: '#FC484C'}) : (successName ? ({color: '#19AC51', borderBottomColor: '#19AC51'}) : ({color: '#E5E5E5', borderBottomColor: '#E5E5E5'}))} onChange = {(e) => handleNameChange(e)}/>
          <img src={errorName ? ErrorIcon : (successName ? SuccesIcon : '')} alt="" className="icon"/>
          {errorName && <span className="error">{errorName}</span>}
          <label>Card number</label>
          <input type="text" placeholder="0000000000000000" name="number" style={errorNumber ? ({color: '#FC484C', borderBottomColor: '#FC484C'}) : (successNumber ? ({color: '#19AC51', borderBottomColor: '#19AC51'}) : ({color: '#E5E5E5', borderBottomColor: '#E5E5E5'}))} onChange = {(e) => handleNumberChange(e)}/>
          <img src={errorNumber ? ErrorIcon : (successNumber ? SuccesIcon : '')} alt="" className="icon"/>
          {errorNumber && <span className="error">{errorNumber}</span>}
          <label>Expiry date</label>
          <input type="text" placeholder="00/00" name="expiry" style={errorDate ? ({color: '#FC484C', borderBottomColor: '#FC484C'}) : (successDate ? ({color: '#19AC51', borderBottomColor: '#19AC51'}) : ({color: '#E5E5E5', borderBottomColor: '#E5E5E5'}))} onChange = {(e) => handleDateChange(e)}/>
          <img src={errorDate ? ErrorIcon : (successDate ? SuccesIcon : '')} alt="" className="icon"/>
          {errorDate && <span className="error">{errorDate}</span>}
          <label>CVC (Security Code)</label>
          <input type="text" placeholder="000" name="cvc" style={errorCvc ? ({color: '#FC484C', borderBottomColor: '#FC484C'}) : (successCvc ? ({color: '#19AC51', borderBottomColor: '#19AC51'}) : ({color: '#E5E5E5', borderBottomColor: '#E5E5E5'}))} onChange = {(e) => handleCvcChange(e)}/>
          <img src={errorCvc ? ErrorIcon : (successCvc ? SuccesIcon : '')} alt="" className="icon"/>
          {errorCvc && <span className="error">{errorCvc}</span>}
          {!isDisable && <a href="#" className="btn btn-submit" onClick = {e => handleSubmit(e)}>Confirm</a>}
          {isDisable && <a href="#" className="btn btn-disable">Confirm</a>}
        </form>
        <a href="#" className="btn-close" onClick = {handleClickClose}>X</a>
      </div>
    </div>
  )
  
}