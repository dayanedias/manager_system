import React from 'react';
import { MainContextConsumer } from '../../context';

export default () => {

  return (
    <MainContextConsumer>
      {context => {
        return (
          <button onClick={() => {console.log("CLIQUIE",context) }}>
            CLICK
          </button>
        )
      }}
    </MainContextConsumer>
  )
}