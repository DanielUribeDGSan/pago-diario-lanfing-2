import React from 'react'
import { Slider } from '../../components/slider/Slider'

export const BenefitsSection = () => {
    return (
        <section className="benefits__section-content pt-content pb-content mt-content mb-content">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <article>
                            <h1 className="benefits__title-h1 text-center fw-300" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">Explora tus beneficios</h1>
                            <p className="text-center benefits__text fw-500" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">Conoce y accede a los beneficios mensuales que<br />Club PagoDiario tiene para ti</p>
                        </article>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    )
}
