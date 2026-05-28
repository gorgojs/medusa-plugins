"use client"

import { useCallback, useEffect } from "react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

type ZoomImgProps = React.ImgHTMLAttributes<HTMLImageElement>

function useBodyScrollFix() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const s = document.body.style
      if (s.position === "fixed") {
        const scrollY = parseFloat(s.top || "0") * -1 || 0
        s.position = ""
        s.top = ""
        if (scrollY > 0) window.scrollTo(0, scrollY)
      }
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] })
    return () => observer.disconnect()
  }, [])
}

export function ZoomImg({ key: _key, ...props }: ZoomImgProps & { key?: React.Key }) {
  useBodyScrollFix()

  const handleZoomChange = useCallback((isZoomed: boolean) => {
    if (!isZoomed) {
      document.body.style.overflow = ""
      document.body.style.width = ""
    }
  }, [])

  return (
    <Zoom wrapElement="span" zoomMargin={0} onZoomChange={handleZoomChange}>
      <img {...props} />
    </Zoom>
  )
}
