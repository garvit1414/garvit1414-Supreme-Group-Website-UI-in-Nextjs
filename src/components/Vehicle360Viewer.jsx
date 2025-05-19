'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const slides = [
  { name: 'Complete Body', frame: '/complete-body.png', icon: '/complete-body.svg', label: 'Passenger vehicles', desc: 'Evolving nonwoven innovation from interior to exterior.' },
  { name: 'Front',         frame: '/front.png',          icon: '/front.svg',          label: 'Commercial vehicles',   desc: 'Advancing nonwoven engineering for heavy-duty vehicles.' },
  { name: 'Cabin',         frame: '/cabin.png',          icon: '/Cabin.svg',          label: 'Passenger vehicles',    desc: 'Evolving nonwoven innovation from interior to exterior.' },
  { name: 'Trunk',         frame: '/trunk.png',          icon: '/trunk.svg',          label: 'Passenger vehicles',    desc: 'Evolving nonwoven innovation from interior to exterior.' },
  { name: 'Exterior',      frame: '/exterior.png',       icon: '/exterior.svg',       label: 'Passenger vehicles',    desc: 'Evolving nonwoven innovation from interior to exterior.' },
]

const flipVariants = {
  enter: dir => ({ opacity: 0, rotateY: dir > 0 ? -90 : 90, scale: 0.8 }),
  center: { opacity: 1, rotateY: 0, scale: 1 },
  exit: dir => ({ opacity: 0, rotateY: dir > 0 ? 90 : -90, scale: 0.8 }),
}

export default function Vehicle360Viewer() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(0)

  const paginate = newIdx => {
    setDir(newIdx > active ? 1 : -1)
    setActive(newIdx)
  }

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Title */}
      <div className="absolute top-8 inset-x-0 text-center z-20 pointer-events-none">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Evolving the drive with{' '}
          <span className="font-extrabold">360°</span> nonwoven solutions
        </h1>
      </div>


      <div className="absolute inset-0 flex items-center justify-center z-0" style={{ perspective: 1200 }}>
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={active}
            custom={dir}
            variants={flipVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={slides[active].frame}
              alt={slides[active].name}
              width={800}
              height={600}
              className="object-contain w-full h-full"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>


      <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none max-w-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0,   opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-3"
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wide">
              {slides[active].label}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium">
              {slides[active].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

  
      <div className="absolute bottom-6 right-8 flex justify-end items-center space-x-10 z-20 pointer-events-auto">
        {slides.map((s, i) => (
          <button
            key={s.name}
            onMouseEnter={() => paginate(i)}
            className="flex flex-col items-center gap-2 focus:outline-none"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${i === active ? 'opacity-100' : 'opacity-30'}`}>
              <img src={s.icon} alt={s.name} className="object-contain w-full h-full" />
            </div>
            <span className={`text-sm sm:text-base font-semibold ${i === active ? 'text-white' : 'text-gray-500'}`}>
              {s.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
