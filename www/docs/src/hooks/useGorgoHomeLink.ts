import { useEffect, useState } from "react";
import { getGorgoHomeLink } from "@/lib/utils";

export default function useGorgoHomeLink() {
  const [gorgoHomeLink, setGorgoHomeLink] = useState("")

  useEffect(() => {
    setGorgoHomeLink(getGorgoHomeLink(window.location.hostname))
  }, [])

  return gorgoHomeLink
}
