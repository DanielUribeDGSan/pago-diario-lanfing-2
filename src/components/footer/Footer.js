import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export const Footer = () => {
    return (
        <footer className="footer__pb-footer mb-content">
            <div className="container">
                <div className="row footer__row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <div>
                            <img
                                className='footer__logo'
                                src='./assets/images/logo/logo-color.svg'
                                alt='pagodiario'
                            />
                            <p className="footer__text text-justify fw-200">Somos una empresa de servicios financieros 100% mexicana.</p>
                            <p className="footer__text text-justify fw-200">Llevamos más de media década ofreciendo servicios financieros.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-down" data-aos-duration="1100" data-aos-once="true">
                        <div className="w-100 footer__pl10 footer__pl-md footer__pt-sm">
                            <a className="footer__link" href="https://goo.gl/maps/3YSE9ru4rhTxiWWZ8" target="_blank"><FontAwesomeIcon className="mr-3 footer__icon" icon={faMapMarkerAlt} />
                                <span className="footer__text-icon text-justify fw-200">Montes Urales 430 Lomas Virreyes</span></a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__link" href="tel:5575868002"><FontAwesomeIcon className="mr-3 footer__icon" icon={faPhoneAlt} />
                                <span className="footer__text-icon text-justify fw-200">(55) 7586 8002</span>
                            </a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__link" href="https://wa.me/525536782904" target="_blank"><FontAwesomeIcon className="mr-3 footer__icon" icon={['fab', 'whatsapp']} />
                                <span className="footer__text-icon text-justify fw-200">(55) 3678 2904</span>
                            </a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__link" href="mailto:contacto@tupagodiario.com"><FontAwesomeIcon className="mr-3 footer__icon" icon={faEnvelope} />
                                <span className="footer__text-icon text-justify fw-200">contacto@tupagodiario.com</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1300" data-aos-once="true">
                        <div className="w-100 footer__pt-sm">
                            <a className="footer__text-link fw-200">Conoce PagoDiario</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Club PagoDiario</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Blog</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Podcast</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center" data-aos="fade-down" data-aos-duration="1400" data-aos-once="true">
                        <div className="w-100 footer__pl-md footer__pt-sm">
                            <p className="footer__title text-justify fw-200">Siguenos </p>
                            <a className="footer__link" href=""><FontAwesomeIcon className="mr-3 footer__icon" icon={['fab', 'linkedin']} />
                            </a>
                            <a className="footer__link" href=""><FontAwesomeIcon className="mr-3 footer__icon" icon={['fab', 'instagram']} />
                            </a>
                            <a className="footer__link" href=""><FontAwesomeIcon className="mr-3 footer__icon" icon={['fab', 'facebook']} />
                            </a>
                            <div className="footer__espacio-text"></div>
                            <p className="footer__title text-justify fw-200">Descarga la app </p>
                            <div className="position-relative">
                                <a className="footer__link-shop-1" target="_blank"></a>
                                <a className="footer__link-shop-2" target="_blank"></a>
                                <img className="footer__img-shop" src="./assets/images/footer/app.png" alt="tiendas movil" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
