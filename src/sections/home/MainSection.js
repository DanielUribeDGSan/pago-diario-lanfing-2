import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainSection = () => {
    return (
        <section className="main-section__section-content pt-content pb-content mt-content mb-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div>
                            <h1 className="main-section__title-h1 text-center">PagoDiario</h1>
                            <p className="text-center main-section__text">Accede a tu salario ya trabajado en<br /> cualquier momento y lugar</p>
                            <a className="buttons__bt buttons__btn-primary mr-3 main-section__button"> <FontAwesomeIcon className="mr-3 main-section__icon" icon={['fab', 'apple']} /> APP STORE</a>
                            <a className="buttons__bt buttons__btn-primary main-section__button"> <FontAwesomeIcon className="mr-3 main-section__icon" icon={['fab', 'google-play']} /> GOOGLE PLAY</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            className='card-img main-section__image'
                            src='./assets/images/home/1.png?v=123'
                            alt='pagodiario'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
