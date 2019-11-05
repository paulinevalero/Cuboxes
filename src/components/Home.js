import React, { Component } from 'react'
import Layout from './Layout'
import ImageHeader from '../assets/image-header.svg'
import ImageSection3 from '../assets/image-section3.svg'
import Billing from '../assets/icon-billing.svg'
import Shipping from '../assets/icon-shipping.svg'
import Time from '../assets/icon-time.svg'
import Form from '../components/Form'

class Home extends Component {
  state = {
    isModalOpen: false,
    isActive: false
  }
  displayForm = () => {
    this.setState({isModalOpen: true})
  }
  closeForm = () => {
    this.setState({isModalOpen: false})
  }
  isActive = () =>{
    this.setState({isActive: true})
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({isOpen: false})
  }

  render() {
    const {isModalOpen} = this.state
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

          <section className="container section2">
            <div className="section2-article">
              <article>
                <img src={Time} alt="time-logo"/>
                <p><strong>Ahorra Tiempo</strong> al gestionar todas tus suscripciones en un solo lugar. Deja que el menu simplificado de Cuboxes haga el trabajo duro por ti.</p>
              </article>
              <article>
                <img src={Billing} alt="billing-logo"/>
                <p><strong>Un solo</strong> cargo al pagar en Cuboxes todas tus suscripciones se aplican en un solo cargo, no mas suscribciones duplicadas ni olvidadas.</p>
              </article>
              <article>
                <img src={Shipping} alt="shipping-logo"/>
                <p><strong>Paga un</strong> solo envío al hacer tus suscripciones con Cuboxes, puedes hacer que todas te lleguen al mismo tiempo, evitando pagar envíos adicionales.</p>
              </article>
            </div>
            <div className="section2-button">
              <button onClick={this.displayForm} className="section2-button-filled">Quiero aplicar para ser un Cuboxer</button>
              <Form isModalOpen={isModalOpen} closeForm={this.closeForm} onSubmit={this.onSubmit}/>
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