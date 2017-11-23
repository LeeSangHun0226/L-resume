import React, { Component } from 'react';
import axios from 'axios';
import RegisterForm from '../components/organisms/RegisterForm';
import RegisterAdd from '../components/organisms/RegisterAdd';
import { fetchServerConfig } from '../config';

class RegisterFormContainer extends Component {

  state = {
    title: '',
    path: '',
    label: [],
    inputContents: {},
    isInputFlag: false,
    isPhotoAdded: false,
    isLinkAdded: false,
  }

  componentDidMount() {

    const email = localStorage.getItem('email');
    axios.get(`http://${fetchServerConfig.ip}:4000/api/register/${email}`)
    .then((res) => {
      this.setState({
        inputContents: res.data[0],
    })})
    this.setState({
      label: this.props.label,
      title: this.props.title,
      path: this.props.path,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        label: nextProps.label,
        title: nextProps.title,
        path: nextProps.path,
        isInputFlag: false,
      })
    }
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    const { path, title, inputContents } = this.state;


    // if (path === 'contact') {
    //   const nextInputContents = { ...inputContents };
    //   nextInputContents[path][name] = value;
    //   this.setState({
    //     inputContents: nextInputContents,
    //   })
    // }
    

    if (!inputContents[path]) {
      inputContents[path] = {};
      inputContents[path][name] = value;
      this.setState({
        inputContents: inputContents,
        isInputFlag: true,
      })
     }
      const currentInputContents = inputContents;
      currentInputContents[path][name] = value;
      const totalInputContents = Object.assign(currentInputContents, inputContents);
      this.setState({
        inputContents: totalInputContents,
      })

     // if (!this.state.isInputFlag && !inputContents[path]) {
    //   inputContents[path] = [];
    //   const obj = {};
    //   obj[name] = value;
    //   inputContents[path].push(obj)
    //   console.log(inputContents)
    //   this.setState({
    //     inputContents: inputContents,
    //     isInputFlag: true,
    //   })
    // }


    // const currentInputContents = inputContents;
    // currentInputContents[path] = [];
    // const obj = {};
    // obj[name] = value;
    // currentInputContents[path].push(obj)
    // const totalInputContents = Object.assign(currentInputContents, inputContents);
    // // console.log(currentInputContents, inputContents)
    // this.setState({
    //   inputContents: totalInputContents,
    // })
  }

  handleAddRegister = () => {
    const labelArray = this.state.label;
    
    this.state.label.forEach(label => {
      labelArray.push(label);
    })

    this.setState({
      label: labelArray,
    })
  }

  handleSubmitForm = () => {
    // this.pdfToHTML()
    const data = this.state.inputContents;
    const email = localStorage.getItem('email')
    axios.post(`http://${fetchServerConfig.ip}:4000/api/register/${email}`, data)
    .then(data => 
      alert('saving is completed!')
    )
    .catch(err => console.log(err)) 
  }

  handleAddForm = () => {
    const { path, inputContents } = this.state;
    const nextInputContents = { ...inputContents };
    nextInputContents[path]['id'] += 1;
    this.setState({
      inputContents: nextInputContents,
    })
  }

  handleAddPhoto = () => {
    const { path, inputContents } = this.state;
    const currentInputContents = inputContents;
    currentInputContents[path]['isPhotoAdded'] = true;
    console.log(currentInputContents);
    const totalInputContents = Object.assign(currentInputContents, inputContents);
    this.setState({
      inputContents: totalInputContents,
    })
  }

  handleAddLink = () => {
    const { path, inputContents } = this.state;
    const currentInputContents = inputContents;
    currentInputContents[path]['isLinkAdded'] = true;
    console.log(currentInputContents);
    const totalInputContents = Object.assign(currentInputContents, inputContents);
    this.setState({
      inputContents: totalInputContents,
    })
  }

  handleAddLinkUrl = (e) => {
    const { name, value } = e.target;
    const { path, inputContents } = this.state;
    const currentInputContents = inputContents;
    currentInputContents[path][name] = value;
    console.log(currentInputContents);
    const totalInputContents = Object.assign(currentInputContents, inputContents);
    this.setState({
      inputContents: totalInputContents,
    })
  }

  handleSubmitLink = () => {
    const { path, inputContents } = this.state;
    const currentInputContents = inputContents;
    currentInputContents[path]['isSubmitLinked'] = true;
    console.log(currentInputContents);
    const totalInputContents = Object.assign(currentInputContents, inputContents);
    this.setState({
      inputContents: totalInputContents,
    })
  }

  render() {
    
    const {
      handleChangeInput,
      handleSubmitForm,
      handleAddPhoto,
      handleAddLink,
      handleAddPhotoUrl,
      handleAddLinkUrl,
      handleSubmitLink,
      handleAddForm,
    } = this;
    
    const { title, label, inputContents, path, isPhotoAdded, isLinkAdded } = this.state;

    return (
      <div>
        <RegisterForm
          title={title}
          path={path}
          label={label}
          onChangeInput={handleChangeInput}
          onSubmitForm={handleSubmitForm}
          inputContents={inputContents}
        />
        <RegisterAdd
          title={title}
          path={path}
          inputContents={inputContents}
          isPhotoAdded={isPhotoAdded}
          isLinkAdded={isLinkAdded}
          onAddPhoto={handleAddPhoto}
          onAddLink={handleAddLink}
          onAddPhotoUrl={handleAddPhotoUrl}
          onAddLinkUrl={handleAddLinkUrl}
          onSubmitLink={handleSubmitLink}
          onAddForm={handleAddForm}
        />
      </div>
    );
  }
}

export default RegisterFormContainer;
