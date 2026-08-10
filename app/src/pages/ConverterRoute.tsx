import { useParams } from 'react-router';
import { getConverter } from '@/data/converters';
import ConverterPage from '@/pages/ConverterPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ConverterRoute() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !getConverter(slug)) {
    return <NotFoundPage />;
  }

  return <ConverterPage />;
}
