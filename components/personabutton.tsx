"use client"
import { useState } from "react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"

function MenuButton({ 
  label, 
  className = "", 
  textClassName = "", 
  pinkClassName = "", 
  whiteClassName = "", 
  size = 1,
}) {

  const [hovered, setHovered] = useState(false)

  const pinkVariants = {
    rest: { 
      opacity: 0, 
      scale: size * 1.8,
      transition: {
        opacity: { duration: 0, delay: 0 },
        scale: { duration: 2, ease: "easeOut" }
      }
    },
    hover: { 
      opacity: 1, 
      scale: size * 1.1,
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
      scale: size,
      transition: {
        color: { duration: 0 },
        scale: { duration: .1, ease: "easeOut" }
      },
    },
    hover: { 
      color: "#FF0019", 
      mixBlendMode: "multiply", 
      scale: size * 1.3,
      transition: {
        color: { duration: 0 },
        scale: { duration: .22, ease: [.34, 3, .64, 1] }
      },
    },
  }


  return (
    <div className={`absolute ${className}`} >
      <motion.span

        style={{ scale: size }}
        variants={pinkVariants}

        animate={hovered ? "hover" : "rest"}

        className={`pointer-events-none absolute z-10 bg-[#ff93e2]
                  [clip-path:polygon(100%_44%,4%_44%,88%_67%)]
                  ${pinkClassName} inset-0`}
      />
      <motion.span

        style={{ scale: size }}
        variants={whiteVariants}

        animate={hovered ? "hover" : "rest"}

        className={`pointer-events-none absolute z-20 bg-[#ffffff]
                  [clip-path:polygon(100%_44%,4%_44%,88%_67%)]
                  ${whiteClassName} inset-0`}
      />
      <motion.span

        style={{ scale: size }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}

        animate={hovered ? "hover" : "rest"}
        variants={textVariants}

        className={`flex items-center justify-center z-30 absolute
        italic font-bold font-[P3R] tracking-[-.1em]
        text-5xl ${textClassName}`}
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
             size={1}
             textClassName="translate-x-13 translate-y-22 -rotate-20"
             pinkClassName="-rotate-20"
             whiteClassName="-rotate-24"
          />

          <MenuButton label="ITEM" 
             className="w-full h-full top-14"
             size={.6}
             textClassName="translate-x-23 translate-y-16 -rotate-7"
             pinkClassName="-translate-y-15"
             whiteClassName="-translate-y-17"
          />

        </div>

      </CardContent>

      <CardFooter className="flex gap-4" /> 

    </Card>
  )
}
