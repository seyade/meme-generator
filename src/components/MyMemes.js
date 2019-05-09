import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MyMemes extends Component {
  render() {
    return (
      <div className="my-meme">
        {this.props.myMemes.map((meme, index) => {
          return (
            <img
              key={index}
              src={meme.data.url}
              alt="my meem"
              className="my-meme__image"
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myMemes: state.myMemes,
});

export default connect(mapStateToProps)(MyMemes);
