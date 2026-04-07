"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export function PersonaButton(){

  return(
    <Card 
      className="mx-auto w-full max-w-sm border-2 min-h-30"
    >
      <CardHeader>  
        <CardTitle>Persona 3 Reload Select</CardTitle>
        <CardDescription>
          Template Card...
        </CardDescription>

        <CardAction>
          <div className="italic">4/7/26</div>
        </CardAction>

      </CardHeader>

      <CardContent>

          </CardContent>

      <CardFooter
        className="flex gap-4"
      > 
 
      </CardFooter>


    </Card>




  )

}

