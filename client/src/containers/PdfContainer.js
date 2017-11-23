import React, { Component } from 'react';
import axios from 'axios';
// import path from 'path';
// import nightmare from 'nightmare';
import Pdf from '../components/organisms/Pdf';
import { fetchServerConfig, pdfServerConfig } from '../config';

class PdfContainer extends Component {

  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    // const { userId } = this.props.match.params;
    const email = localStorage.getItem('email');
    
    axios.get(`http://${fetchServerConfig.ip}:4000/api/register/${email}`)
    .then((res) => {
      this.setState({
        data: res.data[0],
        loading: false,
      })
    })    
  }

  componentWillMount() {
    
  }

  render() {
    const email = localStorage.getItem('email');
    return this.state.loading === true ? <h1>Loading</h1> : (
      <div>
        <Pdf data={this.state.data} />
      </div>
    )
  }
}

export default PdfContainer;
