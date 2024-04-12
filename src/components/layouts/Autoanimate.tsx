'use client'
import React, { useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Autoanimate({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const [parent, enableAnimations] = useAutoAnimate()

  useEffect(() => {
    enableAnimations(true)
  }, [parent])

  return (
    <div className={className ?? ''} ref={parent}>
      {children}
    </div>
  )
}
