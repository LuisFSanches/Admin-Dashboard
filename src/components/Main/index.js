import React from 'react'

import hello from '../../assets/hello.png'
import './style.css'

import Charts from '../Charts'

export default function Main() {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello"/>
          <div className="main__greeting">
            <h1>Olá Luis</h1>
            <p>Bem vindo ao seu painel</p>
          </div>
        </div>
        <div className="main__cards">

          <div className="card">
            <i className="fa fa-file-alt fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de pedidos</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-coins fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$ 467</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de produtos</p>
              <span className="font-bold text-title">670</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-bars fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">40</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Ubatubam São Paulo, BR</p>
              </div>
              <i className="fa fa-dollar-sign"></i>
            </div>
            <Charts/>

          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Ubatubam São Paulo, BR</p>
              </div>
              <i className="fa fa-chart-area"></i>
            </div>
            <div className="charts__right__cards">
              <div className="card1">
                <h1>Lucro</h1>
                <p>R$2500</p>
              </div>

              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$250</p>
              </div>

              <div className="card3">
                <h1>Custos de Hospedagem</h1>
                <p>R$150</p>
              </div>

              <div className="card4">
                <h1>Banco de Dados</h1>
                <p>R$190</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}