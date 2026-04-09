"use client"
import { useState } from "react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"
import { playSoundFile } from "@/lib/audio"

function MenuButton({ 
  label, 
  className = "", 
  textClassName = "", 
  pinkClassName = "", 
  whiteClassName = "", 
  size = 1,
  blueHue = "",
}) {

  const [hovered, setHovered] = useState(false)

  const playSound = () => {
    playSoundFile('/sounds/deck_ui_navigation.wav')
  }

  const pinkVariants = {
    rest: { 
      opacity: 0, 
      scale: 1.8,
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
    rest: { 
      opacity: 0, 
      transition: 
        { duration: 0, 
          delay: 0,
      }},
    hover: 
      { 
        scale: 1,
        opacity: 1, 
        transition: { 
          duration: 0, 
        }},
  }

  const textVariants = {
    rest: { 
      color: `${blueHue}`, 
      mixBlendMode: "normal",
      scale: size,
      transition: {
        color: { duration: 0 },
        scale: { duration: .1, ease: "easeOut" }
      },
    },
    hover: { 
      color: "#FF0003", 
      mixBlendMode: "multiply", 
      scale: 1.3,
      transition: {
        color: { duration: 0 },
        scale: { duration: .22, ease: [.34, 3, .64, 1] }
      },
    },
  }


  return (
    <div className={`absolute ${className}`} 
    >
      <motion.span

        style={{ scale: size }}
        variants={pinkVariants}

        animate={hovered ? "hover" : "rest"}

        className={`pointer-events-none absolute z-10 bg-[#FF92ED]
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
        onHoverStart={() => { setHovered(true); playSound() }}
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
          <span className="absolute inset-0 -inset-x-6 bg-gradient-to-t from-[#0B2DC5] via-[#3BAAFF]"/>
           
          <MenuButton label="SKILL" 
             className="w-full h-full top-0"
             size={1}
             textClassName="translate-x-13 translate-y-12 -rotate-20"
             pinkClassName="-translate-y-10 -rotate-20"
             whiteClassName="-translate-y-10 -rotate-24"
             blueHue={`#69F4FF`}
          />

          <MenuButton label="EQUIP" 
             className="w-full h-full top-14"
             size={.8}
             textClassName="translate-x-10 translate-y-16 -rotate-16"
             pinkClassName="-translate-y-7 -rotate-22"
             whiteClassName="-translate-y-7 -rotate-23"
             blueHue={`#66E7FD`}
          />
          
          <MenuButton label="ITEM" 
             className="w-full h-full top-14"
             size={.7}
             textClassName="translate-x-20 translate-y-6 -rotate-10"
             pinkClassName="-translate-y-17 -rotate-14"
             whiteClassName="-translate-y-17 -rotate-17"
             blueHue={`#0ACCFF`}
          />

          <MenuButton label="PERSONA" 
             className="w-full h-full top-14"
             size={.8}
             textClassName="translate-x-1 translate-y-26 -rotate-16"
             pinkClassName="translate-y-3 -rotate-22"
             whiteClassName="translate-y-3 -rotate-23"
             blueHue={`#66E7FD`}
          />
  

        </div>

      </CardContent>

      <CardFooter className="flex gap-4"> 
        This was very difficult to make.
        Scaling the website will break it a little (so diff resolutions will make it look off)
        and I also havent added hierarchy.
        Obviously this sort of UI is best with a controller
        so its kinda hard to hover over ITEM.
        However, I did end up doing more than what I said for Spinning Square.
      </CardFooter>

    </Card>
  )
}
