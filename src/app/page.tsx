"use client";
import Image from 'next/image'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Testimony } from '../components/Testimony'
import { HeroCarousel } from '../components/HeroCarousel'
import { Trending } from '../components/Trending'
export default function Home() {

  return (
    <>
      <Header />
      <HeroCarousel />
      <Trending />
      <Testimony />
      <Footer />
    </>
  )
}
