import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

import '../styles/index.css';

import MemeItem from './MemeItem';
import MyMemes from '../components/MyMemes';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memeLimit: 10,

      //imgflip api naming convention, for some reason
      text0: '',
      text1: '',
    };
  }

  render() {
    return (
      <div>
        <h1>
          <u>Welcome to the Meme Generator!</u>
        </h1>

        <MyMemes />

        <h4>
          <i>Write some text</i>
        </h4>

        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>
            <FormControl
              type="text"
              onChange={event => this.setState({ text0: event.target.value })}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Bottom</FormLabel>
            <FormControl
              type="text"
              onChange={event => this.setState({ text1: event.target.value })}
            />
          </FormGroup>
        </Form>

        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
              key={index}
            />
          );
        })}

        <button
          className="meme-button"
          onClick={() =>
            this.setState({ memeLimit: this.state.memeLimit + 10 })
          }
        >
          Load 10 more memes...
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
