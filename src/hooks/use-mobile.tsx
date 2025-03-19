
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Function to update state based on window size
    const updateSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Run once immediately to set initial state
    updateSize()
    
    // Add event listener using the more modern approach
    window.addEventListener("resize", updateSize)
    
    // Check if device is likely a mobile device via user agent
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    if (/android|webos|iphone|ipad|ipod|blackberry|IEMobile|Opera Mini/i.test(userAgent)) {
      setIsMobile(true)
    }
    
    // Clean up
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return isMobile
}
