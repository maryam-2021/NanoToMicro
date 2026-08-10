import { Navigate, useLocation } from 'react-router';
import NotFoundPage from '@/pages/NotFoundPage';

export default function CanonicalFallbackRoute() {
  const { pathname, search, hash } = useLocation();

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return <Navigate to={`${pathname}/${search}${hash}`} replace />;
  }

  return <NotFoundPage />;
}
