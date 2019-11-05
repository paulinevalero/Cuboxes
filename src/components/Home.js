import React, { Component } from 'react'
import Layout from './Layout'
import ImageSection1 from '../assets/image-section1.svg'

class Home extends Component {
  state = {
    isModalOpen: false
  }

  render() {
    return (
      <Layout>
        <div>
          <header className="container">
            <div>
              <h1>Todas tus Suscripciones en una sola Caja</h1>
              <p>Administra todas tus suscripciones desde un solo lugar y paga solo un envío por todas.</p>
              <button className="header-button-outline">Quiero saber más</button>
            </div>
            <div>
              <img src={ImageSection1} alt="ImageSection1"/>
            </div>
          </header>

          <section></section>
          <section></section>
        </div>
      </Layout>
    )
  }s
}

export default Home