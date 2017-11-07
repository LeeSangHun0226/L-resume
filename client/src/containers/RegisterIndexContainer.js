import React, { Component } from 'react';
import update from 'react-addons-update';
import RegisterIndex from '../components/organisms/RegisterIndex';
import axios from 'axios';
import { fetchServerConfig } from '../config';

class RegisterIndexContainer extends Component {

  state = {
    title: '',
    isChangedTitle: false,
    navList: [{
      path: 'contact',
      name: 'Contact info',
    }, {
      path: 'education',
      name: 'Education',
    }, {
      path: 'academic',
      name: 'Academic Achievements'
    }, {
      path: 'extracurricular',
      name: 'Extracurricular Activities'
    }, {
      path: 'award',
      name: 'Awards & Recognitions'
    }, {
      path: 'new',
      name: 'Add New +',
    }]
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId');
    axios.get(`http://${fetchServerConfig.ip}:4000/api/title/${userId}`)
    .then(res => {
      this.setState({
        title: res.data,
      })
    });
  }

  handleChangeTitle = () => {
    this.setState({
      isChangedTitle: true,
    })
  }

  handleUpdateTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmitTitle = () => {
    const userId = localStorage.getItem('userId');
    this.setState({
      isChangedTitle: false,
    })
    axios.post(`http://${fetchServerConfig.ip}:4000/api/title/${userId}`, {
      data: this.state.title,
    })
    .then(res => console.log(res))
  }

  handleChangeNavList = () => {
    const userId = localStorage.getItem('userId');
    const navName = prompt('add new section');

    const newNav = {
      path: `new/${navName}`,
      name: navName,
    }
    axios.post(`http://${fetchServerConfig.ip}:4000/api/title/nav/${userId}`, {
      navName,
    })
    .then(res => console.log(res))
    this.setState({
      navList: update(
        this.state.navList,
        {
          $push: [newNav]
        }
      )
    });
  }

  render() {
    const { history } = this.props;
    const { 
      title,
      isChangedTitle,
      navList,
    } = this.state;
    const {
      handleChangeTitle,
      handleUpdateTitle,
      handleSubmitTitle,
      handleChangeNavList,
     } = this;
    return (
      <RegisterIndex
        history={history}
        title={title}
        onChangeTitle={handleChangeTitle}
        onUpdateTitle={handleUpdateTitle}
        onSubmitTitle={handleSubmitTitle}
        isChangedTitle={isChangedTitle}
        onChangeNavList={handleChangeNavList}
        navList={navList}
      />
    );
  }
}

export default RegisterIndexContainer;
