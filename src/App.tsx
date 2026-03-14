import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Contact from "./pages/Contact.tsx";
import OnlyFansManagement from "./pages/OnlyFansManagement.tsx";
import FanslyManagement from "./pages/FanslyManagement.tsx";
import InstagramGrowthManagement from "./pages/InstagramGrowthManagement.tsx";
import TikTokGrowthManagement from "./pages/TikTokGrowthManagement.tsx";
import MultiPlatformManagement from "./pages/MultiPlatformManagement.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/onlyfans-management" element={<OnlyFansManagement />} />
            <Route path="/fansly-management" element={<FanslyManagement />} />
            <Route path="/instagram-growth-management" element={<InstagramGrowthManagement />} />
            <Route path="/tiktok-growth-management" element={<TikTokGrowthManagement />} />
            <Route path="/multi-platform-creator-management" element={<MultiPlatformManagement />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
