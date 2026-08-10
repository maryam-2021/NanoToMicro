import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import ConverterPage from '@/pages/ConverterPage';
import PrefixConverterPage from '@/pages/PrefixConverterPage';
import ChartsPage from '@/pages/ChartsPage';
import GuidesIndexPage from '@/pages/GuidesIndexPage';
import NanoVsMicro from '@/pages/articles/NanoVsMicro';
import SiPrefixesExplained from '@/pages/articles/SiPrefixesExplained';
import NmToUmGuide from '@/pages/articles/NmToUmGuide';
import CapacitorCodes from '@/pages/articles/CapacitorCodes';
import McgVsUgVsMg from '@/pages/articles/McgVsUgVsMg';
import LatencyChart from '@/pages/articles/LatencyChart';
import NanoToMicroHubPage from '@/pages/NanoToMicroHubPage';
import NmToUmSpokePage from '@/pages/length/NmToUmSpokePage';
import NsToUsSpokePage from '@/pages/time/NsToUsSpokePage';
import NsvToUsvSpokePage from '@/pages/radiation/NsvToUsvSpokePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/nano-to-micro-conversion" element={<Navigate to="/nano-to-micro-conversion/" replace />} />
        <Route path="/nano-to-micro-conversion/" element={<NanoToMicroHubPage />} />

        <Route path="/length/nm-to-um" element={<Navigate to="/length/nm-to-um/" replace />} />
        <Route path="/length/nm-to-um/" element={<NmToUmSpokePage />} />
        <Route path="/nanometers-to-micrometers" element={<Navigate to="/length/nm-to-um/" replace />} />
        <Route path="/nanometers-to-micrometers/" element={<Navigate to="/length/nm-to-um/" replace />} />

        <Route path="/time/ns-to-us" element={<Navigate to="/time/ns-to-us/" replace />} />
        <Route path="/time/ns-to-us/" element={<NsToUsSpokePage />} />
        <Route path="/nanoseconds-to-microseconds" element={<Navigate to="/time/ns-to-us/" replace />} />
        <Route path="/nanoseconds-to-microseconds/" element={<Navigate to="/time/ns-to-us/" replace />} />

        <Route path="/radiation/nsv-to-usv" element={<Navigate to="/radiation/nsv-to-usv/" replace />} />
        <Route path="/radiation/nsv-to-usv/" element={<NsvToUsvSpokePage />} />
        <Route path="/nanosieverts-to-microsieverts" element={<Navigate to="/radiation/nsv-to-usv/" replace />} />
        <Route path="/nanosieverts-to-microsieverts/" element={<Navigate to="/radiation/nsv-to-usv/" replace />} />

        <Route path="/si-prefix-converter" element={<PrefixConverterPage />} />
        <Route path="/conversion-charts" element={<ChartsPage />} />
        <Route path="/guides" element={<GuidesIndexPage />} />
        <Route path="/guides/nano-vs-micro-difference" element={<NanoVsMicro />} />
        <Route path="/guides/si-prefixes-explained" element={<SiPrefixesExplained />} />
        <Route path="/guides/nanomolar-to-micromolar-guide" element={<NmToUmGuide />} />
        <Route path="/guides/capacitor-codes-explained" element={<CapacitorCodes />} />
        <Route path="/guides/mcg-vs-ug-vs-mg" element={<McgVsUgVsMg />} />
        <Route path="/guides/ns-vs-us-ms-latency-chart" element={<LatencyChart />} />
        <Route path="/:slug" element={<ConverterPage />} />
      </Routes>
    </Layout>
  );
}
