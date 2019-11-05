import React, { Component } from 'react'
import Layout from './Layout'
import ImageHeader from '../assets/image-header.svg'
import ImageSection3 from '../assets/image-section3.svg'

class Home extends Component {
  state = {
    isModalOpen: false
  }

  render() {
    return (
      <Layout>
        <div>
          <header className="container">
            <div className="header-text">
              <h1>Todas tus Suscripciones en una sola Caja</h1>
              <p>Administra todas tus suscripciones desde un solo lugar y paga solo un envío por todas.</p>
              <button className="header-button-outline">Quiero saber más</button>
            </div>
            <div>
              <img src={ImageHeader} alt="ImageHeader"/>
            </div>
          </header>

          <section className="container">
            <div>
              <article></article>
              <article></article>
              <article></article>
            </div>
          </section>

          <section className="container section3">
            <div>
              <img src={ImageSection3} alt="ImageSection3"/>
            </div>
            <div className="section3-text">
              <h1>Invierte tu tiempo en cosas más importantes</h1>
              <p>Cuboxes agiliza la administración de tus recurrencias, haciendote una sola factura y un solo envío para que no tengas que preocuparte por nada mas.</p>
            
              <button className="header-button-outline">Quiero ser Cuboxer</button>
              
            </div>
          </section>
        </div>
      </Layout>
    )
  }s
}

export default Home