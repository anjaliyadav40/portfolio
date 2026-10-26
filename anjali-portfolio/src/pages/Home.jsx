import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import CodingProfiles from '../sections/CodingProfiles'
import Experience from '../sections/Experience'
import Certificates from '../sections/Certificates'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'
export default function Home() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 50)
    return () => clearTimeout(t)
  }, [hash])
  return (<><Hero /><Marquee /><About /><Skills /><Projects /><CodingProfiles /><Experience /><Certificates /><Resume /><Contact /></>)
}
