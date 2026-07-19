import { Link } from 'react-router';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getArticle } from '@/data/articles';

const meta = getArticle('ns-vs-us-ms-latency-chart')!;

export default function LatencyChart() {
  return (
    <ArticleLayout
      meta={meta}
      ctas={[
        { to: '/nanoseconds-to-microseconds', label: 'ns to µs Converter' },
        { to: '/microseconds-to-milliseconds', label: 'µs to ms' },
        { to: '/nanoseconds-to-milliseconds', label: 'ns to ms' },
      ]}
    >
      <p>
        <strong>A nanosecond (ns) is a billionth of a second, a microsecond (µs) is a millionth, and a
        millisecond (ms) is a thousandth.</strong> 1 µs = 1,000 ns, and 1 ms = 1,000 µs = 1,000,000 ns.
        Computers operate across all three scales at once — and the million-fold gap between them explains
        almost everything about how systems are designed.
      </p>

      <h2>The Three Units</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr><th>Unit</th><th>Symbol</th><th>Fraction of a second</th><th>Rules the world of</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>nanosecond</strong></td><td>ns</td><td>10⁻⁹ s</td><td>CPU cycles, cache, RAM</td></tr>
            <tr><td><strong>microsecond</strong></td><td>µs</td><td>10⁻⁶ s</td><td>SSDs, interrupts, kernel work</td></tr>
            <tr><td><strong>millisecond</strong></td><td>ms</td><td>10⁻³ s</td><td>networks, disks, humans</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        For physical intuition: light travels about 30 cm in a nanosecond, 300 m in a microsecond, and 300 km
        in a millisecond. The nanosecond is so short that even light barely moves — which is why Grace Hopper
        famously handed out foot-long "nanoseconds" of copper wire.
      </p>

      <h2>The Complete Latency Chart</h2>
      <p>
        These are the classic "numbers every programmer should know", updated for modern hardware — each event
        shown in its natural unit, converted to ns, and rescaled as if <strong>1 ns lasted 1 second</strong>:
      </p>
      <div className="tbl">
        <table className="numeric">
          <thead>
            <tr>
              <th>Event</th>
              <th>Typical time</th>
              <th>In nanoseconds</th>
              <th>If 1 ns = 1 second</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>CPU cycle (3 GHz)</td><td>0.33 ns</td><td>0.33 ns</td><td>0.33 seconds</td></tr>
            <tr><td>L1 cache hit</td><td>~1 ns</td><td>1 ns</td><td>1 second</td></tr>
            <tr><td>L2 cache hit</td><td>~3 ns</td><td>3 ns</td><td>3 seconds</td></tr>
            <tr><td>L3 cache hit</td><td>~10 ns</td><td>10 ns</td><td>10 seconds</td></tr>
            <tr><td>Main memory (RAM) access</td><td>~100 ns</td><td>100 ns</td><td>1.7 minutes</td></tr>
            <tr><td>NVMe SSD read</td><td>~10–100 µs</td><td>10,000–100,000 ns</td><td>2.8 hours – 1.2 days</td></tr>
            <tr><td>1 MB sequential read from SSD</td><td>~200 µs</td><td>200,000 ns</td><td>2.3 days</td></tr>
            <tr><td>HDD seek</td><td>~5–10 ms</td><td>5,000,000–10,000,000 ns</td><td>2–4 months</td></tr>
            <tr><td>Network RTT, same datacenter</td><td>~0.5 ms</td><td>500,000 ns</td><td>5.8 days</td></tr>
            <tr><td>Network RTT, same continent</td><td>~30 ms</td><td>30,000,000 ns</td><td>~1 year</td></tr>
            <tr><td>Network RTT, cross-continent</td><td>~150 ms</td><td>150,000,000 ns</td><td>~4.8 years</td></tr>
            <tr><td>Human reaction time</td><td>~200 ms</td><td>200,000,000 ns</td><td>~6.3 years</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Read the last column slowly. If a CPU cycle were a heartbeat, RAM would be a coffee break, an SSD read
        a weekend trip, and fetching from another continent a <em>multi-year expedition</em>. That is the
        entire case for caching.
      </p>

      <h2>Converting: ns ↔ µs ↔ ms</h2>
      <p>One rule covers everything — each step is exactly 1,000:</p>
      <div className="article-callout">
        <p className="mb-1 text-center text-lg font-bold text-primary">µs = ns ÷ 1,000 &nbsp;·&nbsp; ms = µs ÷ 1,000</p>
        <p className="mb-0 text-center text-lg font-bold">ns = µs × 1,000 &nbsp;·&nbsp; µs = ms × 1,000</p>
      </div>
      <ul>
        <li>2,500 ns ÷ 1,000 = <strong>2.5 µs</strong> — <Link to="/nanoseconds-to-microseconds">ns to µs converter</Link></li>
        <li>1,500 µs ÷ 1,000 = <strong>1.5 ms</strong> — <Link to="/microseconds-to-milliseconds">µs to ms converter</Link></li>
        <li>5,000,000 ns ÷ 1,000,000 = <strong>5 ms</strong> — <Link to="/nanoseconds-to-milliseconds">ns to ms converter</Link></li>
        <li>0.05 ms × 1,000,000 = <strong>50,000 ns</strong> — <Link to="/milliseconds-to-nanoseconds">ms to ns converter</Link></li>
      </ul>
      <p>
        Decimal trick: every conversion moves the point three places. ns → µs → ms shifts left; ms → µs → ns
        shifts right.
      </p>

      <h2>Why the Gaps Shape All of Computing</h2>
      <ul>
        <li><strong>Cache hierarchy exists because of the 100× RAM gap.</strong> L1 at ~1 ns vs RAM at ~100 ns means a cache miss costs ~100 cycles. Multiple cache levels smooth the cliff.</li>
        <li><strong>SSDs changed performance culture.</strong> Moving from 5–10 ms HDD seeks to 10–100 µs NVMe reads — a ~100× jump — is why modern systems feel instant and why "I/O-bound" now often means network-bound.</li>
        <li><strong>Microservices pay the ms tax.</strong> A datacenter round-trip (~0.5 ms) equals ~500,000 ns — thousands of potential local function calls. Chatty architectures burn it invisibly.</li>
        <li><strong>Frame budgets are ruthless.</strong> 60 fps allows 16.7 ms (16,700,000 ns) per frame; VR at 90 Hz allows 11.1 ms. Every subsystem competes for nanoseconds inside it.</li>
      </ul>

      <h2>Which Unit for Which Job</h2>
      <ul>
        <li><strong>Use ns</strong> for hardware and profiling: clock periods, cache/memory latency, benchmark per-operation costs, hardware counters.</li>
        <li><strong>Use µs</strong> for system software: interrupt latency, scheduler ticks, storage operations, audio buffers, trading systems.</li>
        <li><strong>Use ms</strong> for anything user- or network-facing: API latency, page loads, ping, frame times, database queries.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>Which is faster, ns or ms?</h3>
      <p>
        A nanosecond — it is one millionth of a millisecond. An event taking 1 ns finishes a million times
        sooner than one taking 1 ms.
      </p>
      <h3>How many nanoseconds are in 1 millisecond?</h3>
      <p>
        Exactly 1,000,000. The chain runs ms (10⁻³ s) → µs (10⁻⁶ s) → ns (10⁻⁹ s), two steps of 1,000.
      </p>
      <h3>What is a "jiffy" in computing?</h3>
      <p>
        Historically, one tick of the system timer — between 1 ms and 10 ms depending on the OS and era
        (Linux commonly 1–4 ms, classic systems 10 ms). In physics slang, a jiffy can also mean the time light
        travels 1 cm: about 33 picoseconds (0.033 ns).
      </p>
      <h3>Why is ping measured in ms instead of µs?</h3>
      <p>
        Geography. Even at light speed, crossing a continent takes tens of ms through fiber — and routing,
        switching and Wi-Fi add more. µs would give unwieldy numbers like 30,000 µs; ms keeps ping readable.
      </p>
    </ArticleLayout>
  );
}
