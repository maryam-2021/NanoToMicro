/**
 * Physical constants and equations for theoretical propulsion,
 * magnetic levitation pressure, and nanoscale quantum cavity forces.
 */

export const PHYSICAL_CONSTANTS = {
  VACUUM_PERMEABILITY: 4 * Math.PI * 1e-7, // mu_0 in H/m or T*m/A
  SPEED_OF_LIGHT: 299792458, // c in m/s
  REDUCED_PLANCK: 1.054571817e-34, // hbar in J*s
  STANDARD_GRAVITY: 9.80665, // g in m/s^2
  ELECTRON_VOLT: 1.602176634e-19 // J
};

export const ANTIGRAVITY_CONCEPTS = [
  {
    id: 'magnetic-pressure',
    name: 'Magnetic Pressure Levitation',
    formula: 'P_{mag} = \\frac{B^2}{2\\mu_0}',
    latex: 'P_{mag} = B^2 / (2 \\mu_0)',
    description: 'A magnetic field creates an effective energy density that acts as an outward pressure. In superconductors exhibiting the Meissner effect, this magnetic pressure completely repels external fields, enabling stable passive levitation against gravity.',
    realWorld: 'Maglev trains, superconducting magnetic bearings, and tokomak plasma containment rely directly on this magnetic pressure barrier.',
    parameters: [
      { name: 'B (Magnetic Flux Density)', symbol: 'B', unit: 'Tesla (T)' },
      { name: 'µ₀ (Permeability of Free Space)', symbol: 'µ₀', value: '4π × 10⁻⁷ H/m' }
    ]
  },
  {
    id: 'casimir-cavity',
    name: 'Quantum Casimir Force',
    formula: 'P_{Casimir} = \\frac{\\pi^2 \\hbar c}{240 d^4}',
    latex: 'P = (\\pi^2 \\hbar c) / (240 d^4)',
    description: 'At sub-micron and nanometer separations (d < 100 nm), the exclusion of vacuum quantum fluctuation modes between conducting boundaries exerts a measurable physical pressure. Under asymmetric geometries (e.g. metamaterials), researchers investigate negative radiation pressure configurations.',
    realWorld: 'MEMS/NEMS stiction, atomic force microscopy (AFM) calibration, and quantum vacuum energy research.',
    parameters: [
      { name: 'd (Plate Separation)', symbol: 'd', unit: 'Nanometers (nm)' },
      { name: 'ħ (Reduced Planck Constant)', symbol: 'ħ', value: '1.05457 × 10⁻³⁴ J·s' },
      { name: 'c (Speed of Light)', symbol: 'c', value: '299,792,458 m/s' }
    ]
  },
  {
    id: 'diamagnetic-levitation',
    name: 'Diamagnetic Force Density',
    formula: 'F_z = \\frac{\\chi}{\\mu_0} B \\frac{\\partial B}{\\partial z}',
    latex: 'F_z = (\\chi / \\mu_0) B (dB/dz)',
    description: 'Diamagnetic materials (such as pyrolytic graphite, bismuth, and water) generate an opposing magnetic moment when exposed to a magnetic gradient. When the magnetic force exceeds mg (gravity), room-temperature levitation is achieved without power input.',
    realWorld: 'Levitation of pyrolytic graphite sheets over neodymium magnet arrays, levitation of water droplets in high-field solenoids (16+ Tesla).'
  }
];
