
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Browse from "./pages/Browse";
import ListItem from "./pages/ListItem";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Protected Routes */}
            <Route path="/browse" element={
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            } />
            
            <Route path="/list-item" element={
              <ProtectedRoute requiredRole={["customer", "admin"]}>
                <ListItem />
              </ProtectedRoute>
            } />
            
            <Route path="/item/:id" element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            } />
            
            <Route path="/dashboard" element={
              <ProtectedRoute requiredRole={["customer", "admin"]}>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/delivery-dashboard" element={
              <ProtectedRoute requiredRole="delivery_partner">
                <DeliveryDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <Admin />
              </ProtectedRoute>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
