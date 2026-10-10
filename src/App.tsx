import { BrowserRouter } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import { AppRoutes } from '@/routes/AppRoutes';

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LazyMotion>
  );
}
