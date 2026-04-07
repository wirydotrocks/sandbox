'use client'


import { Template } from '@/components/template';
import { ModeToggle } from '@/components/themetoggle';
import { CardGrower } from '@/components/cardgrower';
import { Masonry } from '@/components/masonry';
import { PersonaButton } from '@/components/personabutton';


export default function Home() {


  return (

    <div className="grid grid-cols2 md:grid-cols-4 gap-4 font-mono p-10">

      <div className="grid gap-2">
        <div><Template/></div>
        <div><PersonaButton/></div>
      </div>

      <div className="grid gap-2">
        <div><ModeToggle/></div>
      </div>

      <div className="grid gap-2">
        <div><CardGrower/></div>
      </div>

      <div className="grid gap-2">
        <div><Masonry/></div>
        <div><ModeToggle/></div>
        <div><CardGrower/></div>
        <div><Template/></div>
      </div>


    </div>




  )
}
