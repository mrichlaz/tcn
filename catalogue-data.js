const productCategories = [
  {
    id: 'mechanical',
    number: '01',
    title: 'Mechanical',
    strapline: 'Pumps, valves, seals, piping and process components from KSB, Crane, Jamesbury and AESSEAL.',
    imageKey: 'productMechanical',
    imageSource: 'Unsplash',
    tags: ['Pumps', 'Valves', 'Piping', 'Process equipment'],
    groups: [
      { title: 'Pumps & sealing systems', items: ['KSB, MONO & AJAX pump components', 'FLSmidth filter intake & mechanical seals', 'Vickers hydraulic pumps & motors', 'Southern Cross and Allen Gwynnes pumps', 'AESSEAL mechanical seals'] },
      { title: 'Valves, controls & actuation', items: ['Jamesbury, Jordan, Crane & Viking valves', 'Rotork actuators and valve parts', 'ARGO-HYTOS directional control valves', 'IGEMA, Grinnell, Everlasting & Potter systems', 'Safety relief, pressure-regulating & deluge valves'] },
      { title: 'Piping, fittings & materials', items: ['4130 seamless pipes and fittings', 'Carbon steel, alloy steel & stainless steel pipe', 'Square and hollow sections', 'Pipe elbows, tees and reducers', 'Polyurethane lining, rubber hose and wire mesh'] },
      { title: 'Specialist systems', items: ['Kraissl strainers and filtration', 'Spirax Sarco steam traps', 'Wiggins service systems', 'ISO portable tanks', 'Sandwich panels and industrial materials'] }
    ]
  },
  {
    id: 'electrical',
    number: '02',
    title: 'Electrical',
    strapline: 'Power distribution, protection and cabling from Siemens, ABB, Schneider Electric and Panduit.',
    imageKey: 'productElectrical',
    imageSource: 'Unsplash',
    tags: ['Power distribution', 'Cabling', 'Controls', 'Hazardous area'],
    groups: [
      { title: 'Cabling & connectivity', items: ['Panduit cable assemblies and fibre optic systems', 'CMP cable glands and connectors', 'Corning fibre optic cables, cabinets and splicing systems', '3M joints, terminations and electrical tapes'] },
      { title: 'Power, protection & distribution', items: ['Siemens monitoring, protection and power distribution', 'ABB power products', 'Schneider Electric circuit protection, batteries and transformers', 'Clipsal circuit protection and industrial switchgear'] },
      { title: 'Enclosures & hazardous-area equipment', items: ['Crouse-Hinds cast boxes, covers and gaskets', 'Hammond junction boxes', 'Cooper Electrical bolted framing and hazardous-area signalling', 'Sealsafe flexible conduit and connectors'] },
      { title: 'Drives & operating components', items: ['Toshiba fan power drives and AC cards', 'Twin Disc power transmission equipment', 'Turck speed and motion switches', 'GO Switches leverless limit switches'] }
    ]
  },
  {
    id: 'instrument-control',
    number: '03',
    title: 'Instrument & control',
    strapline: 'Gauges, transmitters, analysers and control components from Ashcroft, ASCO, SMC and Clark Reliance.',
    imageKey: 'productInstrumentControl',
    imageSource: 'TCN placeholder',
    tags: ['Process measurement', 'Pressure', 'Pneumatics', 'Detection'],
    groups: [
      { title: 'Level, analysis & measurement', items: ['Clark Reliance level gauges and transmitters', 'PH and DO analysers', 'Weighing scale systems', 'Ashcroft pressure and temperature gauges'] },
      { title: 'Pressure & pneumatic control', items: ['ASCO pressure transmitters', 'SMC booster regulators and exhaust silencers', 'Pressure gauges and related components', 'Industrial spray nozzle systems'] },
      { title: 'Alarm & operational protection', items: ['Notifier heat detection and fire alarm parts', 'Potter VSR flow switches', 'Bender Isometer monitoring', 'Instrument accessories and spare parts'] }
    ]
  },
  {
    id: 'survey-safety',
    number: '04',
    title: 'Survey & safety',
    strapline: 'Field navigation, personal protective equipment and work-at-height systems from Garmin, 3M and Petzl.',
    imageKey: 'productSurveySafety',
    imageSource: 'Unsplash',
    tags: ['Survey', 'PPE', 'Fall protection', 'Detection'],
    groups: [
      { title: 'Survey & navigation', items: ['Silva Ranger compasses', 'Garmin GPS map systems', 'Field navigation accessories'] },
      { title: 'Personal protective equipment', items: ['3M disposable and reusable respiratory protection', 'Hearing protection', 'Head, eye and face protection', 'Welding and body protection'] },
      { title: 'Working-at-height & site response', items: ['Petzl Grillon adjustable lanyards', 'Environmental detection', 'Safety accessories and site equipment'] }
    ]
  },
  {
    id: 'lighting',
    number: '05',
    title: 'TCN lighting',
    strapline: 'Solar street and flood lighting, explosion-proof fittings, and roadway and tunnel lighting.',
    imageKey: 'productLighting',
    imageSource: 'TCN placeholder',
    tags: ['Solar street', 'Flood light', 'Ex-proof', 'Industrial'],
    groups: [
      { title: 'Solar lighting', items: ['GT-BJ-60W solar street light', 'Solar flood light, 200W series', 'Remote, time and light-control systems'] },
      { title: 'Industrial & hazardous-area lighting', items: ['BAT95-T LED explosion-proof light', 'Sylvania roadway, tunnel and industrial lighting', 'Clipsal commercial and industrial lighting'] },
      { title: 'Product support', items: ['Specification-led selection', 'Site and operating-condition consultation', 'Warranty and delivery support'] }
    ]
  },
  {
    id: 'flashlights',
    number: '06',
    title: 'Flashlights',
    strapline: 'Portable Nitecore lighting for inspection, emergency response and mobile maintenance.',
    imageKey: 'productFlashlights',
    imageSource: 'TCN placeholder',
    tags: ['Portable lighting', 'Inspection', 'Emergency'],
    groups: [
      { title: 'Nitecore range', items: ['Nitecore TUP', 'Nitecore Concept 2', 'Nitecore TM10K', 'Nitecore P12 / GTS'] },
      { title: 'Use environments', items: ['Site inspection', 'Emergency response', 'Mobile maintenance teams'] }
    ]
  },
  {
    id: 'aluminium-structures',
    number: '07',
    title: 'Aluminium structures',
    strapline: 'Aluminium structural systems for permanent and semi-permanent buildings, supplied and installed.',
    imageKey: 'productAluminiumStructures',
    imageSource: 'Unsplash',
    tags: ['Permanent', 'Semi-permanent', 'Installation', 'Structures'],
    groups: [
      { title: 'Structure systems', items: ['Aluminium structures for permanent buildings', 'Aluminium structures for semi-permanent facilities', 'Stainless steel slide installation'] },
      { title: 'Delivery support', items: ['Design and requirement discussion', 'Supply and installation coordination', 'Site-ready execution support'] }
    ]
  },
  {
    id: 'coatings',
    number: '08',
    title: 'Epoxy & protective coatings',
    strapline: 'Epoxy flooring, anti-corrosive systems, and marine and offshore protective coatings.',
    imageKey: 'productCoatings',
    imageSource: 'Unsplash',
    tags: ['Epoxy floors', 'Protective coatings', 'Lining', 'Marine'],
    groups: [
      { title: 'Floor & industrial protection', items: ['Epoxy coating floors', 'Industrial and protective coatings', 'Anti-corrosive coating systems', 'Heat-reflective and specialist coatings'] },
      { title: 'Marine & offshore protection', items: ['Antifouling systems', 'Container and offshore coatings', 'Water ballast tank and cargo-hold coatings', 'Underwater-applicable coating solutions'] },
      { title: 'Lining & material protection', items: ['Polyurethane lining', 'Glass flake and ultra-durable coatings', 'Caulking materials and rail applications'] }
    ]
  },
  {
    id: 'prefab-capsules',
    number: '09',
    title: 'Prefabricated buildings & capsules',
    strapline: 'Guangsha and GS Housing capsule units, delivered, installed and connected on site.',
    imageKey: 'productPrefabCapsules',
    imageSource: 'Unsplash',
    tags: ['Prefab', 'Capsules', 'Accommodation', 'Rapid deployment'],
    groups: [
      { title: 'Space capsule models', items: ['GS Housing E5 — 28 m²', 'Guangsha E7 — 38 m²', 'Guangsha C60 — 30 m²', 'Guangsha C90 — 38 m²'] },
      { title: 'Core systems', items: ['Galvanised steel structural frame', 'Fluorocarbon-sprayed aluminium alloy housing', 'Thermal, waterproof and moisture-proof structure', 'Integrated lighting, water and electricity systems'] },
      { title: 'Deployment & fit-out', items: ['Transport and crane coordination', 'On-site connection and testing', 'Panoramic balcony options', 'Smart access and intelligent-control options'] }
    ]
  },
  {
    id: 'forklift',
    number: '10',
    title: 'Heli forklift',
    strapline: 'Heli forklifts specified against your load, site conditions and operating requirement.',
    imageKey: 'productForklift',
    imageSource: 'Unsplash',
    tags: ['Material handling', 'Equipment', 'Industrial fleet'],
    groups: [
      { title: 'Equipment enquiry', items: ['Heli forklift supply', 'Capacity and configuration consultation', 'Industrial equipment sourcing', 'Quote on request'] }
    ]
  }
]

window.productCategories = productCategories

window.supplierBrands = [
  { name: 'KSB', discipline: 'Mechanical / pumps', logoKey: 'vendorKsb' },
  { name: 'Rotork', discipline: 'Valve actuation', logoKey: 'vendorRotork' },
  { name: 'Siemens', discipline: 'Electrical systems', logoKey: 'vendorSiemens' },
  { name: 'ABB', discipline: 'Power products', logoKey: 'vendorAbb' },
  { name: 'Schneider Electric', discipline: 'Protection & distribution', logoKey: 'vendorSchneider' },
  { name: '3M', discipline: 'Electrical & safety', logoKey: 'vendor3m' },
  { name: 'AESSEAL', discipline: 'Mechanical sealing', logoKey: 'vendorAesseal' },
  { name: 'Spirax Sarco', discipline: 'Steam systems', logoKey: 'vendorSpiraxSarco' },
  { name: 'Panduit', discipline: 'Electrical infrastructure', logoKey: 'vendorPanduit' },
  { name: 'Corning', discipline: 'Telecommunications', logoKey: 'vendorCorning' },
  { name: 'ASCO', discipline: 'Fluid automation', logoKey: 'vendorAsco' },
  { name: 'SMC', discipline: 'Pneumatics', logoKey: 'vendorSmc' },
  { name: 'Ashcroft', discipline: 'Instrumentation', logoKey: 'vendorAshcroft' },
  { name: 'Notifier', discipline: 'Fire systems', logoKey: 'vendorNotifier' },
  { name: 'Garmin', discipline: 'Survey & navigation', logoKey: 'vendorGarmin' },
  { name: 'Petzl', discipline: 'Work-at-height safety', logoKey: 'vendorPetzl' },
  { name: 'Sylvania', discipline: 'Lighting', logoKey: 'vendorSylvania' },
  { name: 'Clipsal', discipline: 'Electrical accessories', logoKey: 'vendorClipsal' },
  { name: 'Nitecore', discipline: 'Portable lighting', logoKey: 'vendorNitecore' }
]
