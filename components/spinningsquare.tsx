"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"


export function SpinningSquare(){
  const [key, setKey] = useState(0)

  return(
    <Card
      className="mx-auto w-full max-w-sm border-2 min-h-30"
    >
      <CardHeader>  
        <CardTitle>Spinning Square Animation</CardTitle>
        <CardDescription>
          Framer Motion Square 
        </CardDescription>

        <CardAction>
          <div className="italic">4/7/26</div>
        </CardAction>

      </CardHeader>

      <CardContent
          className="flex flex-col items-center"
      >
        
        <p
          className="pb-4" 
        >
        Installed Framer Motion, or now called Motion for this project!
        I intend on trying to make a P3R button hover effect.
        This is just the first animation they show attached to this card.
        It doesn't account for edge case when its mid spin... :(
        </p>

        <motion.div
          key={key}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "purple",
            borderRadius: 5,
          }}
          animate={{ rotate: key > 0 ? 360 : 0 }}
          transition={{ duration: 2 }}
        />


      </CardContent>

      <CardFooter
        className="flex gap-4"
      >
       
        <Button
          className="flex-1"
          onClick={() => setKey(k=>k+1)}

        >
        Click me
        </Button>
 
      </CardFooter>


    </Card>




  )

}

