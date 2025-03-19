
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Function to update state based on window size
    const updateSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initialize state immediately
    updateSize()
    
    // Check if device is likely a mobile device via user agent before relying on window size
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|IEMobile|Opera Mini/i
    
    if (mobileRegex.test(userAgent)) {
      setIsMobile(true)
    }
    
    // Add debounced event listener for resize events
    let resizeTimeout: number | null = null
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout)
      }
      
      resizeTimeout = window.setTimeout(() => {
        updateSize()
      }, 100)
    }
    
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout)
      }
    }
  }, [])

  return isMobile
}
