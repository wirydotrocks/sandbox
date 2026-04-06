"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export function CardGrower(){
  const minHeight = 60
  const [ size, setSize ] = useState(minHeight)

  return(
    <Card 
      className="mx-auto w-full max-w-sm border-2 min-h-30"
    >
      <CardHeader>  
        <CardTitle>This Card Grows </CardTitle>
        <CardDescription>
          Click the buttons to change card size!
        </CardDescription>

        <CardAction>
          <div className="italic">4/6/26</div>
        </CardAction>

      </CardHeader>

      <CardContent>
        I learned how to edit the parent of a button, and I used an array destructor.
        Also, I learned how to use inline css to be changed by onClicks.
      </CardContent>

      <CardFooter
        style={{
          height: size,
        }}
        className="flex gap-4"
      > 
        <Button 
          style={{
            height: size - 30,
          }}
          onClick={() => setSize((prev) => prev+10)}
          className="flex-1"
        >
          beeg
        </Button>

        <Button 
           style={{
            height: size - 30,
          }}
         onClick={() => setSize((prev) => Math.max(minHeight, prev-10))}
          className="flex-1"
        >
          smal 
        </Button>
 
      </CardFooter>


    </Card>




  )

}
