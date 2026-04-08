"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"


export function PersonaButton(){

   const pinkVariants = {
      rest: { opacity: 0, transition: { duration: 0, delay: 0 }},
      hover: { opacity: 1, transition: { delay: .04 }},
    }

   const whiteVariants = {
      rest: { opacity: 0, transition: { duration: 0, delay: 0 }},
      hover: { opacity: 1},
    }

   const textVariants = {
     rest: { color: "#80CAFF", mixBlendMode: "normal"},
     hover: { color: "red", mixBlendMode: "multiply"},
   }


  return(





    <Card 
      className="mx-auto w-full max-w-sm border-2 min-h-30"
    >
      <CardHeader>  
        <CardTitle>Persona 3 Reload Select</CardTitle>
        <CardDescription>
          Made with Motion! Hover it to see the effects.
        </CardDescription>

        <CardAction>
          <div className="italic">4/7/26</div>
        </CardAction>

      </CardHeader>

      <CardContent
        className="flex items-center justify-center"
      >


        <motion.button

          initial="rest"
          whileHover="hover"
          
          className="relative h-60 w-full"

        >


          <div
            className="absolute inset-0 -rotate-20"
          >

          <span
             className="absolute inset-0 -inset-x-6 z-0 rotate-20
                        bg-gradient-to-t from-[#2445ff] via-[#4275ff]"
          />


          <motion.span

            variants={pinkVariants}
            transition={{ duration: 0}}

            className="pointer-events-none absolute z-10 inset-0 bg-[#ff93e2]
                      [clip-path:polygon(100%_44%,4%_44%,88%_67%)]
                      rotate-2.4"

          />

          <motion.span

            variants={whiteVariants}
            transition={{ duration: 0}}

            className="pointer-events-none absolute z-20 inset-0 bg-[#ffffff]
                      [clip-path:polygon(100%_44%,4%_44%,88%_67%)]
                      -rotate-4"

          />

          <motion.span

            variants={textVariants}
            transition={{ duration: .2 }}

            className="flex items-center justify-center z-30 absolute inset-0 
            italic font-bold font-[P3R] text-6xl tracking-[-.1em]"
          >
            SKILL
          </motion.span>

          </div>
          
        </motion.button>

      </CardContent>

      <CardFooter
        className="flex gap-4"
      > 
 
      </CardFooter>


    </Card>




  )

}

