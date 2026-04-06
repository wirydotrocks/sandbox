'use client'


import { Template } from '@/components/template';
import { ModeToggle } from '@/components/themetoggle';
import { CardGrower } from '@/components/cardgrower';


export default function Home() {


  return (
    <div 
      className="min-h-svh items-center justify-center font-mono grid grid-cols-4 grid-rows-4 gap-4 items-start" 
    >

      <div className="mb-4"><Template/></div>
      <div className="mb-4"><ModeToggle/></div>
      <div className="mb-4"><CardGrower/></div>
      <div className="mb-4"><Template/></div>
      <div className="mb-4"><Template/></div>
      <div className="mb-4"><Template/></div>
      <ModeToggle/>
      <CardGrower/>
      

    </div>
  )
}
