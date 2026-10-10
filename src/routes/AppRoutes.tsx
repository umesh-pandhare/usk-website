import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';

// Route-level code splitting: each page is its own chunk.
const Home = lazy(() => import('@/pages/Home'));
const Products = lazy(() => import('@/pages/Products'));
const ProductDetails = lazy(() => import('@/pages/ProductDetails'));
const Services = lazy(() => import('@/pages/Services'));
const Projects = lazy(() => import('@/pages/Projects'));
const About = lazy(() => import('@/pages/About'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Contact = lazy(() => import('@/pages/Contact'));
const Careers = lazy(() => import('@/pages/Careers'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
