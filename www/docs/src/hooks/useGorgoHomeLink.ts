import { useEffect, useState } from "react";

export default function useGorgoHomeLink() {
  const [gorgoHomeLink, setGorgoHomeLink] = useState("")

  useEffect(() => {
    const parts = window.location.hostname.split('.') || []
    let baseDomain
    if (parts.length <= 2)
      baseDomain = 'com' // localhost or similar
    else
      baseDomain = parts.slice(-1).join('.')

    setGorgoHomeLink(`https://gorgojs.${baseDomain}`)
  }, [])

  return gorgoHomeLink
}
