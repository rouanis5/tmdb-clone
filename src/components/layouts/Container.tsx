import React from 'react'

type initContainerType<E extends React.ElementType> = {
  children: React.ReactNode
  className?: string
  as?: E
}

type containerType<E extends React.ElementType> = initContainerType<E> &
  Omit<React.ComponentProps<E>, keyof initContainerType<E>>

function Container<E extends React.ElementType>({
  as,
  children,
  className,
  ...rest
}: containerType<E>) {
  const Component = as || 'div'
  return (
    <Component
      className={`container mx-auto max-w-7xl px-5 md:px-10 ${className || ''}`}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Container
