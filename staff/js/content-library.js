'use strict';

// NOTE TO OWNER: Replace any youtubeId value that is not 11 alphanumeric/dash/underscore
// characters with a real YouTube video ID. Those items will show a "Video coming soon"
// placeholder until replaced.

const CONTENT_LIBRARY = (() => {

  // Anchor: first Monday of Week 1
  const ANCHOR = new Date('2026-03-09T12:00:00');

  const WEEK_THEMES = [
    'Week 1 — Chicago Voices: Nate Berkus & the Midwest Masters',
    'Week 2 — National Icons: Wearstler, Gaines, Berk & Wright',
    'Week 3 — Storytelling & the Business of Design',
    'Week 4 — Deep Dives: Technique, Process & Material',
    'Week 5 — Synthesis: Curating Your Design Voice'
  ];

  const DAY_THEMES = [
    'Trends & Inspiration',   // Mon
    'Craft & Technique',      // Tue
    'Designer Stories',       // Wed
    'Midwest Spotlight',      // Thu
    'Recap & Synthesis'       // Fri
  ];

  const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // ── Helpers ──────────────────────────────────────────────────────────
  function img(id, caption) {
    return { url: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`, caption };
  }

  function avatar(name) {
    const encoded = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encoded}&size=200&background=2C1A0E&color=FAF7F2&font-size=0.38&bold=true`;
  }

  // ── Week 1 ─────────────────────────────────────────────────────────
  const WEEK1 = [
    // Mon — Nate Berkus — Trends & Inspiration
    {
      designer: 'Nate Berkus',
      location: 'Chicago, IL',
      weekTheme: WEEK_THEMES[0],
      dayTheme: DAY_THEMES[0],
      images: [
        img('1586023492125-27b2c045efd7', 'Nate Berkus — The Warm Edit: layered neutrals with organic texture'),
        img('1615873968403-89e068629265', 'Brass fixtures meet matte ceramics — a Berkus signature move'),
        img('1616486338812-3dadae4b4ace', 'Open shelving with curated objects — storytelling through display'),
        img('1543489822-c49534f3271f', 'Warm whites and woven textiles — the Berkus comfort code'),
        img('1531835551805-16d864c8d17e', 'Collected, not decorated — Nate\'s design philosophy in practice')
      ],
      social: {
        platform: 'Instagram',
        handle: '@nateberkus',
        url: 'https://www.instagram.com/nateberkus/',
        bio: 'Emmy-winning designer and TV host, Chicago native. Known for interiors that feel personally collected rather than professionally decorated. Creative Director of Nate Berkus Associates. Author of "The Things That Matter."',
        photo: avatar('Nate Berkus'),
        featuredPost: 'This week\'s obsession: unlacquered brass hardware aging naturally over time. The imperfection IS the point. Patina is a story.',
        studyPrompt: 'Browse Nate\'s feed and identify 3 recurring materials or finishes across different projects. What emotional tone do they create — and how could that translate to a cabinet finish?'
      },
      article: {
        title: 'How Nate Berkus Designs Rooms That Feel Like You',
        source: 'Architectural Digest',
        tag: 'Design Philosophy',
        heroImage: img('1615873968403-89e068629265', '').url,
        takeaways: [
          'Always start with the client\'s most meaningful objects — not a color palette',
          'Layering (not matching) is the key to rooms that feel lived-in and authentic',
          'Natural materials — linen, leather, wood, stone — age beautifully and tell stories',
          'Negative space is as important as what you place in a room',
          '"One unexpected element" rule: add something that surprises you — it wakes a room up'
        ],
        url: 'https://www.architecturaldigest.com/story/nate-berkus-design-philosophy'
      },
      video: {
        title: 'Nate Berkus Gives a Tour of His New York Apartment',
        channel: 'Architectural Digest',
        youtubeId: 'TODO_NateBerkus_AD_ApartmentTour',
        description: 'Nate Berkus walks through his personal apartment explaining every design decision — from collected vintage objects to layered textiles — revealing the thinking behind his deeply personal approach.',
        tags: ['Home Tour', 'Layering', 'Collected Objects', 'Chicago Designer']
      }
    },

    // Tue — Angela Rose — Craft & Technique
    {
      designer: 'Angela Rose',
      location: 'Chicago, IL',
      weekTheme: WEEK_THEMES[0],
      dayTheme: DAY_THEMES[1],
      images: [
        img('1556909114-f6e7ad7d3136', 'Angela Rose — white kitchen with soft wood accents and clean sightlines'),
        img('1600585154340-be6161a56a0c', 'Shaker cabinetry in soft white — timeless craft, modern sensibility'),
        img('1556909172-54557c7e4fb7', 'Open-concept living — how natural light moves through the plan'),
        img('1484101403633-562f891dc89a', 'Cabinet detail — inset doors, beaded frames, soft-close hardware'),
        img('1582063289852-62e3ba2747f8', 'Material palette board — the Angela Rose method for creating cohesion')
      ],
      social: {
        platform: 'Instagram',
        handle: '@angelarosehome',
        url: 'https://www.instagram.com/angelarosehome/',
        bio: 'Chicago-based designer specializing in bright, airy interiors with a focus on functional family homes. Known for her approachable, livable aesthetic and deep expertise in kitchen and bath renovation.',
        photo: avatar('Angela Rose'),
        featuredPost: 'Cabinet hardware update: switched to unlacquered brass pulls on the island and aged nickel on the perimeter. The mix is EVERYTHING. Don\'t match — contrast.',
        studyPrompt: 'Study 3 of Angela\'s kitchen projects. How does she balance white/light tones with warmth? List 3 specific techniques that could apply directly to Hearthwood cabinet presentations.'
      },
      article: {
        title: 'The Art of the Kitchen Renovation: Angela Rose\'s Process Revealed',
        source: 'House Beautiful',
        tag: 'Craft & Technique',
        heroImage: img('1556909114-f6e7ad7d3136', '').url,
        takeaways: [
          'Start with "non-negotiables" — things the client will not compromise on',
          'Cabinet style sets the entire tone of a kitchen; choose it before anything else',
          'Mix metal finishes intentionally — 2 metals max, one dominant and one accent',
          'Lighting is the most underinvested element in most kitchen renovations',
          'Always specify the range hood first — its scale sets proportions for everything around it'
        ],
        url: 'https://www.housebeautiful.com/room-decorating/kitchens/a39745023/angela-rose-home-kitchen-design/'
      },
      video: {
        title: 'Full Chicago Kitchen Renovation — Before & After with Angela Rose',
        channel: 'Angela Rose Home',
        youtubeId: 'TODO_AngelaRose_KitchenReno',
        description: 'Angela Rose walks through a complete Chicago kitchen renovation explaining material selections, cabinet layout decisions, and how she balanced client needs with her design vision.',
        tags: ['Kitchen Renovation', 'Cabinet Design', 'Before & After', 'Chicago Designer']
      }
    },

    // Wed — Genevieve Gorder — Designer Stories
    {
      designer: 'Genevieve Gorder',
      location: 'Minneapolis, MN',
      weekTheme: WEEK_THEMES[0],
      dayTheme: DAY_THEMES[2],
      images: [
        img('1505691938895-1758d7feb511', 'Genevieve Gorder — bold color meets global textile in a Midwest living room'),
        img('1519710164239-da123dc03ef4', 'Pattern mixing — the Gorder signature of fearless layering'),
        img('1493663284031-b7e3aefcae8e', 'Global artifacts as design anchors — objects that carry history'),
        img('1540518614846-7eded433c457', 'Color confidence — deep jewel tones grounded by natural wood'),
        img('1567538096621-38d2284b23ff', 'Textile layering: kilim, linen, velvet — the art of the collected room')
      ],
      social: {
        platform: 'Instagram',
        handle: '@genevievegorder',
        url: 'https://www.instagram.com/genevievegorder/',
        bio: 'Minneapolis-born designer, TV host (Trading Spaces, HGTV), and global traveler. Known for fearless color, global textiles, and interiors that reflect the full story of the people who live in them.',
        photo: avatar('Genevieve Gorder'),
        featuredPost: 'Just back from Oaxaca with an incredible haul of hand-woven pieces. Watch your rooms — they\'re about to get very, very layered.',
        studyPrompt: 'Find one Genevieve Gorder project and identify: (1) the anchor color, (2) the global material or pattern present, and (3) one technique you could adapt for a Hearthwood client consultation.'
      },
      article: {
        title: 'Genevieve Gorder: Why Fear Is the Enemy of Great Design',
        source: 'Elle Decor',
        tag: 'Designer Interview',
        heroImage: img('1505691938895-1758d7feb511', '').url,
        takeaways: [
          '"Safe" rooms are forgettable — the most memorable spaces always have at least one bold choice',
          'Global travel is the best design education; textiles carry the history of a culture',
          'Color should follow emotion: what do you want to FEEL in this room?',
          'A room without personal objects is a hotel, not a home',
          'Design should evolve with its inhabitants — never fear changing what no longer serves you'
        ],
        url: 'https://www.elledecor.com/design-decorate/room-ideas/a39745023/genevieve-gorder-design-interview/'
      },
      video: {
        title: 'Genevieve Gorder\'s Design Philosophy: Color, Story & Global Influence',
        channel: 'HGTV',
        youtubeId: 'TODO_GenevieveGorder_HGTV',
        description: 'Genevieve Gorder discusses her design journey from Minneapolis to global stages, her philosophy on color and textiles, and why every room should tell its inhabitant\'s story.',
        tags: ['Design Philosophy', 'Color Theory', 'Global Textiles', 'Midwest Designer']
      }
    },

    // Thu — Kevin O'Gara / Thou Swell — Midwest Spotlight
    {
      designer: "Kevin O'Gara (Thou Swell)",
      location: 'Chicago, IL',
      weekTheme: WEEK_THEMES[0],
      dayTheme: DAY_THEMES[3],
      images: [
        img('1583847268964-b28dc8f51f92', "Thou Swell — modern farmhouse meets Chicago sophistication"),
        img('1600210492493-0946911123ea', "Kevin O'Gara's signature: warm wood tones anchoring a cool white palette"),
        img('1594026112284-02bb6f3352fe', 'Board and batten wall detail — architectural craft meets contemporary ease'),
        img('1571508601891-ca5e7a713859', 'Open shelving styled with intentional restraint — every object earns its place'),
        img('1558618666-fcd25c85cd64', 'Midwest warmth: natural light, linen drapery, white oak underfoot')
      ],
      social: {
        platform: 'Instagram',
        handle: '@thou.swell',
        url: 'https://www.instagram.com/thou.swell/',
        bio: "Kevin O'Gara is the Chicago-based designer and renovation expert behind Thou Swell — a widely followed blog and design studio known for accessible, stylish home content. He bridges professional design and hands-on DIY for real families.",
        photo: avatar("Kevin O'Gara"),
        featuredPost: 'The mudroom reveal is LIVE! Board and batten, built-in bench with cubbies, unlacquered brass hooks. This space went from chaos to calm — full process on the blog.',
        studyPrompt: "Kevin bridges professional design with accessible DIY. List 3 architectural detail techniques from his content that translate directly to Hearthwood cabinet or finish presentations."
      },
      article: {
        title: "How Thou Swell Built a Chicago Design Brand from the Ground Up",
        source: 'Apartment Therapy',
        tag: 'Midwest Spotlight',
        heroImage: img('1583847268964-b28dc8f51f92', '').url,
        takeaways: [
          'A consistent aesthetic is a brand — even before you have a big budget',
          'Architectural details (board & batten, shiplap, built-ins) add lasting value and permanence',
          'Photography and storytelling are as essential as the design itself in the digital era',
          'White oak, linen, and aged iron create a palette that photographs and ages beautifully',
          'Midwest design principle: beauty should be functional, durable, and unpretentious'
        ],
        url: 'https://www.apartmenttherapy.com/thou-swell-kevin-ogara-chicago-design-brand'
      },
      video: {
        title: "Thou Swell — Full Chicago Home Renovation Tour",
        channel: 'Thou Swell',
        youtubeId: 'TODO_ThouSwell_HomeTour',
        description: "Kevin O'Gara walks through his fully renovated Chicago home explaining every architectural detail, material choice, and DIY project that transformed the space.",
        tags: ['Home Tour', 'DIY Design', 'Chicago Renovation', 'Midwest Style']
      }
    },

    // Fri — Studio McGee — Recap & Synthesis
    {
      designer: 'Studio McGee (Shea & Syd McGee)',
      location: 'Salt Lake City, UT',
      weekTheme: WEEK_THEMES[0],
      dayTheme: DAY_THEMES[4],
      images: [
        img('1600607687939-ce8a6c25118c', 'Studio McGee — warm neutrals layered in a Utah family home'),
        img('1600566753190-17f0baa2a6c3', 'McGee signature: arched doorways + warm plaster walls in creamy white'),
        img('1600566752355-35792bedcfea', 'Kitchen in warm white with aged brass hardware and curated open shelves'),
        img('1617806118233-18e1de247200', 'The layered bedroom — linen, texture, and considered restraint'),
        img('1600573472550-8090b5e0745e', 'Week 1 synthesis: the neutral palette in full, confident expression')
      ],
      social: {
        platform: 'Instagram',
        handle: '@studiomcgee',
        url: 'https://www.instagram.com/studiomcgee/',
        bio: 'Shea and Syd McGee founded Studio McGee from a spare bedroom in 2014. Now one of the most-followed design firms in the world, known for warm collected neutrals and approachable luxury. Netflix: Dream Home Makeover.',
        photo: avatar('Studio McGee'),
        featuredPost: 'Friday inspo drop: this entryway has everything we love — arched opening, plaster finish, aged brass, and a moment of pattern underfoot. Save this one.',
        studyPrompt: "It's Recap Friday! Review Monday–Thursday's designers. For each one, write ONE idea you could apply to a Hearthwood cabinet presentation this week. That's your design assignment."
      },
      article: {
        title: "Studio McGee's Recipe for Rooms That Feel Complete",
        source: 'Domino',
        tag: 'Synthesis & Recap',
        heroImage: img('1600607687939-ce8a6c25118c', '').url,
        takeaways: [
          'The "Rule of Three" — group objects in odd numbers for natural visual rhythm',
          'Always add something living: a plant, fresh flowers, or greenery grounds any space',
          'Repeat a material or color in at least 3 places in a room to create true cohesion',
          'The final layer is always textiles — they soften hard surfaces and humanize a space',
          'Week 1 synthesis: great design is personal, purposeful, and patiently edited'
        ],
        url: 'https://www.domino.com/content/studio-mcgee-design-tips-recipe-complete-rooms/'
      },
      video: {
        title: 'Dream Home Makeover — Full Design Process with Shea McGee',
        channel: 'Studio McGee / Netflix',
        youtubeId: 'TODO_StudioMcGee_DreamHome',
        description: 'Shea McGee walks through their complete design process — from concept boards to final reveal — explaining every decision and how they achieve the signature Studio McGee look at scale.',
        tags: ['Design Process', 'Full Makeover', 'Neutral Palette', 'Week 1 Recap']
      }
    }
  ];

  // ── Week 2 ─────────────────────────────────────────────────────────
  const WEEK2 = [
    // Mon — Kelly Wearstler — Trends & Inspiration
    {
      designer: 'Kelly Wearstler',
      location: 'Los Angeles, CA',
      weekTheme: WEEK_THEMES[1],
      dayTheme: DAY_THEMES[0],
      images: [
        img('1507652313519-a5ec9f62f3df', 'Kelly Wearstler — sculptural furniture as architectural statement'),
        img('1545558014-8692077e9b5c', 'Maximalist restraint: every element in dialogue with its neighbor'),
        img('1556909114-f6e7ad7d3136', 'Material tension — rough travertine against polished brass'),
        img('1616486338812-3dadae4b4ace', 'Wearstler color: unexpected, bold, unapologetically saturated'),
        img('1615873968403-89e068629265', 'Art as architecture — the wall as a canvas for scale and drama')
      ],
      social: {
        platform: 'Instagram',
        handle: '@kellywearstler',
        url: 'https://www.instagram.com/kellywearstler/',
        bio: 'Los Angeles-based designer regarded as one of the most influential voices in American interiors. Known for bold, layered interiors that blur the line between design and fine art. Her firm KW Studio has shaped hotels, residences, and retail spaces worldwide.',
        photo: avatar('Kelly Wearstler'),
        featuredPost: 'New travertine samples just arrived. The variation in this stone is unlike anything — it\'s basically art before we even do anything with it.',
        studyPrompt: 'Kelly is known for material tension — pairing rough with refined. Identify 3 contrasting material pairings in her work and note how you might use a similar tension in a Hearthwood cabinet finish combination.'
      },
      article: {
        title: 'Kelly Wearstler: Designing Without Fear of the Extraordinary',
        source: 'Architectural Digest',
        tag: 'Trends & Inspiration',
        heroImage: img('1507652313519-a5ec9f62f3df', '').url,
        takeaways: [
          'Great design should provoke a feeling, not just please the eye',
          'Luxury is about quality and intention, not price — the humblest material can be luxurious',
          'Always design for the inhabitant\'s life, not a magazine photograph',
          'Scale is the most powerful tool in a designer\'s arsenal — use it bravely',
          'Art collecting and design are inseparable — curate your objects with the same rigor as your finishes'
        ],
        url: 'https://www.architecturaldigest.com/story/kelly-wearstler-design-philosophy'
      },
      video: {
        title: 'Kelly Wearstler Gives a Tour of Her LA Home',
        channel: 'Architectural Digest',
        youtubeId: 'TODO_KellyWearstler_ADTour',
        description: 'Kelly Wearstler opens her Los Angeles home and studio, walking through the bold choices, collected objects, and material experiments that define her singular aesthetic.',
        tags: ['Home Tour', 'Bold Design', 'Material Tension', 'LA Designer']
      }
    },

    // Tue — Joanna Gaines — Craft & Technique
    {
      designer: 'Joanna Gaines',
      location: 'Waco, TX',
      weekTheme: WEEK_THEMES[1],
      dayTheme: DAY_THEMES[1],
      images: [
        img('1600585154340-be6161a56a0c', 'Joanna Gaines — shiplap, warm wood, and the Magnolia method'),
        img('1583847268964-b28dc8f51f92', 'Modern farmhouse in practice: clean lines meet raw texture'),
        img('1556909172-54557c7e4fb7', 'Open-concept family living — how Joanna balances beauty with function'),
        img('1594026112284-02bb6f3352fe', 'Board and batten detail — a Magnolia signature used with precision'),
        img('1484101403633-562f891dc89a', 'Kitchen island styling — the layered moment that photographs and lives well')
      ],
      social: {
        platform: 'Instagram',
        handle: '@joannagaines',
        url: 'https://www.instagram.com/joannagaines/',
        bio: 'Co-founder of Magnolia, author, TV host (Fixer Upper / Magnolia Network), and designer based in Waco, TX. Joanna\'s approachable, family-centered modern farmhouse aesthetic has influenced American home design more broadly than perhaps any other designer of the decade.',
        photo: avatar('Joanna Gaines'),
        featuredPost: 'Sometimes the most impactful design move is the simplest one. Today we\'re talking about what happens when you let one beautiful material speak all on its own.',
        studyPrompt: 'Joanna excels at making spaces feel warm and functional for real families. List 3 design choices she makes consistently that you could translate into Hearthwood cabinet or finish recommendations for family clients.'
      },
      article: {
        title: 'The Magnolia Method: How Joanna Gaines Makes Every Room Work',
        source: 'House Beautiful',
        tag: 'Craft & Technique',
        heroImage: img('1600585154340-be6161a56a0c', '').url,
        takeaways: [
          'Function first — a beautiful room that doesn\'t work for the family will never feel like home',
          'Shiplap and natural wood are not trends — they are timeless materials with warmth and texture',
          'The island is the heart of every Magnolia kitchen — proportion it generously',
          'Mix vintage and new — it\'s the contrast that makes a room feel curated, not decorated',
          'Negative space is as intentional in Magnolia work as every placed object'
        ],
        url: 'https://www.housebeautiful.com/room-decorating/kitchens/a39745023/joanna-gaines-magnolia-kitchen-design/'
      },
      video: {
        title: 'Fixer Upper: Joanna Gaines Full Kitchen Renovation Process',
        channel: 'Magnolia Network',
        youtubeId: 'TODO_JoannaGaines_FixerUpper',
        description: 'Joanna Gaines walks through a complete kitchen renovation, explaining her material selections, layout decisions, and the Magnolia philosophy for making a kitchen both beautiful and deeply functional.',
        tags: ['Kitchen Renovation', 'Modern Farmhouse', 'Magnolia Method', 'Craft & Technique']
      }
    },

    // Wed — Bobby Berk — Designer Stories
    {
      designer: 'Bobby Berk',
      location: 'Denver, CO / Los Angeles, CA',
      weekTheme: WEEK_THEMES[1],
      dayTheme: DAY_THEMES[2],
      images: [
        img('1616486338812-3dadae4b4ace', 'Bobby Berk — clean, sophisticated interiors with warm Scandinavian influence'),
        img('1615873968403-89e068629265', 'Calm color palettes with moments of texture and natural material'),
        img('1543489822-c49534f3271f', 'The Queer Eye effect: practical transformation with emotional impact'),
        img('1531835551805-16d864c8d17e', 'Bobby\'s signature: elevated basics that work for real life'),
        img('1567538096621-38d2284b23ff', 'Layered living: how Bobby makes warmth accessible at any budget')
      ],
      social: {
        platform: 'Instagram',
        handle: '@bobbyberk',
        url: 'https://www.instagram.com/bobbyberk/',
        bio: 'Designer, entrepreneur, and TV personality known for his role on Netflix\'s Queer Eye. Bobby\'s work is characterized by clean, warm interiors that prioritize how people feel in a space — proving that great design is emotionally transformative.',
        photo: avatar('Bobby Berk'),
        featuredPost: 'Design doesn\'t have to be expensive. It has to be intentional. Here are 5 moves that cost almost nothing and change everything about a room.',
        studyPrompt: 'Bobby often designs for clients who have never had professional design help before. How does his approach differ from designers working with high-end clients? What can you take from that accessibility mindset?'
      },
      article: {
        title: 'Bobby Berk on Why Design Is Ultimately About Belonging',
        source: 'Elle Decor',
        tag: 'Designer Stories',
        heroImage: img('1616486338812-3dadae4b4ace', '').url,
        takeaways: [
          'Design should make people feel they belong in their own home — that is its highest purpose',
          'Clutter is not a style problem; it\'s a systems problem — solve for storage first',
          'One great light fixture can elevate an entire room more than any furniture purchase',
          'Rugs define space — they are the invisible architecture of a room',
          'Color on walls is underutilized: a painted room communicates confidence and personality'
        ],
        url: 'https://www.elledecor.com/design-decorate/room-ideas/a39745023/bobby-berk-design-philosophy-belonging/'
      },
      video: {
        title: 'Bobby Berk Reveals His Design Process — From Concept to Complete',
        channel: 'Bobby Berk',
        youtubeId: 'TODO_BobbyBerk_DesignProcess',
        description: 'Bobby Berk walks through his design process from initial client meeting to final reveal, explaining how he balances aesthetic vision with emotional intent and practical constraints.',
        tags: ['Design Process', 'Accessible Design', 'Emotional Design', 'Queer Eye']
      }
    },

    // Thu — Frank Lloyd Wright Wisconsin Legacy — Midwest Spotlight
    {
      designer: 'Frank Lloyd Wright (Legacy)',
      location: 'Spring Green, WI',
      weekTheme: WEEK_THEMES[1],
      dayTheme: DAY_THEMES[3],
      images: [
        img('1558618666-fcd25c85cd64', 'Taliesin, Spring Green, WI — organic architecture in dialogue with the land'),
        img('1571508601891-ca5e7a713859', 'Horizontal lines, cantilevered planes — Wright\'s Midwestern prairie language'),
        img('1582063289852-62e3ba2747f8', 'Natural materials in context: wood, stone, brick rooted to the Wisconsin earth'),
        img('1505691938895-1758d7feb511', 'Interior at Taliesin: built-in furniture as architecture, not afterthought'),
        img('1519710164239-da123dc03ef4', 'The prairie palette: ochre, terracotta, sage — the colors of the Midwest horizon')
      ],
      social: {
        platform: 'Instagram (Archive)',
        handle: '@franklloydwright',
        url: 'https://www.instagram.com/franklloydwright/',
        bio: "Frank Lloyd Wright (1867–1959), born in Richland Center, Wisconsin. Widely regarded as the greatest American architect of all time. Creator of Organic Architecture — the philosophy that buildings should emerge from and harmonize with their natural surroundings and the lives of their inhabitants. Taliesin in Spring Green, WI was his home, studio, and school.",
        photo: avatar('Frank Lloyd Wright'),
        featuredPost: 'Architecture is not just what you build. It is how you choose to live. — FLW',
        studyPrompt: "Wright's built-in cabinetry was integral to his architecture — never an add-on. Study one Wright interior (Fallingwater, Taliesin, or Robie House). How does the built-in furniture serve the architecture? How does that philosophy apply to Hearthwood's cabinet design approach?"
      },
      article: {
        title: "Frank Lloyd Wright's Wisconsin: The Prairie Master's Midwest Roots",
        source: 'Architectural Digest',
        tag: 'Midwest Spotlight',
        heroImage: img('1558618666-fcd25c85cd64', '').url,
        takeaways: [
          'Organic Architecture: buildings should grow from the land, not be placed upon it',
          'Built-ins are architecture — cabinetry, shelving, and furniture should be inseparable from the structure',
          'Natural materials used honestly: show wood as wood, stone as stone — never fake or conceal',
          'Horizontal emphasis mirrors the prairie horizon and creates calm, expansive spaces',
          'The Midwest design heritage is one of the richest in America — rooted, honest, and deeply purposeful'
        ],
        url: 'https://www.architecturaldigest.com/story/frank-lloyd-wright-taliesin-wisconsin-legacy'
      },
      video: {
        title: "Taliesin: Frank Lloyd Wright's Wisconsin Home & Studio Tour",
        channel: 'Frank Lloyd Wright Foundation',
        youtubeId: 'TODO_FrankLloydWright_Taliesin',
        description: "A tour of Taliesin in Spring Green, Wisconsin — Frank Lloyd Wright's home, studio, and school — exploring how his organic architecture principles emerged from and reflect the Midwest landscape.",
        tags: ['Architecture Tour', 'Organic Architecture', 'Wisconsin Heritage', 'Built-In Design']
      }
    },

    // Fri — Week 2 Recap — Synthesis
    {
      designer: 'Week 2 Synthesis Panel',
      location: 'National Voices',
      weekTheme: WEEK_THEMES[1],
      dayTheme: DAY_THEMES[4],
      images: [
        img('1600607687939-ce8a6c25118c', 'Week 2 recap — from Wearstler\'s drama to Gaines\' warmth: a full spectrum'),
        img('1600566753190-17f0baa2a6c3', 'Bobby Berk\'s lesson: design is about belonging, not impressing'),
        img('1600566752355-35792bedcfea', 'Joanna Gaines\' principle: function is the foundation of beauty'),
        img('1617806118233-18e1de247200', 'Wright\'s Wisconsin legacy: built-ins as architecture, not furniture'),
        img('1600573472550-8090b5e0745e', 'Synthesis Friday: what connects all 4 designers this week?')
      ],
      social: {
        platform: 'Pinterest',
        handle: 'Design Synthesis Board',
        url: 'https://www.pinterest.com/search/pins/?q=interior+design+process',
        bio: "This week brought four radically different voices — from Wearstler's maximalist drama to Gaines' family warmth to Wright's architectural philosophy. Today we synthesize: what threads connect them all, and what can you pull into your own design practice?",
        photo: avatar('Week Two'),
        featuredPost: 'The best designers share one trait: deep conviction. Whether it\'s Wearstler\'s boldness or Gaines\' warmth — they own their aesthetic completely.',
        studyPrompt: "Name one principle from each of this week's four designers that you now want to actively carry into your cabinet design work. Write them down — this is your Week 2 design manifesto."
      },
      article: {
        title: "What National Designers Teach Us About Regional Authenticity",
        source: 'Domino',
        tag: 'Synthesis & Recap',
        heroImage: img('1600607687939-ce8a6c25118c', '').url,
        takeaways: [
          'National design stars earn their influence by being completely themselves — not by following trends',
          'Every strong design aesthetic has a clear point of view that can be stated in one sentence',
          'Material honesty (Wright) + functional beauty (Gaines) + emotional impact (Berk) + fearless vision (Wearstler) = complete design thinking',
          'Regional roots make design stronger: Midwest values of craft, durability, and honesty are a competitive advantage',
          'Your design voice will emerge from the intersection of your clients\' stories and your deepest convictions'
        ],
        url: 'https://www.domino.com/content/national-design-voices-regional-authenticity/'
      },
      video: {
        title: "Design Thinking 101: How Great Designers Develop a Point of View",
        channel: 'AD PRO',
        youtubeId: 'TODO_Week2Recap_DesignThinking',
        description: 'A masterclass on how the most influential American designers develop, refine, and maintain a distinctive design point of view — and why specificity is always more powerful than trying to please everyone.',
        tags: ['Design Philosophy', 'Point of View', 'Design Career', 'Week 2 Recap']
      }
    }
  ];

  // ── Week 3 ─────────────────────────────────────────────────────────
  function makeStubDay(weekIdx, dayIdx, designer, location, themeOverride) {
    const dayTheme = themeOverride || DAY_THEMES[dayIdx];
    return {
      designer,
      location,
      weekTheme: WEEK_THEMES[weekIdx],
      dayTheme,
      images: [
        img('1586023492125-27b2c045efd7', `${designer} — inspiration image 1`),
        img('1600607687939-ce8a6c25118c', `${designer} — inspiration image 2`),
        img('1556909114-f6e7ad7d3136', `${designer} — inspiration image 3`),
        img('1615873968403-89e068629265', `${designer} — inspiration image 4`),
        img('1600585154340-be6161a56a0c', `${designer} — inspiration image 5`)
      ],
      social: {
        platform: 'Instagram',
        handle: `@${designer.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}`,
        url: `https://www.instagram.com/`,
        bio: `${designer} — featured in Week ${weekIdx + 1}: ${WEEK_THEMES[weekIdx]}. Full content coming in the next update.`,
        photo: avatar(designer),
        featuredPost: 'Content coming soon — this designer\'s full spotlight will be added in the next content update.',
        studyPrompt: `While full content is being prepared: search for ${designer} and find one project that inspires you. Write down 3 specific design choices that resonate and why.`
      },
      article: {
        title: `${designer} — Designer Spotlight`,
        source: 'Architectural Digest',
        tag: dayTheme,
        heroImage: img('1586023492125-27b2c045efd7', '').url,
        takeaways: [
          'Full article content coming in the next portal update',
          `Use today's self-guided research time to explore ${designer}'s portfolio`,
          'Document at least 5 specific design choices you observe in their work',
          'Consider: what is their design "signature" — the one thing you always see?',
          'How might their approach influence your next Hearthwood client consultation?'
        ],
        url: 'https://www.architecturaldigest.com'
      },
      video: {
        title: `${designer} — Video Lecture`,
        channel: 'Content Update Pending',
        youtubeId: 'TODO_REPLACE_VIDEO_ID',
        description: `Full video content for ${designer} will be added in the next content update. Use this time to complete your article reflection or add notes from your research.`,
        tags: [designer, dayTheme, `Week ${weekIdx + 1}`]
      }
    };
  }

  const WEEK3 = [
    makeStubDay(2, 0, 'Emily Henderson', 'Los Angeles, CA'),
    makeStubDay(2, 1, 'Justina Blakeney (The Jungalow)', 'Los Angeles, CA'),
    makeStubDay(2, 2, 'Sarah Richardson', 'Toronto, ON (Broad US Influence)'),
    makeStubDay(2, 3, 'Midwest Regional Architecture Deep Dive', 'Chicago, IL / Milwaukee, WI'),
    makeStubDay(2, 4, 'Business of Design — Building Your Creative Practice', 'National')
  ];

  const WEEK4 = [
    makeStubDay(3, 0, 'Nate Berkus — Material Deep Dive', 'Chicago, IL'),
    makeStubDay(3, 1, 'Joanna Gaines — Kitchen Craft Masterclass', 'Waco, TX'),
    makeStubDay(3, 2, 'Studio McGee — Business Story & Creative Process', 'Salt Lake City, UT'),
    makeStubDay(3, 3, 'Midwest Craftsmanship — Woodworking & Cabinet Heritage', 'Wisconsin / Illinois'),
    makeStubDay(3, 4, 'Material Palette Synthesis — Pulling It All Together', 'National')
  ];

  const WEEK5 = [
    makeStubDay(4, 0, 'Curated Best-Of: Week 1 Highlights', 'Chicago & Midwest'),
    makeStubDay(4, 1, 'Curated Best-Of: Technique Masterclass', 'National'),
    makeStubDay(4, 2, 'Curated Best-Of: Designer Stories', 'National'),
    makeStubDay(4, 3, 'Your Design Voice — Midwest Edition', 'Regional'),
    makeStubDay(4, 4, 'Final Synthesis — 5-Week Reflection & Next Steps', 'National')
  ];

  const WEEKS = [WEEK1, WEEK2, WEEK3, WEEK4, WEEK5];

  // ── Office Skills Plan (Priority 2) ──────────────────────────────────
  // Rotates Mon–Fri every week. Real tasks, not basics — she's already working.
  const OFFICE_PLAN = [
    null, // 0 = Sunday
    {     // 1 = Monday
      topic: 'Professional Email Writing',
      focus: 'Client communication — clear, professional, and on-brand',
      scenario: 'A client emailed asking why their cabinet order hasn\'t been confirmed yet. They sound frustrated. Write a professional reply: acknowledge the concern, give a real update, and confirm the next step. Keep it under 5 sentences.',
      task: 'Write the full email reply in your notes below. Include a greeting, the update, a timeline, and a next step. No filler phrases like "I hope this email finds you well."',
      tip: 'Every NFR client email needs four things: a greeting, one clear update, a timeline, and a next step. If any of those four are missing, rewrite it.'
    },
    {     // 2 = Tuesday
      topic: 'Measurement Accuracy',
      focus: 'Reading site notes and catching errors before they cost money',
      scenario: 'A field note reads: "Wall A = 142", Wall B = 89", Corner filler = 3", end filler = 2". Total cabinet run = 238"." Does this math work? What is wrong or missing?',
      task: 'Do the math in your notes. Write the correct total. Identify the discrepancy. Write exactly what you would ask the Field Manager to re-measure and why.',
      tip: 'When total cabinets + fillers doesn\'t match the wall measurement, something is wrong. You find it now or Scott finds it when he\'s already cutting. Find it now.'
    },
    {     // 3 = Wednesday
      topic: 'Warehouse Inventory',
      focus: 'Delivery cross-check — every item gets verified before it goes on the floor',
      scenario: 'A delivery arrived with: 4 sheets maple ply, 2 sheets MDF, 6 door panels, 1 box of hinges (50 count). The PO shows: 5 sheets maple ply, 2 sheets MDF, 6 door panels, 2 boxes of hinges (50 count each).',
      task: 'List every discrepancy in your notes. For each: what arrived, what was expected, and what\'s the next action — call vendor, update PO, hold delivery, etc.',
      tip: 'Every delivery gets checked against the PO before anything goes on the shelf. A short delivery delays the job. Don\'t assume the count is right.'
    },
    {     // 4 = Thursday
      topic: 'Multitasking & Priority Management',
      focus: 'Triage — deciding what gets done first when everything feels urgent',
      scenario: 'It\'s 9am Thursday. You have: (1) A client calling in 30 minutes about a design change request, (2) A vendor invoice that must be approved today or the account goes on hold, (3) A site measurement that needs to be entered into Mozaik for Scott by noon, (4) Jose asking for an updated proposal by end of day.',
      task: 'In your notes, rank these 1–4. For each, write one sentence: what you\'re doing and why it\'s that priority. Be specific — no vague answers.',
      tip: 'Jose\'s rule: production deadlines that block Scott come first. Then client communication. Then vendor admin. When in doubt, ask Jose — don\'t guess and fall behind.'
    },
    {     // 5 = Friday
      topic: 'Admin Review & Weekly Follow-Up',
      focus: 'Close the week clean — nothing falls through the cracks',
      scenario: 'End of the week. You managed 3 active client projects, received 1 delivery, sent 6 emails, and entered 2 site measurements into Mozaik.',
      task: 'In your notes write: (1) 3 specific things that need follow-up next week — be exact, not vague. (2) Who owns each one. (3) The deadline. If you don\'t know the deadline, that\'s the first thing to find out.',
      tip: 'Friday review is how you go from reactive to proactive. If it\'s written down, it doesn\'t live in your head all weekend. If it\'s not written, it\'s already forgotten.'
    },
    null  // 6 = Saturday
  ];

  function getOfficeContent(dateStr) {
    const date = new Date(dateStr + 'T12:00:00');
    const dow = date.getDay();
    return OFFICE_PLAN[dow] || null;
  }

  // ── Mozaik Training Plan ─────────────────────────────────────────────
  // Anchor: March 16, 2026 = Maria's Week 8 Day 1
  // Each calendar week = one Mozaik training week
  const MOZAIK_ANCHOR = new Date('2026-03-16T12:00:00');
  const MOZAIK_TRAINING_URL = 'https://sites.google.com/view/mozaikonlinehelp/training-videos';

  const MOZAIK_PLAN = {
    // ── Week 8: Custom Modifications & Resizing ──
    8: [
      {
        topic: 'Custom Width Modifications',
        objectives: [
          'Change a standard cabinet to a custom width without losing door and drawer proportions',
          'Apply width changes to multiple cabinets in sequence',
          'Verify modified cabinets fit correctly within the full layout'
        ],
        searchTip: 'Search the training library for: "custom width" or "resize cabinet"',
        practiceTask: 'Open a saved kitchen project. Change one 24" base cabinet to 27". Confirm doors and drawers display correctly in 3D. Save as "[Project]-W8D1".',
        tip: 'Always view the result in 3D after any width change — the 2D plan will not show door proportion issues.',
        youtubeId: 'COMING_SOON_W8D1',
        youtubeTitle: 'How to Resize Cabinet Width — Custom Dimensions Tutorial',
        youtubeChannel: 'Mozaik Software / Cabinet Vision'
      },
      {
        topic: 'Height & Depth Customization',
        objectives: [
          'Adjust cabinet height for non-standard ceiling heights or countertop levels',
          'Modify cabinet depth for shallow-wall or appliance-clearance situations',
          'Stack modifications: change width and height on the same cabinet'
        ],
        searchTip: 'Search the training library for: "cabinet height" or "depth modification"',
        practiceTask: 'Take a standard base cabinet run and change one cabinet to a non-standard height (e.g., 32" instead of 34.5"). Set a wall cabinet to reduced depth (11" instead of 12"). Save as "[Project]-W8D2".',
        tip: 'Height changes affect countertop alignment — always check the countertop layer after modifying base cabinet heights.',
        youtubeId: 'COMING_SOON_W8D2',
        youtubeTitle: 'Cabinet Height & Depth Modifications — Woodworking Tutorial',
        youtubeChannel: 'Woodworking Wisdom'
      },
      {
        topic: 'Specialty Configurations — Fillers, Angles & Transitions',
        objectives: [
          'Add filler panels between cabinets and walls',
          'Create angled or corner transitions between cabinet runs',
          'Use Mozaik\'s built-in specialty cabinet types for problem corners'
        ],
        searchTip: 'Search the training library for: "filler" or "corner cabinet" or "angled"',
        practiceTask: 'In an L-shape layout, add a filler on each exposed wall end. Add a corner base cabinet at the turn. View in 3D and confirm no gaps. Save as "[Project]-W8D3".',
        tip: 'Filler panels must match the cabinet finish — apply the same door style and color to fillers before generating the cut list.',
        youtubeId: 'COMING_SOON_W8D3',
        youtubeTitle: 'Kitchen Corner Cabinet & Filler Installation Tutorial',
        youtubeChannel: 'Kitchen Design Pro'
      },
      {
        topic: 'Combining Modifications on Full Layouts',
        objectives: [
          'Apply multiple modification types across a complete kitchen layout',
          'Check for conflicts between adjacent modified cabinets',
          'Regenerate the cut list after modifications and verify totals'
        ],
        searchTip: 'Search the training library for: "full layout" or "multiple modifications"',
        practiceTask: 'Build a full 10\'x12\' kitchen. Apply at least 3 different modification types (width, height, filler). Generate the cut list. Save as "[Project]-W8D4".',
        tip: 'After combining modifications, always generate a fresh cut list — cached data can show the pre-modification dimensions.',
        youtubeId: 'COMING_SOON_W8D4',
        youtubeTitle: 'Full Kitchen Cabinet Layout Design Tutorial',
        youtubeChannel: 'Cabinet Design Academy'
      },
      {
        topic: 'Week 8 Review — Practice Kitchen',
        objectives: [
          'Complete a full kitchen using all Week 8 skills without reference',
          'Modifications must include: custom width, non-standard height, fillers',
          'Final deliverable: 3D view + cut list, ready to show Jose'
        ],
        searchTip: 'No new videos today — apply everything from this week.',
        practiceTask: 'Build a complete kitchen from a client brief (ask Jose for a real project or use a past one). Apply all Week 8 modification types. Generate a 3D view and cut list. This is your weekly check-in deliverable for Jose on Friday.',
        tip: 'Friday check-in with Jose: show the 3D view, walk through the modifications you made, and explain one decision you made during the build.',
        youtubeId: 'COMING_SOON_W8D5',
        youtubeTitle: 'Kitchen Cabinet Design Planning Overview',
        youtubeChannel: 'Kitchen Design Pro',
        quiz: [
          {
            q: 'After changing a cabinet width, what must you always do before finalizing?',
            options: ['Save the file immediately', 'Check the result in 3D view', 'Regenerate the floor plan', 'Print the cut list'],
            answer: 1
          },
          {
            q: 'Height changes on a base cabinet affect what other element?',
            options: ['Wall cabinet alignment', 'Countertop alignment', 'Filler panel width', 'Door swing clearance'],
            answer: 1
          },
          {
            q: 'Filler panels must match what on the adjacent cabinet?',
            options: ['Width dimensions', 'Door style and color (finish)', 'Box depth', 'Hardware style only'],
            answer: 1
          },
          {
            q: 'After combining multiple modifications, what must you always regenerate?',
            options: ['The floor plan view', 'The cut list', 'The room dimensions', 'The 2D elevation'],
            answer: 1
          },
          {
            q: 'What does the Friday check-in deliverable for Week 8 require?',
            options: ['Floor plan only', '3D view only', '3D view + cut list', 'Written summary only'],
            answer: 2
          }
        ]
      }
    ],

    // ── Week 9: Advanced Layout & Space Planning ──
    9: [
      {
        topic: 'L-Shape Kitchen Layouts',
        objectives: [
          'Set up an L-shape room correctly in Mozaik',
          'Place cabinet runs along two walls with a proper corner transition',
          'Ensure countertop wraps the corner cleanly in the 3D view'
        ],
        searchTip: 'Search the training library for: "L-shape" or "two-wall kitchen"',
        practiceTask: 'Build a 10\'×10\' L-shape kitchen. One run on each wall, corner base cabinet at the turn, wall cabinets above both runs. Generate 3D view. Save as "[Project]-W9D1".',
        tip: 'In an L-shape, always place the corner cabinet first — then fill outward from it on both sides.',
        youtubeId: 'COMING_SOON_W9D1',
        youtubeTitle: 'L-Shape Kitchen Layout Design Tutorial',
        youtubeChannel: 'Kitchen Design Pro'
      },
      {
        topic: 'Island & Peninsula Design',
        objectives: [
          'Add a freestanding island to an existing kitchen layout',
          'Set island dimensions and clearances (minimum 42" aisle)',
          'Apply a different finish or door style to the island vs. perimeter'
        ],
        searchTip: 'Search the training library for: "island" or "peninsula"',
        practiceTask: 'Take your W9D1 L-shape kitchen. Add a 36"×60" island centered in the room with 42" clearance on all sides. Apply a contrasting finish to the island. Save as "[Project]-W9D2".',
        tip: 'Island aisle clearance is a code issue, not just a design preference — always verify minimums before sending to a client.',
        youtubeId: 'COMING_SOON_W9D2',
        youtubeTitle: 'Kitchen Island Design & Clearance Tutorial',
        youtubeChannel: 'Cabinet Design Academy'
      },
      {
        topic: 'Awkward Spaces — Soffits, Bulkheads & Irregular Walls',
        objectives: [
          'Add a soffit above wall cabinets in Mozaik',
          'Handle walls that are not square or have offsets',
          'Use Mozaik\'s room drawing tools to set up irregular room shapes'
        ],
        searchTip: 'Search the training library for: "soffit" or "irregular room" or "bulkhead"',
        practiceTask: 'Build a kitchen with a soffit above the wall cabinet run. Set one wall at a slight offset (2" jog). Verify the 3D view looks correct. Save as "[Project]-W9D3".',
        tip: 'When a client says their kitchen is "not square," measure from both ends of each wall — even a 1" difference changes the layout significantly.',
        youtubeId: 'COMING_SOON_W9D3',
        youtubeTitle: 'Kitchen Soffit & Bulkhead Cabinet Design Tutorial',
        youtubeChannel: 'Woodworking Wisdom'
      },
      {
        topic: 'U-Shape & Galley Layouts',
        objectives: [
          'Build a U-shape kitchen with cabinet runs on three walls',
          'Set up a galley kitchen with runs on two parallel walls',
          'Verify clearances and check for visual balance in 3D'
        ],
        searchTip: 'Search the training library for: "U-shape" or "galley kitchen"',
        practiceTask: 'Build both a U-shape and a galley layout in the same session. U-shape: 8\'×10\' room. Galley: 8\'×14\' room with 48" clearance between runs. Save each. Save as "[Project]-W9D4".',
        tip: 'Galley kitchens need a minimum 48" between runs for two people to work. Always check this before the client visit.',
        youtubeId: 'COMING_SOON_W9D4',
        youtubeTitle: 'U-Shape & Galley Kitchen Layout Design',
        youtubeChannel: 'Kitchen Design Pro'
      },
      {
        topic: 'Week 9 Review — Full Layout Challenge',
        objectives: [
          'Choose any layout type from this week (L-shape, U-shape, island, or galley)',
          'Build it completely from scratch without reference — all modifications applied',
          'Final deliverable: 3D view + cut list for Jose\'s Friday check-in'
        ],
        searchTip: 'No new videos today — full independent build.',
        practiceTask: 'Jose will give you a client room size and layout type. Build the full kitchen in Mozaik. Apply at least one modification from Week 8. Generate 3D view and cut list. Present to Jose at 1pm.',
        tip: 'This week\'s check-in: show Jose the layout, explain why you chose each cabinet type for each position, and identify one thing you would do differently.',
        youtubeId: 'COMING_SOON_W9D5',
        youtubeTitle: 'Kitchen Layout Planning & Client Presentation',
        youtubeChannel: 'Cabinet Design Academy',
        quiz: [
          {
            q: 'In an L-shape layout, which cabinet do you always place first?',
            options: ['The tallest cabinet', 'The corner cabinet', 'The sink base', 'The island'],
            answer: 1
          },
          {
            q: 'What is the minimum aisle clearance required around a kitchen island?',
            options: ['36"', '42"', '48"', '54"'],
            answer: 1
          },
          {
            q: 'When a client says their kitchen is "not square," what should you always do?',
            options: ['Use standard dimensions anyway', 'Measure from both ends of each wall', 'Add 2" to every dimension', 'Skip the irregular walls'],
            answer: 1
          },
          {
            q: 'What is the minimum clearance between two parallel runs in a galley kitchen?',
            options: ['36"', '42"', '48"', '60"'],
            answer: 2
          },
          {
            q: 'In your Friday Week 9 check-in, what should you explain to Jose?',
            options: ['How long it took to build', 'Why you chose each cabinet type for each position', 'The total cost of materials', 'Which features Mozaik is missing'],
            answer: 1
          }
        ]
      }
    ],

    // ── Week 10: 3D Rendering & Client Presentations ──
    10: [
      {
        topic: '3D View Navigation & Camera Angles',
        objectives: [
          'Navigate the Mozaik 3D view smoothly (rotate, pan, zoom)',
          'Set a camera angle that shows the kitchen from a client-friendly perspective',
          'Save multiple camera views (overall, detail, island)'
        ],
        searchTip: 'Search the training library for: "3D view" or "camera" or "rendering navigation"',
        practiceTask: 'Open any completed kitchen. Save 3 different camera views: (1) overall from the doorway, (2) close-up of the island or focal cabinet, (3) looking into a corner. Export each as an image. Save as "[Project]-W10D1".',
        tip: 'The best client-presentation camera angle is usually from the kitchen\'s primary entry point at eye height (5\'6"). That\'s what they see when they walk in.',
        youtubeId: 'COMING_SOON_W10D1',
        youtubeTitle: 'Kitchen 3D Visualization & Walkthrough Tutorial',
        youtubeChannel: 'Cabinet Design Academy'
      },
      {
        topic: 'Material & Color Application in 3D',
        objectives: [
          'Apply door styles and finishes to a full kitchen in 3D',
          'Test multiple color combinations on the same layout',
          'Apply a different finish to the island vs. perimeter cabinets'
        ],
        searchTip: 'Search the training library for: "color" or "finish" or "door style 3D"',
        practiceTask: 'Take a completed kitchen. Create two finish versions: Version A (white perimeter, navy island) and Version B (greige perimeter, white island). Export both as images for comparison. Save as "[Project]-W10D2".',
        tip: 'When presenting two finish options to a client, always show them side-by-side — not one at a time. They make better decisions when comparing directly.',
        youtubeId: 'COMING_SOON_W10D2',
        youtubeTitle: 'Kitchen Cabinet Color & Finish Selection Tutorial',
        youtubeChannel: 'Kitchen Design Pro'
      },
      {
        topic: 'Lighting & Rendering Quality',
        objectives: [
          'Adjust lighting settings in the Mozaik 3D view',
          'Improve rendering quality for client-ready images',
          'Identify when a rendering is ready to send vs. needs more refinement'
        ],
        searchTip: 'Search the training library for: "lighting" or "rendering quality"',
        practiceTask: 'Take a 3D view you already have. Adjust the lighting to improve depth and shadow. Export at the highest quality setting available. Compare the before and after. Save as "[Project]-W10D3".',
        tip: 'Good lighting in a rendering does more for client confidence than cabinet details. If the rendering looks dark or flat, the client will not connect with the design.',
        youtubeId: 'COMING_SOON_W10D3',
        youtubeTitle: 'Kitchen Design Rendering & Lighting Tutorial',
        youtubeChannel: 'Cabinet Design Academy'
      },
      {
        topic: 'Creating Client Presentation Exports',
        objectives: [
          'Export a complete client presentation package from Mozaik',
          'Package includes: 3D renders (2-3 angles), floor plan view, cut list summary',
          'File naming convention: [ClientLastName]-[Date]-[Version]'
        ],
        searchTip: 'Search the training library for: "export" or "print" or "presentation"',
        practiceTask: 'Build a complete export package for a past project: 2 camera views, floor plan, cut list. Name the files correctly. This is the exact package format that will go to clients. Save as "[Project]-W10D4".',
        tip: 'Every client presentation package should have the same 4 items: overview render, detail render, floor plan, cut list. Consistency builds trust.',
        youtubeId: 'COMING_SOON_W10D4',
        youtubeTitle: 'Kitchen Design Client Presentation Package Tutorial',
        youtubeChannel: 'Kitchen Design Pro'
      },
      {
        topic: 'Week 10 Review — Full Presentation Walkthrough',
        objectives: [
          'Build a kitchen AND prepare a complete client presentation package',
          'Present the package to Jose as if he is the client',
          'Jose will give feedback from the client\'s perspective'
        ],
        searchTip: 'No new videos today — full presentation build.',
        practiceTask: 'Jose will play the client. Build a kitchen based on his brief. Prepare the full presentation package. At 1pm, walk Jose through it as if he is seeing it for the first time. Respond to his questions.',
        tip: 'Friday check-in this week is a mock client presentation. Dress the part mentally — this is your chance to practice being a designer, not just a software operator.',
        youtubeId: 'COMING_SOON_W10D5',
        youtubeTitle: 'Kitchen Design Full Presentation Walkthrough',
        youtubeChannel: 'Cabinet Design Academy',
        quiz: [
          {
            q: 'What is the best client camera angle in the Mozaik 3D view?',
            options: ['Overhead looking down', 'From the kitchen entry at eye height (5\'6")', 'From behind the island', 'From the corner at floor level'],
            answer: 1
          },
          {
            q: 'How many color/finish versions should you always show a client?',
            options: ['One — the best option', 'Two', 'Three or more', 'As many as they ask for'],
            answer: 1
          },
          {
            q: 'What does good lighting in a rendering affect more than cabinet details?',
            options: ['File size', 'Client confidence', 'Cut list accuracy', 'Material cost'],
            answer: 1
          },
          {
            q: 'How many items are required in every standard client presentation package?',
            options: ['2 (renders only)', '3 (renders + floor plan)', '4 (2 renders, floor plan, cut list)', '5 or more'],
            answer: 2
          },
          {
            q: 'In the Friday Week 10 walkthrough, who is Jose pretending to be?',
            options: ['The warehouse manager', 'The client', 'A competing designer', 'The subcontractor'],
            answer: 1
          }
        ]
      }
    ],

    // ── Week 11: Cut Lists, Reports & Manufacturing Output ──
    11: [
      {
        topic: 'Understanding Cut List Output',
        objectives: [
          'Read and interpret a Mozaik-generated cut list',
          'Identify each part (box, door, drawer, shelf) in the cut list',
          'Spot errors or missing parts before sending to production'
        ],
        searchTip: 'Search the training library for: "cut list" or "parts list" or "output"',
        practiceTask: 'Generate a cut list from a completed kitchen. Go line by line: identify every box part, every door, every drawer front. Circle any item that seems wrong or missing. Save as "[Project]-W11D1".',
        tip: 'The cut list is what Scott and the CNC machine work from. Any error in the cut list becomes a cut error. Read it like you\'re the one making the cut.',
        youtubeId: 'COMING_SOON_W11D1',
        youtubeTitle: 'Cabinet Cut List — Reading & Woodworking Tutorial',
        youtubeChannel: 'Woodworking Wisdom'
      },
      {
        topic: 'Part Labeling & Sheet Optimization',
        objectives: [
          'Understand how Mozaik labels parts for the CNC machine',
          'Review sheet optimization — how parts are nested on panels',
          'Identify waste percentage and flag if it seems high'
        ],
        searchTip: 'Search the training library for: "part labels" or "sheet optimization" or "nesting"',
        practiceTask: 'From a completed kitchen cut list, review the sheet layout/nesting view. Note the material waste percentage. Identify the largest panel and the smallest cut. Save as "[Project]-W11D2".',
        tip: 'Higher waste percentage = higher material cost. If waste is above 20%, ask Jose before approving the cut — there may be a layout change that saves material.',
        youtubeId: 'COMING_SOON_W11D2',
        youtubeTitle: 'Cabinet Sheet Optimization & CNC Nesting Tutorial',
        youtubeChannel: 'CNC Cabinet School'
      },
      {
        topic: 'Material Quantity Reports',
        objectives: [
          'Generate a material quantity report for a kitchen project',
          'Identify total sheet goods needed, door count, hardware count',
          'Cross-check the report against the cut list for accuracy'
        ],
        searchTip: 'Search the training library for: "material report" or "quantity" or "BOM"',
        practiceTask: 'Generate a full material quantity report for a kitchen. List: total sheets of panel, total door count, total drawer front count, total hinges needed. Compare to cut list totals. Save as "[Project]-W11D3".',
        tip: 'The material quantity report becomes your purchase order. It needs to be accurate before Jose approves any material buy.',
        youtubeId: 'COMING_SOON_W11D3',
        youtubeTitle: 'Cabinet Material Takeoff & Quantity Tutorial',
        youtubeChannel: 'CNC Cabinet School'
      },
      {
        topic: 'CNC Output Files & Job Setup',
        objectives: [
          'Export CNC-ready files from Mozaik',
          'Understand the file format Scott\'s ShopSabre 408 requires',
          'Label and organize output files by job name and date'
        ],
        searchTip: 'Search the training library for: "CNC output" or "machine files" or "export CNC"',
        practiceTask: 'Export the CNC output files from a completed project. Name them correctly: [Client]-[Date]-[PartType]. Set aside in a folder. This is the handoff package to Scott. Save as "[Project]-W11D4".',
        tip: 'File naming is not optional — Scott needs to know which files go with which job without asking. Clear names = no confusion on the shop floor.',
        youtubeId: 'COMING_SOON_W11D4',
        youtubeTitle: 'Cabinet CNC File Setup & Output Tutorial',
        youtubeChannel: 'CNC Cabinet School'
      },
      {
        topic: 'Week 11 Review — Full Manufacturing Package',
        objectives: [
          'Generate the complete production package for one kitchen: cut list, material report, CNC files',
          'Hand off the package to Scott as a real job',
          'Jose reviews the package at 1pm Friday check-in'
        ],
        searchTip: 'No new videos today — full production package build.',
        practiceTask: 'Take a completed kitchen design. Generate: (1) cut list, (2) material quantity report, (3) CNC output files, (4) labeled folder with all files organized. Hand to Scott. Present to Jose at 1pm.',
        tip: 'This is the full circle: design → presentation → production. Today you connect your Mozaik work directly to what happens in the warehouse.',
        youtubeId: 'COMING_SOON_W11D5',
        youtubeTitle: 'Cabinet Production Package — Manufacturing Workflow',
        youtubeChannel: 'CNC Cabinet School',
        quiz: [
          {
            q: 'Who works directly from the cut list after Maria generates it?',
            options: ['Jose', 'Maria herself', 'Scott (Warehouse & CNC Operator)', 'The subcontractor'],
            answer: 2
          },
          {
            q: 'At what waste percentage should you flag the sheet layout to Jose before approving?',
            options: ['Above 10%', 'Above 15%', 'Above 20%', 'Above 30%'],
            answer: 2
          },
          {
            q: 'What does the material quantity report become after Jose approves it?',
            options: ['The cut list', 'The purchase order', 'The client invoice', 'The CNC job file'],
            answer: 1
          },
          {
            q: 'What must CNC output file names always contain?',
            options: ['Only the date', 'Client, Date, and PartType', 'Only the client name', 'Project number only'],
            answer: 1
          },
          {
            q: 'What is the Friday Week 11 handoff?',
            options: ['3D renders to the client', 'Complete production package given to Scott', 'Material report to Jose only', 'CNC files emailed to the vendor'],
            answer: 1
          }
        ]
      }
    ],

    // ── Week 12: Complete Kitchen Projects ──
    12: [
      {
        topic: 'Project Planning from a Real Client Brief',
        objectives: [
          'Take a real or realistic client brief and translate it into a Mozaik project',
          'Ask the right clarifying questions before starting the design',
          'Set up the room dimensions and note all constraints (windows, doors, appliances)'
        ],
        searchTip: 'Search the training library for: "project setup" or "client brief" or "getting started"',
        practiceTask: 'Jose will give you a real or mock client brief. Before touching Mozaik: write down the room dimensions, constraints, and 3 questions you would ask the client. Then set up the room. Save as "[Client]-W12D1".',
        tip: 'The best design starts before you open the software. Understand what the client actually needs before you start placing cabinets.',
        youtubeId: 'COMING_SOON_W12D1',
        youtubeTitle: 'Kitchen Design Brief — Planning Before You Start',
        youtubeChannel: 'Kitchen Design Pro'
      },
      {
        topic: 'Layout & Cabinet Selection',
        objectives: [
          'Build the full cabinet layout from the client brief',
          'Select appropriate cabinet types for each position',
          'Apply all Week 8 modifications where needed'
        ],
        searchTip: 'No new training videos today — apply all prior skills.',
        practiceTask: 'Continue the W12D1 project. Place all cabinets, apply modifications, add fillers and corner solutions. Do not apply finishes yet — layout only. Save as "[Client]-W12D2".',
        tip: 'Get the layout perfect before touching color or finish. Changing a layout after finishes are applied wastes time and creates errors.',
        youtubeId: 'COMING_SOON_W12D2',
        youtubeTitle: 'Kitchen Cabinet Selection & Layout Planning Tutorial',
        youtubeChannel: 'Cabinet Design Academy'
      },
      {
        topic: 'Finish, Modifications & Final Design',
        objectives: [
          'Apply door style, finish colors, and hardware to the completed layout',
          'Make any final modification adjustments after seeing the full design in 3D',
          'Prepare two finish options for the client to compare'
        ],
        searchTip: 'No new training videos today — full design finalization.',
        practiceTask: 'Apply finishes to the W12D2 layout. Create two color options. View in 3D. Make any final adjustments. This should look client-ready. Save as "[Client]-W12D3-OptionA" and "-OptionB".',
        tip: 'Always end a design session with the 3D view open. If it doesn\'t look right in 3D, the client won\'t love it in person.',
        youtubeId: 'COMING_SOON_W12D3',
        youtubeTitle: 'Kitchen Cabinet Finish Selection & Final Design',
        youtubeChannel: 'Kitchen Design Pro'
      },
      {
        topic: '3D Renders, Presentation & Cut List',
        objectives: [
          'Generate all client presentation materials from the final design',
          'Package: 3D renders (2-3 angles per option), floor plan, cut list, material report',
          'File everything correctly and prepare for Friday presentation'
        ],
        searchTip: 'No new training videos today — full package generation.',
        practiceTask: 'Generate the complete package for the W12 project. 3D renders for both options, floor plan, cut list, material report. Organize in a labeled folder. Tomorrow you present it. Save as "[Client]-W12D4-Package".',
        tip: 'The package should be clean enough that Jose could send it to the client without reviewing it first. That is the standard.',
        youtubeId: 'COMING_SOON_W12D4',
        youtubeTitle: 'Kitchen Design Presentation Render & Cut List Package',
        youtubeChannel: 'Cabinet Design Academy'
      },
      {
        topic: 'Week 12 Final — Complete Project Presentation',
        objectives: [
          'Present the complete kitchen project to Jose as a real client presentation',
          'Walk through: layout decisions, finish options, modifications used, cut list totals',
          'Receive feedback and document it for the next project'
        ],
        searchTip: 'No training videos today — this is your final.',
        practiceTask: 'Present the full W12 project to Jose at 1pm. Walk him through every decision. Answer his questions. After the session, write 3 things you learned this week and 1 thing you want to get better at. This is your graduation from the 12-week plan.',
        tip: 'Week 12 is not the end — it\'s the baseline. Every real project from here on is your ongoing training.',
        youtubeId: 'COMING_SOON_W12D5',
        youtubeTitle: 'Kitchen Design Complete Workflow — Start to Finish',
        youtubeChannel: 'Kitchen Design Pro',
        quiz: [
          {
            q: 'What should you do BEFORE opening Mozaik when you receive a client brief?',
            options: ['Open Mozaik and start placing cabinets', 'Write dimensions, constraints, and 3 clarifying questions', 'Call the client immediately', 'Check material prices first'],
            answer: 1
          },
          {
            q: 'What should you finalize before applying any color or finish?',
            options: ['The cut list', 'The cabinet layout', 'The material report', 'The client invoice'],
            answer: 1
          },
          {
            q: 'How many color option versions do you always give a client?',
            options: ['One — the best option only', 'Two', 'Three', 'However many they ask for'],
            answer: 1
          },
          {
            q: 'When is a presentation package ready for Jose to send directly to a client?',
            options: ['When Maria thinks it looks good', 'When it is clean enough he could send it without reviewing', 'After Scott reviews the cut list', 'After the client approves a rough draft'],
            answer: 1
          },
          {
            q: 'What does completing Week 12 represent in Maria\'s training?',
            options: ['The end of all training', 'The baseline — not the end', 'A certificate of completion', 'The start of a new job title'],
            answer: 1
          }
        ]
      }
    ]
  };

  function getMozaikContent(dateStr) {
    const date = new Date(dateStr + 'T12:00:00');
    const dow = date.getDay();
    if (dow === 0 || dow === 6) return null;
    const diffMs = date - MOZAIK_ANCHOR;
    const diffDays = Math.round(diffMs / 86400000);
    if (diffDays < 0) return null;
    const calWeekOffset = Math.floor(diffDays / 7);
    const mozaikWeek = Math.min(8 + calWeekOffset, 12);
    const dayIdx = dow - 1;
    const weekPlan = MOZAIK_PLAN[mozaikWeek];
    if (!weekPlan) return null;
    return { week: mozaikWeek, day: dayIdx + 1, ...weekPlan[dayIdx] };
  }

  // ── Public API ───────────────────────────────────────────────────────
  function getWeekAndDay(dateStr) {
    const date = new Date(dateStr + 'T12:00:00');
    const dow = date.getDay(); // 0=Sun, 6=Sat
    if (dow === 0 || dow === 6) return null;
    const diffMs = date - ANCHOR;
    const diffDays = Math.round(diffMs / 86400000);
    const weekNum = Math.floor(diffDays / 7);
    const weekIdx = ((weekNum % 5) + 5) % 5;
    const dayIdx = dow - 1; // Mon=0, Fri=4
    return { weekIdx, dayIdx, weekNum };
  }

  function getContent(dateStr) {
    const info = getWeekAndDay(dateStr);
    if (!info) return null;
    return WEEKS[info.weekIdx][info.dayIdx] || null;
  }

  function getWeekTheme(weekIdx) {
    return WEEK_THEMES[((weekIdx % 5) + 5) % 5];
  }

  function getDayTheme(dayIdx) {
    return DAY_THEMES[dayIdx] || '';
  }

  function getDayName(dayIdx) {
    return DAY_NAMES[dayIdx] || '';
  }

  function isValidYouTubeId(id) {
    return typeof id === 'string' && /^[a-zA-Z0-9_-]{11}$/.test(id);
  }

  return { getContent, getMozaikContent, getOfficeContent, getWeekAndDay, getWeekTheme, getDayTheme, getDayName, isValidYouTubeId, MOZAIK_TRAINING_URL };
})();
