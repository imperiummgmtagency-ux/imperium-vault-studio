import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Lazy-load all secondary routes
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const OnlyFansManagement = lazy(() => import("./pages/OnlyFansManagement.tsx"));
const FanslyManagement = lazy(() => import("./pages/FanslyManagement.tsx"));
const FanvueManagement = lazy(() => import("./pages/FanvueManagement.tsx"));
const InstagramGrowthManagement = lazy(() => import("./pages/InstagramGrowthManagement.tsx"));
const TikTokGrowthManagement = lazy(() => import("./pages/TikTokGrowthManagement.tsx"));
const XTwitterManagement = lazy(() => import("./pages/XTwitterManagement.tsx"));
const RedditManagement = lazy(() => import("./pages/RedditManagement.tsx"));
const MultiPlatformManagement = lazy(() => import("./pages/MultiPlatformManagement.tsx"));
const FacebookManagement = lazy(() => import("./pages/FacebookManagement.tsx"));
const SnapchatManagement = lazy(() => import("./pages/SnapchatManagement.tsx"));
const AboutImperium = lazy(() => import("./pages/AboutImperium.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/onlyfans-management" element={<OnlyFansManagement />} />
              <Route path="/fansly-management" element={<FanslyManagement />} />
              <Route path="/fanvue-management" element={<FanvueManagement />} />
              {/* Clean routes */}
              <Route path="/instagram-management" element={<InstagramGrowthManagement />} />
              <Route path="/tiktok-management" element={<TikTokGrowthManagement />} />
              <Route path="/multi-platform-management" element={<MultiPlatformManagement />} />
              <Route path="/x-twitter-management" element={<XTwitterManagement />} />
              <Route path="/reddit-management" element={<RedditManagement />} />
              <Route path="/facebook-management" element={<FacebookManagement />} />
              <Route path="/snapchat-management" element={<SnapchatManagement />} />
              <Route path="/about-imperium" element={<AboutImperium />} />
              {/* Redirects from old routes */}
              <Route path="/instagram-growth-management" element={<Navigate to="/instagram-management" replace />} />
              <Route path="/tiktok-growth-management" element={<Navigate to="/tiktok-management" replace />} />
              <Route path="/multi-platform-creator-management" element={<Navigate to="/multi-platform-management" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
