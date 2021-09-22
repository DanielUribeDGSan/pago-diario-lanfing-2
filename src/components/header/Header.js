import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header__header-responsive-padding header__header-height-1">
            <div className="header__header-bottom header__sticky-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="logo">
                                <a href="index.html">
                                    <img
                                        src='./assets/images/logo/logo-color.svg'
                                        className='card-img'
                                        alt='logo pagodiario'
                                    /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block d-flex justify-content-center">
                            {/*Ul Li */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            {/* Mobile menu */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
