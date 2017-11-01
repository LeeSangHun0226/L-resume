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
    const userId = localStorage.getItem('userId');
    
    axios.get(`http://${fetchServerConfig.ip}:4000/api/register/${userId}`)
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
    const userId = localStorage.getItem('userId');
    return this.state.loading === true ? <h1>Loading</h1> : (
      <div>
        <button onClick={() => {
          window.print();
        }}
        >open pdf</button>
        <Pdf data={this.state.data} />
      </div>
    )
  }
}

export default PdfContainer;
