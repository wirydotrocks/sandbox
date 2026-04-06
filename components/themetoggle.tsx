"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Card, Button } from "@/components/ui/button"



export function ModeToggle(){
  const { setTheme, resolvedTheme } = useTheme()

  return(
    <Button onClick={() => setTheme(resolvedTheme === "dark" ? "light":"dark")}>
      deez
    </Button>




  )

}
