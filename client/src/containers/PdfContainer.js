import React, { Component } from 'react';
import axios from 'axios';
import Pdf from '../components/organisms/Pdf';

class PdfContainer extends Component {

  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    const { userId } = this.props.match.params;
    
    axios.get(`http://localhost:4000/api/register/${userId}`)
    .then((res) => {
      this.setState({
        data: res.data[0],
        loading: false,
      })
    })    
  }

  componentWillMount() {
    const { userId } = this.props.match.params;
    const iframe = `<iframe width='100%' height='100%' src='http://localhost:9000/api/render?url=http://localhost:3000/pdf/${userId}'></iframe>`
    const x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
  }

  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <div>
        <Pdf data={this.state.data} />
      </div>
    )
  }
}

export default PdfContainer;
