import React, { Component } from 'react';
import update from 'react-addons-update';
import RegisterIndex from '../components/organisms/RegisterIndex';
import axios from 'axios';
import { fetchServerConfig } from '../config';

class RegisterIndexContainer extends Component {

  state = {
    loading: false,
    title: '',
    isChangedTitle: false,
    currentIndex: -1,
    previousIndex: -1,
    isFirstActived: false,
    navList: [{
      path: 'contact',
      name: 'Contact info',
      active: true,
    }, {
      path: 'education',
      name: 'Education',
      active: false,
    }, {
      path: 'academic',
      name: 'Academic Achievements',
      active: false,
    }, {
      path: 'extracurricular',
      name: 'Extracurricular Activities',
      active: false,
    }, {
      path: 'award',
      name: 'Awards & Recognitions',
      active: false,
    }, {
      path: 'new',
      name: 'Add new +',
      active: false,
    }]
  }

  componentDidMount() {
    // console.log(this.props)
    const changeNavIndex = 5;
    // const changeNav = this.props.history.location.state;
    const email = localStorage.getItem('email');
    axios.get(`http://${fetchServerConfig.ip}:4000/api/title/${email}`)
    .then(res => {
      console.log(res.data.extraTitle)
      return this.setState({
        title: res.data.title,
        loading: true,
        navList: update(
          this.state.navList,
          {
            [changeNavIndex]: {
              name: {
                $set: res.data.extraTitle,
              }
            }
          }
        )
      })
    });
  }

  handleExtraTitleChange = (title) => {
    const email = localStorage.getItem('email');
    const changeNavIndex = 5;
    return axios.post(`http://${fetchServerConfig.ip}:4000/api/register/extra/change/${email}`, {
      title,
    })
    .then(() => {
      return this.setState({
        navList: update(
          this.state.navList,
          {
            [changeNavIndex]: {
              name: {
                $set: title,
              }
            }
          }
        )
      })
    })
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
    const email = localStorage.getItem('email');
    this.setState({
      isChangedTitle: false,
    })
    axios.post(`http://${fetchServerConfig.ip}:4000/api/title/${email}`, {
      data: this.state.title,
    })
    .then(res => console.log(res))
  }

  handleNavClick = (index) => {
    const initIndex = 0;
    if (!this.state.isFirstActived && index !== 0) {
      return this.setState({
        previousIndex: 0,
        currentIndex: index,
        isFirstActived: true,
        navList: update(
          this.state.navList,
          {
            [initIndex]: {
              active: {
                $set: false,
              }
            },
            [index]: {
              active: {
                $set: true,
              }
            }
          }
        )
      })
    }

    if (!this.state.isFirstActived && index === 0 ) {
      return this.setState({
        previousIndex: 0,
        currentIndex: index,
        isFirstActived: true,
      })
    };

    return this.setState({
      previousIndex: this.state.currentIndex,
      currentIndex: index,
      navList: update(
        this.state.navList,
        {
          [this.state.currentIndex]: {
            active: {
              $set: false,
            }
          },
          [index]: {
            active: {
              $set: true,
            }
          }
        }
      )
    })

  }

  handleChangeNavList = () => {
    const email = localStorage.getItem('email');
    const navName = prompt('add new section');

    const newNav = {
      path: `new/${navName}`,
      name: navName,
    }
    axios.post(`http://${fetchServerConfig.ip}:4000/api/title/nav/${email}`, {
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
      loading,
    } = this.state;
    const {
      handleChangeTitle,
      handleUpdateTitle,
      handleSubmitTitle,
      handleChangeNavList,
      handleNavClick,
      handleExtraTitleChange,
     } = this;
    return !loading ? <h2>loading</h2> : (
      <RegisterIndex
        history={history}
        title={title}
        onChangeTitle={handleChangeTitle}
        onUpdateTitle={handleUpdateTitle}
        onSubmitTitle={handleSubmitTitle}
        isChangedTitle={isChangedTitle}
        onChangeNavList={handleChangeNavList}
        navList={navList}
        onNavClick={handleNavClick}
        onExtraTitleChange={handleExtraTitleChange}
      />
    );
  }
}

export default RegisterIndexContainer;
