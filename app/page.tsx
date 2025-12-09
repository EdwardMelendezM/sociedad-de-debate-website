"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import SociedadSection from "@/components/sections/sociedad-section"
import ActividadesSection from "@/components/sections/actividades-section"
import ClubLecturaSection from "@/components/sections/club-lectura-section"
import Footer from "@/components/footer"

export default function Home() {
    const [activeSection, setActiveSection] = useState("inicio")

    const renderSection = () => {
        switch (activeSection) {
            case "inicio":
                return <Hero onNavigate={setActiveSection} />
            case "sociedad":
                return <SociedadSection />
            case "lectura":
                return <ClubLecturaSection />
            case "actividades":
                return <ActividadesSection />
            default:
                return <Hero onNavigate={setActiveSection} />
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
            {renderSection()}
            <Footer />
        </div>
    )
}