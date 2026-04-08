"use client"
import { useState } from "react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"

const pinkVariants = {
  rest: { 
    opacity: 0, 
    scale: .8,
    transition: {
      opacity: { duration: 0, delay: 0 },
      scale: { duration: 2, ease: "easeOut" }
    }
  },
  hover: { 
    opacity: 1, 
    scale: 1.1,
    transition: {
      opacity: { duration: 0, delay: 0 },
      scale: { duration: .15, ease: "backOut" }
    }
  },
}

const whiteVariants = {
  rest: { opacity: 0, transition: { duration: 0, delay: 0 }},
  hover: { opacity: 1, transition: { duration: 0 }},
}

const textVariants = {
  rest: { 
    color: "#80CAFF", 
    mixBlendMode: "normal",
    transition: {
      color: { duration: 0 },
      scale: { duration: 2, ease: "easeOut" }
    },
  },
  hover: { 
    color: "#FF0019", 
    mixBlendMode: "multiply", 
    scale: 1.3,
    transition: {
      color: { duration: 0 },
      scale: { duration: .22, ease: [.34, 3, .64, 1] }
    },
  },
}

function MenuButton({ 
  label, 
  className = "", 
  textClassName = "", 
  pinkClassName = "", 
  whiteClassName = "", 
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className={`absolute ${className}`}>
      <motion.span


        variants={pinkVariants}

        animate={hovered ? "hover" : "rest"}

        className={`pointer-events-none absolute z-10 bg-[#ff93e2]
                  [clip-path:polygon(100%_44%,4%_44%,88%_67%)]
                  -rotate-20 ${pinkClassName} inset-0`}
      />
      <motion.span

        variants={whiteVariants}

        animate={hovered ? "hover" : "rest"}

        className={`pointer-events-none absolute z-20 bg-[#ffffff]
                  [clip-path:polygon(100%_44%,4%_44%,88%_67%)]
                  -rotate-24 ${whiteClassName} inset-0`}
      />
      <motion.span

        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}

        animate={hovered ? "hover" : "rest"}
        variants={textVariants}

        className={`flex items-center justify-center z-30 absolute
        italic font-bold font-[P3R] tracking-[-.1em]
         -rotate-20 ${textClassName}`}
      >
        {label}
      </motion.span>
    </div>
  )
}

export function PersonaButton() {
  return (
    <Card className="mx-auto w-full max-w-sm border-2 min-h-30">

      <CardHeader>  
        <CardTitle>Persona 3 Reload Select</CardTitle>
        <CardDescription>
          Made with Motion! Hover it to see the effects.
        </CardDescription>

        <CardAction>
          <div className="italic">4/8/26</div>
        </CardAction>
        
      </CardHeader>

      <CardContent className="flex items-center justify-center">

        <div className="relative h-60 w-full"
              style={{ background: 'multiply' }}
        >
          <span className="absolute inset-0 -inset-x-6 bg-gradient-to-t from-[#2445ff] via-[#4275ff]"/>
           
          <MenuButton label="SKILL" 
             className="w-full h-full top-0"
             textClassName="translate-x-13 translate-y-22 text-5xl"
             pinkClassName=""
             whiteClassName=""
          />

          <MenuButton label="ITEM" 
             className="w-full h-full top-14"
             textClassName="translate-x-13 translate-y-22 text-2xl"
             pinkClassName=""
             whiteClassName=""
          />

        </div>

      </CardContent>

      <CardFooter className="flex gap-4" /> 

    </Card>
  )
}
