import Image from 'next/image'
// 'use-client'
"use client";
import { Testimony } from '../../../components/Testimony'
import { HeroCarousel } from '../../../components/HeroCarousel'
import {Trending} from '../../../components/Trending'
export default function About() {

  return (
    <>

      <HeroCarousel />
      <Trending/>
      <Testimony />

    </>
  )
}
