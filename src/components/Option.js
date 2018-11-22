import React, { Component } from 'react';

const Option = (props) => {
    return (
      <div className="option">
        <p>{props.count}. {props.optionText}</p>
        <button
          className="button--link"
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          Remove
        </button>
      </div>
    );
  };

export default Option;
