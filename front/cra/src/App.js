import React, { useState, useEffect }  from 'react';

import service from './service';
import './App.css';

function App() {
  const types = ["Posts", "Photos"]
  const [type, setType] = useState("");
  const [logo, setLogo] = useState("");
  const [items, setItems] = useState([]);
  const changeType = (type) => {
    setType("");
    setItems([]);
    let params = [];
    if(type === types[1]){
      params = ['fields=*,%20photo.data']
    }
    service.getItems(type, params).then(res => {
      const { data } = res;
      setItems(data);
      setType(type)
    });
  }


  useEffect(() => {
    service.getInfo().then(res => {
      const { data } = res;
      const { api } = data;
      const { project_logo:logoData } = api;
      setLogo(logoData.full_url)
    });
  }, []);


  return (
    <div className="App">
      <header>
        <h1>
        <img src={logo} width="30" alt="logo  " />
        {type === "" ? "SELECCIONE..." : type}
        <img src={logo} width="30" alt="logo" />
        </h1>
        <hr />
        <div>
        <button onClick={() => {changeType(types[0])}}>
          Posts
        </button>
        <button onClick={() => {changeType(types[1])}}>
          Photos
        </button>
        </div>
        <hr />
      </header>
      <div className="App-content">
        {type === "" ? "Seleccione" : ""}
        {items.length === 0 && type !== "" ? "No existen" : ""}
        {
          items.map(item => {
            switch (type) {
              case types[0]:
                return (
                  <div className="App-post" key={item.id}>
                    <h2>{item.title}</h2>
                    {item.content}
                  </div>
                );
              case types[1]:
                return (
                  <div className="App-post" key={item.id}>
                    <img src={item.photo.data.full_url}  width="50"/>
                    <h2>
                    {item.comment}
                    </h2>
                  </div>
                );
              default:
                return ("Cargando...")

            }
            if(type === types[0]) {

            }
          })
        }
      </div>
    </div>
  );
}

export default App;
