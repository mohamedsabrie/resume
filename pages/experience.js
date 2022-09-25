import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Experience from '../components/Experience'

function ExperiencePage() {
  return (
    <div>
        <Header active={3} />
        <Experience />
        <Footer />
    </div>
  )
}

export default ExperiencePage