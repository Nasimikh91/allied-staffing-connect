
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // More reliable device detection
    function detectMobileDevice() {
      // Check if device is likely a mobile device via user agent
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      
      // More comprehensive regex for mobile detection
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i
      
      // iOS specific detection
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream
      
      // iOS detection via platform
      const isIOSByPlatform = /iPhone|iPod|iPad/.test(navigator.platform)
      
      // iOS detection using touch event checking
      const isIOSByTouch = navigator.maxTouchPoints > 1 && /iPhone|iPod|iPad/.test(navigator.userAgent)
      
      // Additional iPad detection specific for newer iPad OS
      const isNewIPad = navigator.maxTouchPoints > 1 && navigator.platform === 'MacIntel'

      // Check if screen size is mobile sized
      const isMobileSize = window.innerWidth < MOBILE_BREAKPOINT
      
      return mobileRegex.test(userAgent) || isIOS || isIOSByPlatform || isIOSByTouch || isNewIPad || isMobileSize
    }
    
    // Function to update state based on window size
    const updateSize = () => {
      const isMobileDevice = detectMobileDevice()
      setIsMobile(isMobileDevice)
    }
    
    // Initialize state immediately
    updateSize()
    
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
    window.addEventListener("orientationchange", handleResize, { passive: true })
    
    // Handle iOS scroll issues
    if (detectMobileDevice()) {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout)
      }
    }
  }, [])

  return isMobile
}
