"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export function ModeToggle(){
  const { setTheme, resolvedTheme } = useTheme()

  return(
    <Card 
      size="sm"
      className="mx-auto w-full max-w-sm border-2"    
    >
      <CardHeader>
        <CardTitle>Theme Mode Toggle</CardTitle>
        <CardDescription>
          Click to change themes!
        </CardDescription>

        <CardAction>
          <div className="italic">4/5/26</div>
        </CardAction>

      </CardHeader>

      <CardContent>
        I was sure there was a more efficient way of writing a theme toggle, so here it is.
      </CardContent>


      <CardFooter> 
        <Button 
          onClick={() => setTheme(resolvedTheme === "dark" ? "light":"dark")}
          className="w-full"
        >
          I do things
        </Button>
      </CardFooter>
    

    </Card>




  )

}
