<!-- src/components/MagneticPressureIsland.svelte -->

<script>
  const MU_0 = 4 * Math.PI * 1e-7;

  let magneticFieldTesla = 1;
  let areaSquareMeters = 0.01;
  let forceNewtons = 0;

  function calculate() {
    const B = Number(magneticFieldTesla) || 0;
    const A = Number(areaSquareMeters) || 0;
    const pressure = (B * B) / (2 * MU_0);
    forceNewtons = pressure * A;
  }

  calculate();
</script>

<div class="panel">
  <h2 style="margin-top: 0;">Magnetic Pressure Force Calculator</h2>

  <p class="muted">
    Estimates force from magnetic pressure using
    F = B² / (2µ₀) × A. This is real magnetic levitation physics, not antigravity.
  </p>

  <div class="grid-2">
    <label>
      <span class="muted">Magnetic field, B (tesla)</span>
      <input
        type="number"
        step="any"
        bind:value={magneticFieldTesla}
        on:input={calculate}
        style="width: 100%; margin-top: 6px; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12); background: transparent; color: inherit;"
      />
    </label>

    <label>
      <span class="muted">Area, A (m²)</span>
      <input
        type="number"
        step="any"
        bind:value={areaSquareMeters}
        on:input={calculate}
        style="width: 100%; margin-top: 6px; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12); background: transparent; color: inherit;"
      />
    </label>
  </div>

  <p>
    <strong>Estimated force:</strong>
    {forceNewtons.toLocaleString(undefined, { maximumFractionDigits: 4 })} N
  </p>
</div>
