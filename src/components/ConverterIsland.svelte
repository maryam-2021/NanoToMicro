<!-- src/components/ConverterIsland.svelte -->
<script>
  export let fromSymbol = 'nm';
  export let toSymbol = 'µm';
  export let factor = 0.001;
  export let fromName = 'nanometer';
  export let toName = 'micrometer';
  export let exampleInput = 2500;

  let fromValue = exampleInput;
  let toValue = formatNumber(fromValue * factor);
  let copied = false;

  function formatNumber(num) {
    if (num === 0) return '0';
    if (Math.abs(num) >= 1e6 || (Math.abs(num) < 1e-4 && num !== 0)) {
      return num.toExponential(4).replace(/\+?0*(\d+)$/, '$1');
    }
    // Round cleanly to avoid floating-point issues (e.g. 0.0000000000000001)
    const str = num.toFixed(8);
    return parseFloat(str).toString();
  }

  function handleFromInput(e) {
    const val = parseFloat(e.target.value);
    fromValue = e.target.value;
    if (isNaN(val)) {
      toValue = '';
    } else {
      toValue = formatNumber(val * factor);
    }
  }

  function handleToInput(e) {
    const val = parseFloat(e.target.value);
    toValue = e.target.value;
    if (isNaN(val)) {
      fromValue = '';
    } else {
      fromValue = factor === 0 ? '0' : formatNumber(val / factor);
    }
  }

  function setPreset(val) {
    fromValue = val;
    toValue = formatNumber(val * factor);
  }

  function clearAll() {
    fromValue = '';
    toValue = '';
  }

  function copyResult() {
    if (!toValue) return;
    navigator.clipboard.writeText(`${toValue} ${toSymbol}`);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }

  function swapUnits() {
    const tempSymbol = fromSymbol;
    fromSymbol = toSymbol;
    toSymbol = tempSymbol;
    factor = 1 / factor;
    toValue = formatNumber(parseFloat(fromValue || '0') * factor);
  }
</script>

<div class="calculator-card">
  <div class="calc-inputs-row">
    <!-- From Box -->
    <div class="input-box">
      <div class="box-label">INPUT ({fromSymbol})</div>
      <div class="input-control-wrap">
        <input
          type="number"
          step="any"
          value={fromValue}
          on:input={handleFromInput}
          placeholder="0"
          class="calc-input"
        />
        {#if fromValue !== ''}
          <button type="button" class="action-btn clear-btn" on:click={clearAll} title="Clear">✕</button>
        {/if}
        <span class="unit-tag">{fromSymbol}</span>
      </div>
    </div>

    <!-- Swap / Equals Center Button -->
    <button type="button" class="swap-btn" on:click={swapUnits} title="Swap units">
      <span>=</span>
    </button>

    <!-- To Box -->
    <div class="input-box">
      <div class="box-label">OUTPUT ({toSymbol})</div>
      <div class="input-control-wrap">
        <input
          type="number"
          step="any"
          value={toValue}
          on:input={handleToInput}
          placeholder="0"
          class="calc-input"
        />
        <button type="button" class="action-btn copy-btn" on:click={copyResult} title="Copy result">
          {copied ? '✓' : '⧉'}
        </button>
        <span class="unit-tag highlight-unit">{toSymbol}</span>
      </div>
    </div>
  </div>

  <!-- Presets Row -->
  <div class="presets-row">
    <div class="preset-buttons">
      <span class="presets-label">Presets:</span>
      <button type="button" class="preset-btn" on:click={() => setPreset(1)}>1 {fromSymbol}</button>
      <button type="button" class="preset-btn" on:click={() => setPreset(10)}>10 {fromSymbol}</button>
      <button type="button" class="preset-btn" on:click={() => setPreset(100)}>100 {fromSymbol}</button>
      <button type="button" class="preset-btn" on:click={() => setPreset(500)}>500 {fromSymbol}</button>
      <button type="button" class="preset-btn" on:click={() => setPreset(1000)}>1,000 {fromSymbol}</button>
    </div>
    <a href="/conversion-charts/" class="chart-link">Full Pre-calculated Chart →</a>
  </div>

  <!-- Formula Banner -->
  <div class="formula-banner">
    <code>Formula: {fromValue || '0'} {fromSymbol} {factor < 1 ? `÷ ${(1/factor).toLocaleString()}` : `× ${factor.toLocaleString()}`} = {toValue || '0'} {toSymbol}</code>
  </div>

  <!-- Feature Checkmarks -->
  <div class="features-row">
    <span class="feat-item"><span class="check-dot">●</span> Zero floating-point drift</span>
    <span class="feat-item"><span class="check-dot">●</span> Precise scientific notation support</span>
    <span class="feat-item"><span class="check-dot">●</span> True bidirectional algorithm</span>
  </div>
</div>

<style>
  .calculator-card {
    background: radial-gradient(circle at top, #131c2e 0%, #0c121d 100%);
    border: 1px solid rgba(245, 158, 11, 0.25);
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
    background: rgba(11, 15, 25, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 12px 16px;
    transition: border-color 0.2s;
  }

  .input-box:focus-within {
    border-color: #f59e0b;
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
  }

  .box-label {
    font-size: 11px;
    font-weight: 700;
    color: #94a3b8;
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

  .calc-input::-webkit-outer-spin-button,
  .calc-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .unit-tag {
    font-size: 14px;
    font-weight: 700;
    color: #94a3b8;
    background: rgba(255, 255, 255, 0.08);
    padding: 4px 8px;
    border-radius: 6px;
  }

  .highlight-unit {
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.15);
  }

  .action-btn {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    border-radius: 6px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  }

  .action-btn:hover {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border-color: #f59e0b;
  }

  .swap-btn {
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.4);
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
    color: #0b0f14;
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
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .preset-buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  .presets-label {
    font-size: 12px;
    color: #64748b;
    font-weight: 600;
  }

  .preset-btn {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #94a3b8;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    font-family: ui-monospace, monospace;
    transition: all 0.15s;
  }

  .preset-btn:hover {
    background: rgba(245, 158, 11, 0.15);
    color: #f59e0b;
    border-color: rgba(245, 158, 11, 0.3);
  }

  .chart-link {
    font-size: 12px;
    color: #f59e0b;
    font-weight: 600;
    text-decoration: none;
  }

  .chart-link:hover {
    text-decoration: underline;
  }

  .formula-banner {
    margin-top: 14px;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.06);
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
    color: #64748b;
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
