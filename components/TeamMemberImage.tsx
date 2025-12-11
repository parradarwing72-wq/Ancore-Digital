'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TeamMemberImageProps {
  src: string
  alt: string
  className?: string
}

export default function TeamMemberImage({ src, alt, className }: TeamMemberImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&size=400&background=1a1a1a&color=ffffff`

  return (
    <Image
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      fill
      className={className}
      unoptimized
      onError={() => {
        if (!hasError) {
          setHasError(true)
          setImgSrc(fallbackSrc)
        }
      }}
    />
  )
}

