import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

export class MemeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    };
  }

  postMeme() {
    const { text0, text1 } = this.props;
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1,
    };

    this.props.createMeme(memeObj);
  }

  render() {
    return (
      <div
        className="meme-item"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}
      >
        <img
          className={`meme-item__image ${
            this.state.hovered
              ? 'meme-item__image--dark'
              : 'meme-item__image--light'
          }`}
          src={this.props.meme.url}
          alt={this.props.meme.name}
        />
        <p
          className={`meme-item__text ${
            this.state.hovered
              ? 'meme-item__text--show'
              : 'meme-item__text--hide'
          }`}
        >
          {this.props.meme.name}
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { createMeme }
)(MemeItem);
