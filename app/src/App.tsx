import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import ConverterRoute from '@/pages/ConverterRoute';
import PrefixConverterPage from '@/pages/PrefixConverterPage';
import ChartsPage from '@/pages/ChartsPage';
import GuidesIndexPage from '@/pages/GuidesIndexPage';
import CanonicalFallbackRoute from '@/pages/CanonicalFallbackRoute';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import CategoryHubPage from '@/pages/CategoryHubPage';
import LocalizedHubPage from '@/pages/LocalizedHubPage';
import SimpleNanoMicroSpokePage from '@/pages/SimpleNanoMicroSpokePage';
import { LOCALIZED_HUBS } from '@/data/localized-hubs';
import NanoVsMicro from '@/pages/articles/NanoVsMicro';
import SiPrefixesExplained from '@/pages/articles/SiPrefixesExplained';
import NmToUmGuide from '@/pages/articles/NmToUmGuide';
import CapacitorCodes from '@/pages/articles/CapacitorCodes';
import McgVsUgVsMg from '@/pages/articles/McgVsUgVsMg';
import LatencyChart from '@/pages/articles/LatencyChart';
import NewScienceGuide from '@/pages/articles/NewScienceGuide';
import NanoToMicroHubPage from '@/pages/NanoToMicroHubPage';
import NmToUmSpokePage from '@/pages/length/NmToUmSpokePage';
import NsToUsSpokePage from '@/pages/time/NsToUsSpokePage';
import NsvToUsvSpokePage from '@/pages/radiation/NsvToUsvSpokePage';
import GrayVsSievertPage from '@/pages/radiation/GrayVsSievertPage';
import UsvVsUsvPerHourPage from '@/pages/radiation/UsvVsUsvPerHourPage';
import UsvToMsvPage from '@/pages/radiation/UsvToMsvPage';

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
        <Route path="/radiation/gray-vs-sievert" element={<Navigate to="/radiation/gray-vs-sievert/" replace />} />
        <Route path="/radiation/gray-vs-sievert/" element={<GrayVsSievertPage />} />
        <Route path="/radiation/usv-vs-usv-per-hour" element={<Navigate to="/radiation/usv-vs-usv-per-hour/" replace />} />
        <Route path="/radiation/usv-vs-usv-per-hour/" element={<UsvVsUsvPerHourPage />} />
        <Route path="/radiation/usv-to-msv" element={<Navigate to="/radiation/usv-to-msv/" replace />} />
        <Route path="/radiation/usv-to-msv/" element={<UsvToMsvPage />} />

        <Route path="/nanowatts-to-microwatts" element={<Navigate to="/power/nw-to-uw/" replace />} />
        <Route path="/nanowatts-to-microwatts/" element={<Navigate to="/power/nw-to-uw/" replace />} />
        <Route path="/power/nw-to-uw/" element={
          <SimpleNanoMicroSpokePage
            title="Nanowatts to Microwatts Converter (nW to µW) | NanoToMicro"
            description="Convert nanowatts to microwatts instantly. 1,000 nW = 1 µW. Exact nW-to-µW calculator, formula and examples for low-power electronics and sensors."
            canonical="https://www.nanotomicro.com/power/nw-to-uw/"
            category="Power"
            sourceName="Nanowatt"
            sourcePlural="Nanowatts"
            sourceSymbol="nW"
            destName="Microwatt"
            destPlural="Microwatts"
            destSymbol="µW"
            intro="Nanowatts and microwatts are both power units used for extremely low-power electronics, sensors, energy harvesting and standby consumption. Divide nanowatts by 1,000 to express the same power in microwatts."
            examples={[{ label: '1 nW', value: 1 }, { label: '100 nW', value: 100 }, { label: '1,000 nW', value: 1000 }, { label: '5,000 nW', value: 5000 }]}
          />
        } />

        <Route path="/nanomoles-to-micromoles" element={<Navigate to="/amount/nmol-to-umol/" replace />} />
        <Route path="/nanomoles-to-micromoles/" element={<Navigate to="/amount/nmol-to-umol/" replace />} />
        <Route path="/amount/nmol-to-umol/" element={
          <SimpleNanoMicroSpokePage
            title="Nanomoles to Micromoles Converter (nmol to µmol) | NanoToMicro"
            description="Convert nanomoles to micromoles instantly. 1,000 nmol = 1 µmol. Exact nmol-to-µmol calculator, formula and examples for chemistry and laboratory work."
            canonical="https://www.nanotomicro.com/amount/nmol-to-umol/"
            category="Amount of Substance"
            sourceName="Nanomole"
            sourcePlural="Nanomoles"
            sourceSymbol="nmol"
            destName="Micromole"
            destPlural="Micromoles"
            destSymbol="µmol"
            intro="Nanomoles and micromoles express amount of substance on adjacent SI prefix scales. Laboratory protocols, reaction quantities and analytical calculations often move between them. Divide nanomoles by 1,000 to get micromoles."
            examples={[{ label: '1 nmol', value: 1 }, { label: '100 nmol', value: 100 }, { label: '1,000 nmol', value: 1000 }, { label: '5,000 nmol', value: 5000 }]}
          />
        } />

        <Route path="/units/:hubSlug/" element={<CategoryHubPage />} />

        <Route path="/si-prefix-converter" element={<Navigate to="/si-prefix-converter/" replace />} />
        <Route path="/si-prefix-converter/" element={<PrefixConverterPage />} />
        <Route path="/conversion-charts" element={<Navigate to="/conversion-charts/" replace />} />
        <Route path="/conversion-charts/" element={<ChartsPage />} />
        <Route path="/guides" element={<Navigate to="/guides/" replace />} />
        <Route path="/guides/" element={<GuidesIndexPage />} />
        <Route path="/guides/nano-vs-micro-difference/" element={<NanoVsMicro />} />
        <Route path="/guides/si-prefixes-explained/" element={<SiPrefixesExplained />} />
        <Route path="/guides/nanomolar-to-micromolar-guide/" element={<NmToUmGuide />} />
        <Route path="/guides/capacitor-codes-explained/" element={<CapacitorCodes />} />
        <Route path="/guides/mcg-vs-ug-vs-mg/" element={<McgVsUgVsMg />} />
        <Route path="/guides/ns-vs-us-ms-latency-chart/" element={<LatencyChart />} />
        <Route path="/guides/sievert-gray-becquerel-difference/" element={<NewScienceGuide slug="sievert-gray-becquerel-difference" />} />
        <Route path="/guides/visible-light-wavelength-nm-to-um/" element={<NewScienceGuide slug="visible-light-wavelength-nm-to-um" />} />
        <Route path="/guides/semiconductor-process-nodes-explained/" element={<NewScienceGuide slug="semiconductor-process-nodes-explained" />} />
        <Route path="/guides/cell-size-in-micrometers/" element={<NewScienceGuide slug="cell-size-in-micrometers" />} />

        <Route path="/about/" element={<AboutPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/privacy/" element={<PrivacyPage />} />
        <Route path="/terms/" element={<TermsPage />} />

        {LOCALIZED_HUBS.map((locale) => (
          <Route key={locale.code} path={`/${locale.code}/`} element={<LocalizedHubPage code={locale.code} />} />
        ))}

        <Route path="/:slug/" element={<ConverterRoute />} />
        <Route path="*" element={<CanonicalFallbackRoute />} />
      </Routes>
    </Layout>
  );
}
