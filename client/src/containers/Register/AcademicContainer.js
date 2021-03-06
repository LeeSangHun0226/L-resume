import React, { Component } from 'react';
import update from 'react-addons-update';
import RegisterArrayForm from '../../components/organisms/RegisterArrayForm';
import axios from 'axios';
import { fetchServerConfig } from '../../config';

class AcademicContainer extends Component {

  state = {
    photoFlag: false,
    photoProcessing: false,
    body: [{
      description: '',
      index: 0,
    }],
    photo: [],
    link: [],
  }

  componentDidMount() {
    const email = localStorage.getItem('email');
    axios.get(`http://${fetchServerConfig.ip}:4000/api/register/academic/${email}`)
    .then(res => {
      const { body, photo, link } = res.data;
      
      this.setState({
        body,
        photo,
        link,
      })
    })
  }

  handleSubmit = (event) => {
    const { photo, link } = this.state;
    const email = localStorage.getItem('email')
    axios.post(`http://${fetchServerConfig.ip}:4000/api/register/academic/${email}`, {
      academic: this.state.body,
      photo,
      link,
    })
    .then(res => alert('저장되었습니다'))


    event.preventDefault();
  }

  handleAddBodyForm = () => {
    const addForm = {
      description: '',
      index: this.state.body.length,
    }

    this.setState({
      body: update(
        this.state.body,
        {
          $push: [addForm]
        }
      )
    });
  }

  handleUpdateArrayInputValue = (e, name, index) => {
    this.setState({
      body: update(
        this.state.body,
        {
          [index]: {
            [name]: {
              $set: e.target.value,
            }
          }
        }
      )
    })
  }

  handleAddPhoto = () => {
    const addPhoto = {
      data_uri: '',
      filename: '',
      filetype: '',
      photoFlag: false,
      isSelected: false,
      index: this.state.photo.length,
    }

    this.setState({
      photo: update(
        this.state.photo,
        {
          $push: [addPhoto]
        }
      ),
    });
  }

  handleAddLink = () => {
    const addLink = {
      linkUrl: '',
      linkFlag: false,
      index: this.state.link.length,
    }

    this.setState({
      link: update(
        this.state.link,
        {
          $push: [addLink]
        }
      ),
    });
  }

  handleUpdatePhoto = (e, index) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (upload) => {
      this.setState({
        photo: update(
          this.state.photo,
          {
            [index]: {
              data_uri: { $set: upload.target.result },
              filename: { $set: file.name },
              filetype: { $set: file.type },
              isSelected: { $set: true }
            }
          }
        )
      });
    }

    reader.readAsDataURL(file);
  }

  handleUpdateLink = (e, index) => {
    this.setState({
      link: update(
        this.state.link,
        {
          [index]: {
            linkUrl: { $set: e.target.value },
          }
        }
      )
    })
  }

  handleSubmitPhoto = (e, index) => {
    e.preventDefault();
    this.setState({
      photoProcessing: true,
    })

    const photoIndex = index;
    const photo = {
      data_uri: this.state.photo[photoIndex].data_uri,
      filename: this.state.photo[photoIndex].filename,
      filetype: this.state.photo[photoIndex].filetype,
      index: this.state.photo[photoIndex].index,
    }

    const email = localStorage.getItem('email')
    const location = 'academic';
    axios({
      method: 'post',
      url: `http://${fetchServerConfig.ip}:4000/api/photo/academic/${email}`,
      data: {
        photo,
        email,
      },
      dataType: 'json',
    })
    .then(res => {
      this.setState({
        photo: update(
          this.state.photo,
          {
            [index]: {
              photoFlag: { $set: true },
            }
          }
        )
      });
      console.log(res)
    })
  }

  handleSubmitLink = (e, index) => {
    const email = localStorage.getItem('email');
    this.setState({
      link: update(
        this.state.link,
        {
          [index]: {
            linkFlag: { $set: true },
          } 
        }
      )
    }, () => {
      axios.post(`http://${fetchServerConfig.ip}:4000/api/link/academic/${email}`, {
        data: this.state.link,
      })
      // .then(res => console.log(res))
    }
  )
}

  handleDeletePhoto = (e, index) => {
    const email = localStorage.getItem('email');
    this.setState(prevState => ({
      photo: update(
        prevState.photo, {
          $splice: [[index, 1]]
        }
      )
    }), () => {
      axios.post(`http://${fetchServerConfig.ip}:4000/api/photo/academic/modify/${email}`, {
        data: this.state.photo,
      })
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    })
  }

  handleDeleteLink = (e, index) => {
    const email = localStorage.getItem('email');
    this.setState(prevState => ({
      link: update(
        prevState.link, {
          $splice: [[index, 1]]
        }
      )
    }), () => {
      axios.post(`http://${fetchServerConfig.ip}:4000/api/link/academic/modify/${email}`, {
        data: this.state.link,
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
  }

  render() {
    const inputData = this.state.body;
    const { photo, link, photoProcessing } = this.state;
    const {
      handleAddBodyForm,
      handleSubmit,
      handleUpdateArrayInputValue,
      handleAddPhoto,
      handleAddLink,
      handleSubmitPhoto,
      handleUpdatePhoto,
      handleSubmitLink,
      handleUpdateLink,
      handleDeletePhoto,
      handleDeleteLink,
    } = this;

    return (
      <RegisterArrayForm
        inputData={inputData}
        onAddBodyForm={handleAddBodyForm}
        onSubmit={handleSubmit}
        onUpdateArrayInputValue={handleUpdateArrayInputValue}
        onAddPhoto={handleAddPhoto}
        onAddLink={handleAddLink}
        photo={photo}
        link={link}
        photoProcessing={photoProcessing}
        onSubmitPhoto={handleSubmitPhoto}
        onUpdatePhoto={handleUpdatePhoto}
        onSubmitLink={handleSubmitLink}
        onUpdateLink={handleUpdateLink}
        onDeletePhoto={handleDeletePhoto}
        onDeleteLink={handleDeleteLink}
        location="academic"
        
      />
    );
  }
}

export default AcademicContainer;
