import React, { Component } from 'react';
import update from 'react-addons-update';
import RegisterArrayForm from '../../components/organisms/RegisterArrayForm';
import axios from 'axios';
import { fetchServerConfig } from '../../config';

class EducationContainer extends Component {

  state = {
    photoFlag: false,
    photoProcessing: false,
    body: [{
      schoolType: '',
      schoolName: '',
      startDate: '',
      endDate: '',
      index: 0,
    }],
    photo: [],
    link: [],
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId');
    axios.get(`http://${fetchServerConfig.ip}:4000/api/register/education/${userId}`)
      .then(res => {
        console.log(res)
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
    const userId = localStorage.getItem('userId')
    axios.post(`http://${fetchServerConfig.ip}:4000/api/register/education/${userId}`, {
      education: this.state.body,
      photo,
      link,
    })
      .then(res => console.log(res))

    event.preventDefault();
  }

  handleAddBodyForm = () => {
    const addForm = {
      schoolType: '',
      schoolName: '',
      startDate: '',
      endDate: '',
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

    const userId = localStorage.getItem('userId')

    axios({
      method: 'post',
      url: `http://${fetchServerConfig.ip}:4000/api/photo/education/${userId}`,
      data: {
        photo,
        userId,
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
      })
  }

  handleSubmitLink = (e, index) => {
    const userId = localStorage.getItem('userId');
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
      axios.post(`http://${fetchServerConfig.ip}:4000/api/link/education/${userId}`, {
        data: this.state.link,
      })
        .then(res => console.log(res))
    }
    )
  }

  handleDeletePhoto = (e, index) => {
    const userId = localStorage.getItem('userId');
    this.setState(prevState => ({
      photo: update(
        prevState.photo, {
          $splice: [[index, 1]]
        }
      )
    }), () => {
      axios.post(`http://${fetchServerConfig.ip}:4000/api/photo/education/modify/${userId}`, {
        data: this.state.photo,
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
  }

  handleDeleteLink = (e, index) => {
    const userId = localStorage.getItem('userId');
    this.setState(prevState => ({
      link: update(
        prevState.link, {
          $splice: [[index, 1]]
        }
      )
    }), () => {
      axios.post(`http://${fetchServerConfig.ip}:4000/api/link/education/modify/${userId}`, {
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
        location="education"
      />
    );
  }
}

export default EducationContainer;
