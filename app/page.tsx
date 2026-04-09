"use client"

import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


import { Template } from '@/components/template';
import { ModeToggle } from '@/components/themetoggle';
import { CardGrower } from '@/components/cardgrower';
import { MasonryCard } from '@/components/masonry';
import { PersonaButton } from '@/components/personabutton';
import { SpinningSquare } from '@/components/spinningsquare';
import { VolumeSlider } from '@/components/volumeslider';


export default function Home() {


  return (


    <ResponsiveMasonry
      className="font-mono p-10"
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4, 1536: 5}}
      gutterBreakPoints={{350: "12px", 750: "16px", 900: "24px"}}
    >
      <Masonry>
        <Template/>
        <ModeToggle/>
        <CardGrower/>
        <MasonryCard/>
        <PersonaButton/>
        <SpinningSquare/>
        <VolumeSlider/>
      </Masonry>
    </ResponsiveMasonry>


   





  )
}
