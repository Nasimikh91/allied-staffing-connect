
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Use lazy loading for non-critical routes to improve initial load time
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

// Create a fallback component for lazy-loaded routes
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-center">
      <p className="text-lg text-gray-600">Loading...</p>
    </div>
  </div>
);

// Error boundary for route errors
const RouteErrorHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Attempt to recover from route errors by navigating home
    const handleRouteError = () => {
      console.error("Route error detected, redirecting to home");
      navigate("/", { replace: true });
    };
    
    window.addEventListener("routeerror", handleRouteError);
    return () => window.removeEventListener("routeerror", handleRouteError);
  }, [navigate]);
  
  return null;
};

// Configure the query client with retry logic for network issues
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry failed requests up to 3 times
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteErrorHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPolicy />
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<LoadingFallback />}>
              <TermsOfService />
            </Suspense>
          } />
          <Route path="/cookies" element={
            <Suspense fallback={<LoadingFallback />}>
              <CookiePolicy />
            </Suspense>
          } />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
