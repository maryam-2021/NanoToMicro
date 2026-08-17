<!-- src/components/ConverterIsland.svelte -->
<script>
  export let fromSymbol = 'nm';
  export let toSymbol = 'µm';
  export let factor = 0.001;
  export let fromName = 'nanometer';
  export let toName = 'micrometer';
  export let exampleInput = 2500;
  export let locale = 'en';

  // Localized UI strings passed from parent template
  export let inputLabel = 'INPUT ({symbol})';
  export let outputLabel = 'OUTPUT ({symbol})';
  export let presetsLabel = 'Presets:';
  export let fullChartLinkText = 'Full Pre-calculated Chart →';
  export let fullChartHref = '/conversion-charts/';
  export let bullet1 = 'Zero floating-point drift';
  export let bullet2 = 'Precise scientific notation support';
  export let bullet3 = 'True bidirectional algorithm';
  export let clearTitle = 'Clear';
  export let copyTitle = 'Copy result';
  export let copiedText = 'Copied!';
  export let swapTitle = 'Swap units';

  let fromValue = String(exampleInput);
  let toValue = formatNumber(exampleInput * factor);
  let copied = false;

  // Safe input parser supporting dot and comma decimal notations
  function parseLocaleNumber(str) {
    if (!str || typeof str !== 'string') return NaN;
    // Replace comma with dot for standard JS float parsing
    const normalized = str.trim().replace(',', '.');
    return parseFloat(normalized);
  }

  function formatNumber(num) {
    if (isNaN(num)) return '';
    if (num === 0) return '0';
    if (Math.abs(num) >= 1e9 || (Math.abs(num) < 1e-6 && num !== 0)) {
      return num.toExponential(4).replace(/\+?0*(\d+)$/, '$1');
    }
    try {
      return new Intl.NumberFormat(locale || 'en', {
        maximumFractionDigits: 12,
        useGrouping: true,
      }).format(num);
    } catch {
      return parseFloat(num.toFixed(8)).toString();
    }
  }

  function handleFromInput(e) {
    const raw = e.target.value;
    fromValue = raw;
    const val = parseLocaleNumber(raw);
    if (isNaN(val)) {
      toValue = '';
    } else {
      toValue = formatNumber(val * factor);
    }
  }

  function handleToInput(e) {
    const raw = e.target.value;
    toValue = raw;
    const val = parseLocaleNumber(raw);
    if (isNaN(val)) {
      fromValue = '';
    } else {
      fromValue = factor === 0 ? '0' : formatNumber(val / factor);
    }
  }

  function setPreset(val) {
    fromValue = String(val);
    toValue = formatNumber(val * factor);
  }

  function clearAll() {
    fromValue = '';
    toValue = '';
  }

  function copyResult(event) {
    if (!toValue) return;
    const textToCopy = `${toValue} ${toSymbol}`;
    navigator.clipboard.writeText(textToCopy);
    copied = true;

    // Show feedback on target button if triggered via DOM event
    const btn = event?.currentTarget;
    if (btn) {
      const origText = btn.textContent;
      btn.textContent = '✓ Copied!';
      setTimeout(() => {
        btn.textContent = origText;
        copied = false;
      }, 2000);
    } else {
      setTimeout(() => (copied = false), 2000);
    }
  }

  function swapUnits() {
    const tempSymbol = fromSymbol;
    fromSymbol = toSymbol;
    toSymbol = tempSymbol;
    factor = 1 / factor;
    const num = parseLocaleNumber(fromValue || '0');
    toValue = isNaN(num) ? '' : formatNumber(num * factor);
  }
</script>

<div class="calculator-card">
  <div class="calc-inputs-row">
    <!-- From Box -->
    <div class="input-box">
      <div class="box-label">{inputLabel.replace('{symbol}', fromSymbol)}</div>
      <div class="input-control-wrap" dir="ltr">
        <input
          id="nano-input"
          type="text"
          inputmode="decimal"
          value={fromValue}
          on:input={handleFromInput}
          placeholder="0"
          class="calc-input"
          dir="ltr"
        />
        {#if fromValue !== ''}
          <button type="button" class="action-btn clear-btn" on:click={clearAll} title={clearTitle}>✕</button>
        {/if}
        <span class="unit-tag">{fromSymbol}</span>
      </div>
    </div>

    <!-- Swap / Equals Center Button -->
    <button type="button" class="swap-btn" on:click={swapUnits} title={swapTitle}>
      <span>=</span>
    </button>

    <!-- To Box -->
    <div class="input-box">
      <div class="box-label">{outputLabel.replace('{symbol}', toSymbol)}</div>
      <div class="input-control-wrap" dir="ltr">
        <input
          id="micro-output"
          type="text"
          inputmode="decimal"
          value={toValue}
          on:input={handleToInput}
          placeholder="0"
          class="calc-input"
          dir="ltr"
        />
        <button type="button" class="action-btn copy-btn" on:click={copyResult} title={copyTitle}>
          {copied ? '✓' : '⧉'}
        </button>
        <span class="unit-tag highlight-unit">{toSymbol}</span>
      </div>
    </div>
  </div>

  <!-- Presets Row with Strict Bidi Isolation -->
  <div class="presets-row">
    <div class="preset-buttons">
      <span class="presets-label">{presetsLabel}</span>
      <button type="button" class="preset-btn" on:click={() => setPreset(1)}><bdi dir="ltr">1 {fromSymbol}</bdi></button>
      <button type="button" class="preset-btn" on:click={() => setPreset(10)}><bdi dir="ltr">10 {fromSymbol}</bdi></button>
      <button type="button" class="preset-btn" on:click={() => setPreset(100)}><bdi dir="ltr">100 {fromSymbol}</bdi></button>
      <button type="button" class="preset-btn" on:click={() => setPreset(500)}><bdi dir="ltr">500 {fromSymbol}</bdi></button>
      <button type="button" class="preset-btn" on:click={() => setPreset(1000)}><bdi dir="ltr">1,000 {fromSymbol}</bdi></button>
    </div>
    <a href={fullChartHref} class="chart-link">{fullChartLinkText}</a>
  </div>

  <!-- Formula Banner (Always LTR) -->
  <div class="formula-banner formula" dir="ltr">
    <code>Formula: {fromValue || '0'} {fromSymbol} {factor < 1 ? `÷ ${(1/factor).toLocaleString('en')}` : `× ${factor.toLocaleString('en')}`} = {toValue || '0'} {toSymbol}</code>
  </div>

  <!-- Feature Checkmarks -->
  <div class="features-row">
    <span class="feat-item"><span class="check-dot">●</span> {bullet1}</span>
    <span class="feat-item"><span class="check-dot">●</span> {bullet2}</span>
    <span class="feat-item"><span class="check-dot">●</span> {bullet3}</span>
  </div>
</div>

<style>
  .calculator-card {
    background: radial-gradient(circle at top, #131c2e 0%, #0c121d 100%);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(245, 158, 11, 0.08);
    position: relative;
    overflow: hidden;
  }

  .calc-inputs-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .input-box {
    flex: 1;
    background: rgba(11, 15, 25, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 12px 16px;
    transition: border-color 0.2s;
  }

  .input-box:focus-within {
    border-color: #f59e0b;
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.25);
  }

  .box-label {
    font-size: 11px;
    font-weight: 800;
    color: #cbd5e1;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }

  .input-control-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .calc-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 24px;
    font-weight: 800;
    font-family: ui-monospace, 'SF Mono', Menlo, monospace;
  }

  .unit-tag {
    font-size: 14px;
    font-weight: 800;
    color: #cbd5e1;
    background: rgba(255, 255, 255, 0.08);
    padding: 4px 8px;
    border-radius: 6px;
    flex-shrink: 0;
  }

  .highlight-unit {
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.18);
  }

  .action-btn {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #e2e8f0;
    border-radius: 6px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .action-btn:hover {
    background: rgba(245, 158, 11, 0.25);
    color: #f59e0b;
    border-color: #f59e0b;
  }

  .swap-btn {
    background: rgba(245, 158, 11, 0.18);
    border: 1px solid rgba(245, 158, 11, 0.45);
    color: #f59e0b;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .swap-btn:hover {
    background: #f59e0b;
    color: #070b12;
    transform: rotate(180deg);
  }

  .presets-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .preset-buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  .presets-label {
    font-size: 12px;
    color: #cbd5e1;
    font-weight: 700;
  }

  .preset-btn {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #e2e8f0;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    font-family: ui-monospace, monospace;
    transition: all 0.15s;
  }

  .preset-btn:hover {
    background: rgba(245, 158, 11, 0.2);
    color: #fbbf24;
    border-color: rgba(245, 158, 11, 0.4);
  }

  .chart-link {
    font-size: 13px;
    color: #fbbf24;
    font-weight: 700;
    text-decoration: none;
  }

  .chart-link:hover {
    text-decoration: underline;
  }

  .formula-banner {
    margin-top: 14px;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 8px 14px;
    text-align: center;
    font-size: 13px;
    color: #93c5fd;
    font-family: ui-monospace, monospace;
  }

  .features-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 14px;
    font-size: 12px;
    color: #cbd5e1;
  }

  .feat-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .check-dot {
    color: #f59e0b;
    font-size: 9px;
  }

  @media (max-width: 640px) {
    .calc-inputs-row {
      flex-direction: column;
    }
    .swap-btn {
      align-self: center;
    }
    .presets-row {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
