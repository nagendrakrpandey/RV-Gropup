import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Team from "./pages/Team";
import Core from "./pages/Core";
import Contact from "./pages/contact";
import Gallery from "./pages/Gallary";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/Core" element={<Core />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
