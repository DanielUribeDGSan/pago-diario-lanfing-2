import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { BenefitsSection } from '../../sections/benefits/BenefitsSection'
import { MainSection } from '../../sections/home/MainSection'
import { OnDemandSection } from '../../sections/onDemand/OnDemandSection'


export const HomeScreen = () => {
    return (
        <div>
            <Header />
            <main>
                <MainSection />
                <OnDemandSection />
                <BenefitsSection />
            </main>
            <Footer />
        </div>
    )
}
