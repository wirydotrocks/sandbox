'use client'


import { Template } from '@/components/template';
import { ModeToggle } from '@/components/themetoggle';
import { CardGrower } from '@/components/cardgrower';


export default function Home() {


  return (
    <div 
      className="flex min-h-svh items-center justify-center font-mono grid grid-cols-4 grid-rows-4 gap-4" 
    >

      <Template/>
      <ModeToggle/>
      <CardGrower/>
      

    </div>
  )
}
