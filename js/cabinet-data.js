// =============================================
// HEARTHWOOD CABINETRY — Cabinet Data
// =============================================
// Edit this file to add/remove cabinet types, door styles, or colors.
// Standard widths used by the visualizer are at the bottom.

const CABINET_LINES = {

  line1: {
    id: "line1",
    name: "Craftsman Collection",
    tagline: "Timeless craftsmanship meets everyday living",
    description: "The Craftsman Collection features solid wood construction with traditional joinery techniques, hand-selected materials, and enduring style. Each cabinet is built to be passed down through generations — warm, inviting, and made to last.",
    accentColor: "#C9A96E",
    doorStyles: [
      { id: "shaker",       name: "Shaker",          description: "Clean lines with a classic inset panel — the most popular style in American kitchens." },
      { id: "raised-panel", name: "Raised Panel",     description: "Traditional elegance with dimensional depth and a timeless profile." },
      { id: "flat-panel",   name: "Flat Panel",       description: "Modern simplicity — sleek, streamlined, and versatile." },
      { id: "beadboard",    name: "Beadboard",        description: "Charming cottage-style vertical groove detailing for a relaxed, welcoming feel." },
      { id: "arch",         name: "Cathedral Arch",   description: "Graceful arched top rail for a distinguished, traditional look." }
    ],
    colors: [
      { id: "alabaster", name: "Alabaster White",  hex: "#F2EEE6", cssFilter: "brightness(1.05) saturate(0.6)" },
      { id: "navy",      name: "Midnight Navy",    hex: "#1C2B4A", cssFilter: "brightness(0.28) saturate(2.2) hue-rotate(210deg)" },
      { id: "sage",      name: "Sage Mist",        hex: "#8BA888", cssFilter: "brightness(0.65) saturate(1.6) hue-rotate(100deg)" },
      { id: "greige",    name: "Warm Greige",      hex: "#C2B5A5", cssFilter: "brightness(0.82) saturate(0.75) hue-rotate(28deg)" },
      { id: "charcoal",  name: "Charcoal Slate",   hex: "#4A4F5C", cssFilter: "brightness(0.32) saturate(0.45)" }
    ],
    cabinets: [
      { id: "wall-12",    name: "Wall Cabinet 12\"",    type: "wall",    widthIn: 12, heightIn: 30, depthIn: 12,   price: "From $189", description: "Space-saving wall cabinet — perfect for narrow spaces and above appliances." },
      { id: "wall-24",    name: "Wall Cabinet 24\"",    type: "wall",    widthIn: 24, heightIn: 30, depthIn: 12,   price: "From $279", description: "Versatile mid-size wall cabinet with two adjustable shelves." },
      { id: "wall-30",    name: "Wall Cabinet 30\"",    type: "wall",    widthIn: 30, heightIn: 30, depthIn: 12,   price: "From $319", description: "Our most popular wall cabinet width — fits most kitchen layouts." },
      { id: "wall-36",    name: "Wall Cabinet 36\"",    type: "wall",    widthIn: 36, heightIn: 30, depthIn: 12,   price: "From $369", description: "Wide wall cabinet with three adjustable shelves for maximum storage." },
      { id: "base-24",    name: "Base Cabinet 24\"",    type: "base",    widthIn: 24, heightIn: 34.5, depthIn: 24, price: "From $349", description: "Standard depth base cabinet with one shelf and sturdy plywood box construction." },
      { id: "base-30",    name: "Base Cabinet 30\"",    type: "base",    widthIn: 30, heightIn: 34.5, depthIn: 24, price: "From $399", description: "Classic base cabinet width with two doors and one adjustable shelf." },
      { id: "base-36",    name: "Base Cabinet 36\"",    type: "base",    widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $449", description: "Generous base cabinet — great for high-use areas like the prep zone." },
      { id: "pantry-18",  name: "Pantry Cabinet 18\"",  type: "tall",    widthIn: 18, heightIn: 84,  depthIn: 24,  price: "From $649", description: "Slim pantry tower with 5 adjustable shelves — ideal for small kitchens." },
      { id: "pantry-24",  name: "Pantry Cabinet 24\"",  type: "tall",    widthIn: 24, heightIn: 84,  depthIn: 24,  price: "From $749", description: "Full pantry cabinet with upper and lower doors and multiple shelves." },
      { id: "corner",     name: "Blind Corner Cabinet", type: "corner",  widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $519", description: "Maximizes awkward corner spaces with a full-access blind door design." },
      { id: "island-36",  name: "Island Cabinet 36\"",  type: "island",  widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $489", description: "Finished on all four sides — perfect as a kitchen island base." },
      { id: "island-48",  name: "Island Cabinet 48\"",  type: "island",  widthIn: 48, heightIn: 34.5, depthIn: 24, price: "From $589", description: "Large island base for generous workspace and seating overhang." },
      { id: "drawer-24",  name: "Drawer Base 24\"",     type: "drawer",  widthIn: 24, heightIn: 34.5, depthIn: 24, price: "From $429", description: "Three-drawer base with full-extension glides for organized everyday storage." },
      { id: "sink-36",    name: "Sink Base 36\"",       type: "sink",    widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $419", description: "Open base designed for undermount or drop-in sink installation." }
    ]
  },

  line2: {
    id: "line2",
    name: "Prestige Series",
    tagline: "Where luxury meets innovation",
    description: "The Prestige Series represents the pinnacle of cabinetry craftsmanship. Premium hardwoods, soft-close hardware, dovetail drawers, and sophisticated finishes combine to create kitchens that are as breathtaking as they are functional.",
    accentColor: "#C9A96E",
    doorStyles: [
      { id: "shaker",       name: "Shaker",          description: "Refined shaker profile with a premium inset detail and tight tolerances." },
      { id: "raised-panel", name: "Raised Panel",     description: "Grand raised panel with an ogee profile — commanding and sophisticated." },
      { id: "flat-panel",   name: "Flat Panel",       description: "European-inspired slab door — ultra-modern, bold, and architectural." },
      { id: "beadboard",    name: "Beadboard",        description: "Elevated bead detailing with a premium lacquer finish for refined cottage style." },
      { id: "arch",         name: "Cathedral Arch",   description: "Dramatic cathedral arch top rail — a statement piece for any kitchen." }
    ],
    colors: [
      { id: "alabaster", name: "Alabaster White",  hex: "#F2EEE6", cssFilter: "brightness(1.05) saturate(0.6)" },
      { id: "navy",      name: "Midnight Navy",    hex: "#1C2B4A", cssFilter: "brightness(0.28) saturate(2.2) hue-rotate(210deg)" },
      { id: "sage",      name: "Sage Mist",        hex: "#8BA888", cssFilter: "brightness(0.65) saturate(1.6) hue-rotate(100deg)" },
      { id: "greige",    name: "Warm Greige",      hex: "#C2B5A5", cssFilter: "brightness(0.82) saturate(0.75) hue-rotate(28deg)" },
      { id: "charcoal",  name: "Charcoal Slate",   hex: "#4A4F5C", cssFilter: "brightness(0.32) saturate(0.45)" }
    ],
    cabinets: [
      { id: "wall-12",    name: "Wall Cabinet 12\"",    type: "wall",    widthIn: 12, heightIn: 42, depthIn: 12,   price: "From $299", description: "Premium narrow wall cabinet — soft-close hinges, dovetail back panel, full-height." },
      { id: "wall-24",    name: "Wall Cabinet 24\"",    type: "wall",    widthIn: 24, heightIn: 42, depthIn: 12,   price: "From $419", description: "Full-height wall cabinet with adjustable glass-ready shelves and LED-ready interior." },
      { id: "wall-30",    name: "Wall Cabinet 30\"",    type: "wall",    widthIn: 30, heightIn: 42, depthIn: 12,   price: "From $479", description: "Prestige wall cabinet — standard with integrated LED light strip channel." },
      { id: "wall-36",    name: "Wall Cabinet 36\"",    type: "wall",    widthIn: 36, heightIn: 42, depthIn: 12,   price: "From $549", description: "Grand wall cabinet with glass-insert-ready door option and full-extension shelves." },
      { id: "base-24",    name: "Base Cabinet 24\"",    type: "base",    widthIn: 24, heightIn: 34.5, depthIn: 24, price: "From $529", description: "Premium base with full-extension soft-close drawers and dovetail joinery throughout." },
      { id: "base-30",    name: "Base Cabinet 30\"",    type: "base",    widthIn: 30, heightIn: 34.5, depthIn: 24, price: "From $589", description: "Classic Prestige base — two doors, dovetail drawer, adjustable shelf with edge banding." },
      { id: "base-36",    name: "Base Cabinet 36\"",    type: "base",    widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $649", description: "Spacious base cabinet with pull-out shelf option and premium concealed hinges." },
      { id: "pantry-18",  name: "Pantry Cabinet 18\"",  type: "tall",    widthIn: 18, heightIn: 96,  depthIn: 24,  price: "From $949", description: "96\" tall pantry tower with full-extension pull-out shelves and soft-close mechanisms." },
      { id: "pantry-24",  name: "Pantry Cabinet 24\"",  type: "tall",    widthIn: 24, heightIn: 96,  depthIn: 24,  price: "From $1,099", description: "Grand pantry tower with built-in spice rack, pull-out baskets, and 4-way adjustable shelves." },
      { id: "corner",     name: "Lazy Susan Corner",    type: "corner",  widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $749", description: "360° full-access lazy susan — no wasted corner space, smooth bearing rotation." },
      { id: "island-36",  name: "Island Cabinet 36\"",  type: "island",  widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $699", description: "Prestige island base — finished back panel, two-sided access, soft-close doors." },
      { id: "island-48",  name: "Island Cabinet 48\"",  type: "island",  widthIn: 48, heightIn: 34.5, depthIn: 24, price: "From $849", description: "Statement island cabinet with seating overhang option and decorative panel ends." },
      { id: "drawer-24",  name: "Drawer Base 24\"",     type: "drawer",  widthIn: 24, heightIn: 34.5, depthIn: 24, price: "From $629", description: "Five-drawer tower with custom wood drawer organizers and undermount soft-close guides." },
      { id: "sink-36",    name: "Sink Base 36\"",       type: "sink",    widthIn: 36, heightIn: 34.5, depthIn: 24, price: "From $599", description: "Premium sink base — integrated tip-out tray, finished interior, and heavy-duty hinges." }
    ]
  }

};

// Standard cabinet widths used by the Visualizer (in inches, priority order)
const STANDARD_WIDTHS = [36, 33, 30, 27, 24, 21, 18, 15, 12];

// Cabinet type display labels
const CABINET_TYPE_LABELS = {
  wall:   "Wall Cabinet",
  base:   "Base Cabinet",
  tall:   "Tall / Pantry",
  corner: "Corner Cabinet",
  island: "Island Cabinet",
  drawer: "Drawer Base",
  sink:   "Sink Base"
};
