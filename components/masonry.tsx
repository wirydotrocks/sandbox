"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export function Masonry(){

  return(
    <Card 
      className="mx-auto w-full max-w-sm border-2 min-h-30"
    >
      <CardHeader>  
        <CardTitle>Masonry</CardTitle>
        <CardDescription>
          Masonry stacking
        </CardDescription>

        <CardAction>
          <div className="italic">4/7/26</div>
        </CardAction>

      </CardHeader>

      <CardContent>
        Added Masonry to this site. It was a Google away...
      </CardContent>

      <CardFooter>
        <a 
        className="hover:underline italic"
        href="https://flowbite.com/docs/components/gallery/#masonry-grid"
        target="_blank"
        rel="noopener noreferrer"
        >Link to information...</a>
      </CardFooter>



    </Card>




  )

}

