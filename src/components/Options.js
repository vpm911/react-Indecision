import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';

const Options = (props) => {
    return (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>  
          <button 
            onClick={props.handleDeleteOptions}
            className="button--link"
            >Remove All</button>
        </div>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
          props.options.map((option,index) => (
            <Option
              key={option}
              optionText={option}
              count={index+1}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
  };
  
  export default Options;