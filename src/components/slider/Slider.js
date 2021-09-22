import React from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Slider = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img className="slider__icon" src="./assets/images/slider/left.svg" alt="left icon" /> : <img className="slider__icon" src="./assets/images/slider/right.svg" alt="right icon" />;
        return (
            <button className="slider__btn" onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    const itemP = [20, 20, 20, 20];

    return (
        <div className="slider__content" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true">
            <Carousel breakPoints={breakPoints} pagination={false} renderArrow={myArrow} itemPadding={itemP}>
                <div className="card slider__card">
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                            <p className="slider__title fw-500 text-center">Nombre beneficio</p>
                            <p><small className="slider__text fw-200">
                                Todo lo que tienes que saber para generar, manejar e incrementar tu riqueza.
                            </small></p>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="buttons__btn-primary-light slider__espacio-btn">Call to action</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card slider__card">
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                            <p className="slider__title fw-500 text-center">Nombre beneficio</p>
                            <p><small className="slider__text fw-200">
                                Todo lo que tienes que saber para generar, manejar e incrementar tu riqueza.
                            </small></p>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="buttons__btn-primary-light slider__espacio-btn">Call to action</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card slider__card">
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                            <p className="slider__title fw-500 text-center">Nombre beneficio</p>
                            <p><small className="slider__text fw-200">
                                Todo lo que tienes que saber para generar, manejar e incrementar tu riqueza.
                            </small></p>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="buttons__btn-primary-light slider__espacio-btn">Call to action</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card slider__card">
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                            <p className="slider__title fw-500 text-center">Nombre beneficio</p>
                            <p><small className="slider__text fw-200">
                                Todo lo que tienes que saber para generar, manejar e incrementar tu riqueza.
                            </small></p>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="buttons__btn-primary-light slider__espacio-btn">Call to action</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}
