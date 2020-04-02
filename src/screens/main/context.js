import React, { useState, createContext, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

const Context = createContext();

export const MainContextProvider = (props) => {
//   const dispatch = useDispatch();

  const [teste, setTeste] = useState([]);
  

  useEffect(() => {
    console.log("CONTEXT")
  }, []);

  const values = {
    teste,
    setTeste
  };

  return (
    <Context.Provider value={values}>
      {props.children}
    </Context.Provider>
  );
};

export const MainContextConsumer = Context.Consumer;
export default MainContextProvider;