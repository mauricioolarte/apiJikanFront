import './App.css';
import React, { useState } from 'react'

import Datacontext, { data } from '../src/utils/Datacontext'

import { Carousel } from '../src/Components/Carrousel'
import { Carousel2 } from '../src/Components/Carousel2'

import { Header } from '../src/Components/Header'
import { SearchBar } from '../src/Components/searchBar'
import { Footer } from '../src/Components/Footer'



function App() {

  // let data = {
  //   isData: false,
  //   values: [{
  //     url: "https://cdn.myanimelist.net/images/anime/11/78311.jpg?s=f844b0a0eb565be6f052105c320dbc60",
  //     message: "prueba",
  //     title: "pruebatitle"
  //   }]
  // }
  const [dataApp, setData] = useState(data)

  return (
    <Datacontext.Provider value={{ dataApp }}>
      <div className="App">
        <Header />
        <div>
          <SearchBar getData={setData} datos={dataApp} />
        </div>
        <div>
          <Carousel showCarrusel={dataApp.isData} datos={dataApp} />
        </div>
        <div>
        <Carousel2 showCarrusel={dataApp.isData} datos={dataApp} />

        </div>
        

        <Footer />
      </div>
    </Datacontext.Provider>

  );
}

export { App };
