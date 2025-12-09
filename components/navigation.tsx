"use client"

import { useState } from "react"
import Image from "next/image"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "sociedad", label: "La Sociedad" },
    { id: "lectura", label: "Club de Lectura" },
    { id: "cinefoum", label: "Cinefórum" },
    { id: "talleres", label: "Talleres" },
    { id: "seminarios", label: "Seminarios" },
    { id: "coachs", label: "Coachs" },
    { id: "directiva", label: "Directiva" },
  ]

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={() => handleSectionClick("inicio")} className="flex items-center gap-2">
              <div className="w-12 h-12 md:w-14 md:h-14 relative flex-shrink-0">
                <Image
                  src="/images/logo-20sodu.png"
                  alt="SODU Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-[#030a50] font-bold text-lg">SODU</h1>
                <p className="text-xs text-gray-500">Oratoria y Debate</p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-3 py-2 text-sm font-medium rounded transition-all ${
                  activeSection === section.id ? "text-white bg-[#030a50]" : "text-[#030a50] hover:bg-gray-100"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#030a50]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded transition-all ${
                    activeSection === section.id ? "text-white bg-[#030a50]" : "text-[#030a50] hover:bg-gray-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
