import React from 'react'

export const OnDemandSection = () => {

    const background = {
        backgroundImage: 'url(./assets/images/ondemand/2.png)',
    };

    return (
        <section className="ondemand__section-content pt-content pb-content mt-content mb-content" style={background}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <article >
                            <h1 className="ondemand__title-h1 text-white" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Salario on-demand</h1>
                            <p className="ondemand__text ondemand__pt-1 fw-500 text-white" data-aos="fade-right" data-aos-duration="1100" data-aos-once="true">¡Tu libertad financiera en una app! </p>
                            <p className="ondemand__text ondemand__text-w80 text-white" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">Tener PagoDiario en tu celular te permite disponer de tu nómina de forma inmediata.</p>
                            <div className="d-flex align-items-center " data-aos="fade-right" data-aos-duration="1300" data-aos-once="true">
                                <a className="buttons__bt buttons__btn-primary-light mr-3 text-white ondemand__ml-28">Conocer mas</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="card ondemand__card" data-aos="fade-left" data-aos-duration="1400" data-aos-once="true">
                            <div className="card-body">
                                <div>
                                    <img src="./assets/images/ondemand/phone.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200 ondemand__text-card">Accede a tu nómina ya trabajada desde tu celular 24/7.</p>
                                    <hr />
                                </div>
                                <div className="mt-4">
                                    <img src="./assets/images/ondemand/retirar.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200 ondemand__text-card">Tus retiros no son créditos ni préstamos, no generan intereses ni recargos.</p>
                                    <hr />
                                </div>
                                <div className="mt-4">
                                    <img src="./assets/images/ondemand/etiqueta-del-precio.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200 ondemand__text-card">Paga una comisión fija sin preocuparte de la cantidad que retires.</p>
                                    <hr />
                                </div>
                                <div className="mt-4">
                                    <img src="./assets/images/ondemand/archivo.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200 ondemand__text-card">Disfruta PagoDiario sin llenar ninguna solicitud. Solo necesitas descargar la app y registrarte.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
