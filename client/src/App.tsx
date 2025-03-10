import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Pricing from "@/pages/pricing";
import FAQ from "@/pages/faq";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;