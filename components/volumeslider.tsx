"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { setMasterVolume } from "@/lib/audio"


export function VolumeSlider(){ 

  const [volume, setVolume] = useState(10)

  return(
    <Card 
      className="mx-auto w-full max-w-sm border-2 min-h-30"
    >
      <CardHeader>  
        <CardTitle>Volume Slider</CardTitle>
        <CardDescription>
          Slide to adjust site-wide volume.
        </CardDescription>

        <CardAction>
          <div className="italic">4/8/26</div>
        </CardAction>

      </CardHeader>

      <CardContent>

      <p 
        className="pb-5"
      >
        NGL used LOTS Of Claude on this one. I hate backend.
        However, what I did learn from it goes as follows:</p>
        <ul
          className="overflow-y-auto max-h-25">
          <li>- getAudio() is used to wait for something to call it in browser.</li>
          <li>- setMasterVolume takes the number from 0-100 and ocnvers it to 0-1 and sends it (literally divides by 100 in the function)</li> 
          <li>- The rest converts the file to an arrayBuffer and decodes it to an audioBuffer, where the API can understand it, loads buffer, connects to gain node, and plays it. async/await is just how you handle things that take time in JS.</li>
        </ul> 



        <Slider
          value={[volume]}
          max={100}
          step={1}
          className="mx-auto w-full max-w-xs pt-10"
          onValueChange={([v]) => {
            setVolume(v)
            setMasterVolume(v)
          }}
        />



      </CardContent>



    </Card>




  )

}

