import React, { Component } from 'react';
import RegisterForm from '../../components/organisms/RegisterForm';
import axios from 'axios';
import { fetchServerConfig } from '../../config';
class ContactContainer extends Component {
  
  state = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
  }

  componentDidMount() {
    const email = localStorage.getItem('email');
    axios.get(`http://${fetchServerConfig.ip}:4000/api/register/contact/${email}`)
    .then(res => {
      const { firstName, lastName, address, phone, email } = res.data;
      this.setState({
        firstName, lastName, address, phone, email,
      })
    })
  }

  hadleUpdateValue = (e, name) => {
    // console.log(e.target.value, name)
    const updateValue = {}
    updateValue[name] = e.target.value;
    this.setState(updateValue)
  }

  handleSubmit = (event) => {
    const email = localStorage.getItem('email');
    const contact = this.state;
    axios.post(`http://${fetchServerConfig.ip}:4000/api/register/contact/${email}`, {
      contact,      
    })
      .then(res => alert('저장되었습니다'))
    event.preventDefault();
  }

  render() {
    const inputData = [{
      label: 'First Name',
      name: 'firstName',
      value: this.state.firstName,
    }, {
      label: 'Last Name',
      name: 'lastName',
      value: this.state.lastName,
    }, {
      label: 'Address',
      name: 'address',
      value: this.state.address,
    }, {
      label: 'Phone',
      name: 'phone',
      value: this.state.phone,
    }, {
      label: 'E-mail',
      name: 'email',
      value: this.state.email,
    }]

    const { handleSubmit, hadleUpdateValue } = this;
    return(
      <RegisterForm
        inputData={inputData}
        onSubmit={handleSubmit}
        onUpdateValue={hadleUpdateValue}
      />
    )
  }
}

export default ContactContainer;