export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  eyebrow: string;
  description: string;
  longDesc: string[];
  heroImage: string;
  gallery: string[];
  features: { icon: string; title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "wedding-planning",
    title: "Wedding Planning",
    tagline: "Your dream wedding, designed to perfection",
    eyebrow: "Elegant · Timeless · Yours",
    description:
      "From intimate ceremonies to grand celebrations, we craft weddings that reflect your unique love story with elegance and flawless precision.",
    longDesc: [
      "Your wedding day is the most significant celebration of your life — and it deserves to be flawless. At Ellora, we take every detail personally, from the first consultation to the final farewell dance.",
      "We work closely with you to understand your vision, your story, and your style. Whether you dream of a grand palatial affair or an intimate garden ceremony, we design and execute every element with meticulous care.",
      "From floral arrangements and stage design to catering coordination and guest management — our team handles it all so you can be fully present in every moment.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80",
    ],
    features: [
      {
        icon: "FlowerIcon",
        title: "Full-Service Planning",
        body: "End-to-end coordination from engagement to reception, every detail handled by our expert team.",
      },
      {
        icon: "FlowerIcon",
        title: "Floral & Decor Design",
        body: "Custom floral arrangements and décor concepts designed to match your unique aesthetic.",
      },
      {
        icon: "Music",
        title: "Entertainment Curation",
        body: "Live music, DJs, performers — curated to create the perfect atmosphere for every moment.",
      },
      {
        icon: "Clipboard",
        title: "Vendor Management",
        body: "We coordinate with all your vendors so you never have to chase a single call or email.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Initial Consultation",
        body: "We meet to understand your vision, budget, guest count and dream aesthetic.",
      },
      {
        step: "02",
        title: "Concept & Design",
        body: "We present a complete design concept including mood boards, floral palettes and layout plans.",
      },
      {
        step: "03",
        title: "Vendor Coordination",
        body: "We source and manage every vendor — venues, caterers, photographers, florists and more.",
      },
      {
        step: "04",
        title: "Day-of Execution",
        body: "Our team is on-site from setup to teardown, ensuring every moment is perfect.",
      },
    ],
    faqs: [
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 6–12 months in advance for weddings, especially during peak season.",
      },
      {
        q: "Do you handle destination weddings?",
        a: "Yes — we plan and execute weddings across India and select international destinations.",
      },
      {
        q: "Can we customise the package?",
        a: "Absolutely. Every wedding we plan is completely bespoke — no two events are alike.",
      },
      {
        q: "What is your payment structure?",
        a: "We require a 30% booking deposit, with milestones tied to planning phases. Full details in the contract.",
      },
    ],
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    tagline: "We handle the details, you enjoy the results",
    eyebrow: "Professional · Seamless · Impactful",
    description:
      "Product launches, annual days, conferences and brand activations executed with professional finesse and seamless coordination.",
    longDesc: [
      "Corporate events are a reflection of your brand — and first impressions matter. At Ellora, we design corporate experiences that are as polished and impactful as the companies we partner with.",
      "From intimate boardroom dinners to large-scale conferences and product launches, we manage every element with precision: venue selection, audio-visual setup, guest registration, catering, and on-site coordination.",
      "Our team understands corporate culture, brand guidelines, and the importance of seamless execution in a professional environment.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    ],
    features: [
      {
        icon: "Target",
        title: "Brand-Aligned Design",
        body: "Every element — from signage to stage — is designed to reflect your brand identity.",
      },
      {
        icon: "Mic2",
        title: "AV & Tech Setup",
        body: "Professional audio-visual equipment, live streaming, and technical support throughout.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Corporate Catering",
        body: "Curated menus from formal plated dinners to networking-style canape spreads.",
      },
      {
        icon: "BarChart2",
        title: "Guest Management",
        body: "Digital registration, seating coordination, and VIP hospitality handled end-to-end.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief & Discovery",
        body: "We understand your objectives, audience, brand guidelines and success metrics.",
      },
      {
        step: "02",
        title: "Concept Proposal",
        body: "We present a tailored event concept with timeline, layout and budget breakdown.",
      },
      {
        step: "03",
        title: "Production & Setup",
        body: "Full production management — vendors, logistics, rehearsals and technical checks.",
      },
      {
        step: "04",
        title: "Live Event Management",
        body: "On-site team ensures flawless execution from registration to closing.",
      },
    ],
    faqs: [
      {
        q: "What size events do you handle?",
        a: "From 20-person boardroom events to 2,000+ attendee conferences — we scale with you.",
      },
      {
        q: "Can you handle hybrid events?",
        a: "Yes — we integrate live streaming, virtual attendance platforms and hybrid AV setups.",
      },
      {
        q: "Do you work with brand guidelines?",
        a: "Always. We ensure every touchpoint aligns with your corporate identity.",
      },
      {
        q: "How quickly can you turn around an event?",
        a: "We've executed events in as little as 2 weeks for urgent requirements.",
      },
    ],
  },
  {
    slug: "stage-decor",
    title: "Stage & Decor",
    tagline: "Stunning setups that take your breath away",
    eyebrow: "Breathtaking · Custom · Premium",
    description:
      "Breathtaking stage designs and premium décor — from floral arrangements to full production setups — that set the perfect tone.",
    longDesc: [
      "The stage is the centrepiece of every event — and we design stages that stop guests in their tracks. From grand floral backdrops to sleek modern production setups, every design is custom-crafted for your moment.",
      "Our décor team works with the finest materials, premium florals, and cutting-edge lighting to transform any space into something extraordinary.",
      "Whether it's a traditional mandap, a contemporary reception stage, or a corporate keynote backdrop — we bring artistry and precision to every setup.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1478147427282-58a87a433128?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1478147427282-58a87a433128?w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    ],
    features: [
      {
        icon: "FlowerIcon",
        title: "Floral Backdrops",
        body: "Custom floral walls, arches and centrepieces crafted with fresh and preserved florals.",
      },
      {
        icon: "Lightbulb",
        title: "Lighting Design",
        body: "Ambient, spot, and dramatic lighting to set the perfect mood for every moment.",
      },
      {
        icon: "Palette",
        title: "Theme & Concept",
        body: "From traditional to contemporary — every theme is executed with artistic precision.",
      },
      {
        icon: "Hammer",
        title: "Full Production Setup",
        body: "Structural builds, draping, truss systems and complete stage construction.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Design Brief",
        body: "We understand your vision, colour palette, theme and spatial requirements.",
      },
      {
        step: "02",
        title: "3D Concept Rendering",
        body: "We present a digital render so you can visualise the final setup before execution.",
      },
      {
        step: "03",
        title: "Procurement & Build",
        body: "Florals, materials and structures are sourced, crafted and assembled by our team.",
      },
      {
        step: "04",
        title: "Installation & Styling",
        body: "On-site installation, last-minute styling, and post-event teardown.",
      },
    ],
    faqs: [
      {
        q: "Do you provide outdoor stage setups?",
        a: "Yes — we handle both indoor and outdoor setups with appropriate weatherproofing.",
      },
      {
        q: "Can we see a design before confirming?",
        a: "Absolutely — we provide a 3D rendered concept for your approval before production begins.",
      },
      {
        q: "How early do you set up?",
        a: "Typically 1–2 days before the event, depending on complexity.",
      },
      {
        q: "Do you use fresh or artificial flowers?",
        a: "We primarily use fresh florals. Premium artificial options are available on request.",
      },
    ],
  },
  {
    slug: "catering",
    title: "Catering",
    tagline: "Exquisite culinary experiences for every occasion",
    eyebrow: "Exquisite · Curated · Memorable",
    description:
      "Exquisite culinary experiences tailored to your event — from elegant plated dinners to lavish buffet spreads crafted by master chefs.",
    longDesc: [
      "Food is the heartbeat of every celebration. At Ellora, we believe that every dish served should be as memorable as the occasion itself — beautifully presented, expertly crafted, and perfectly suited to your guests.",
      "Our culinary team works with master chefs to create menus that span Indian, Continental, and fusion cuisines. From traditional thalis to molecular gastronomy — we cater to every palate and dietary requirement.",
      "We handle everything from menu design and kitchen setup to service staff, crockery, and post-event cleanup — leaving nothing to chance.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    ],
    features: [
      {
        icon: "ChefHat",
        title: "Master Chef Team",
        body: "Experienced culinary professionals specialising in multi-cuisine event catering.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Custom Menu Design",
        body: "Bespoke menus crafted to your event theme, guest preferences and dietary needs.",
      },
      {
        icon: "Sparkles",
        title: "Premium Presentation",
        body: "Elegant plating, live stations, and food displays that are as beautiful as they are delicious.",
      },
      {
        icon: "Leaf",
        title: "Dietary Accommodations",
        body: "Vegetarian, vegan, Jain, gluten-free and allergy-aware options always available.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Menu Consultation",
        body: "We discuss your cuisine preferences, guest count, and any dietary requirements.",
      },
      {
        step: "02",
        title: "Tasting Session",
        body: "You taste and approve your menu before the event — no surprises on the day.",
      },
      {
        step: "03",
        title: "Kitchen & Logistics Setup",
        body: "Our team sets up on-site kitchens, service stations and all equipment.",
      },
      {
        step: "04",
        title: "Service & Cleanup",
        body: "Professional service staff throughout, followed by complete post-event cleanup.",
      },
    ],
    faqs: [
      {
        q: "What cuisines do you offer?",
        a: "Indian (North, South, Mughlai), Continental, Chinese, Italian, and fusion cuisines.",
      },
      {
        q: "Do you handle dietary restrictions?",
        a: "Yes — we accommodate all dietary requirements including Jain, vegan, and allergy-specific menus.",
      },
      {
        q: "What is the minimum guest count?",
        a: "We cater for events from 50 guests upward.",
      },
      {
        q: "Can we have a tasting before booking?",
        a: "Yes — we offer a complimentary tasting session for confirmed bookings above 200 guests.",
      },
    ],
  },
  {
    slug: "exhibitions",
    title: "Exhibitions",
    tagline: "Spaces that captivate and inspire",
    eyebrow: "Captivating · Large-Scale · Strategic",
    description:
      "Large-scale exhibitions and trade shows designed to maximise footfall, brand visibility, and audience engagement.",
    longDesc: [
      "Exhibitions are your brand's opportunity to make a statement — and we ensure every square foot of your space works to achieve your goals. From trade fairs to art exhibitions, we design and build immersive environments that draw audiences in.",
      "Our exhibition team specialises in booth design, space planning, signage, lighting, and on-site logistics. We work with you to translate your brand story into a three-dimensional experience.",
      "Whether you're exhibiting at an existing event or organising your own trade show, Ellora handles the full spectrum of exhibition management.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    ],
    features: [
      {
        icon: "Building2",
        title: "Booth Design & Build",
        body: "Custom exhibition booths designed to maximise brand impact and visitor engagement.",
      },
      {
        icon: "MapPin",
        title: "Space Planning",
        body: "Strategic floor plan design to optimise footfall and visitor flow.",
      },
      {
        icon: "Lightbulb",
        title: "Display & Lighting",
        body: "Product displays, signage, and lighting designed to showcase your brand at its best.",
      },
      {
        icon: "Users",
        title: "On-Site Management",
        body: "Dedicated on-site team managing logistics, staff, and visitor experience throughout.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief & Space Allocation",
        body: "We review your requirements, allocated space, and exhibition objectives.",
      },
      {
        step: "02",
        title: "Design & Approval",
        body: "Full booth/space design with 3D renders for your approval before production.",
      },
      {
        step: "03",
        title: "Build & Installation",
        body: "Our team handles all construction, electrical, and display installation.",
      },
      {
        step: "04",
        title: "Event Support & Teardown",
        body: "On-site support throughout the exhibition, followed by professional dismantling.",
      },
    ],
    faqs: [
      {
        q: "Do you manage full trade shows?",
        a: "Yes — we organise and manage complete trade shows from venue selection to exhibitor management.",
      },
      {
        q: "What size booths do you design?",
        a: "From 10 sqm standard booths to 500+ sqm custom pavilions.",
      },
      {
        q: "Can you replicate a design across cities?",
        a: "Yes — we regularly execute identical exhibition setups across multiple cities.",
      },
      {
        q: "Do you provide exhibition staff?",
        a: "Yes — trained promotional and hospitality staff available on request.",
      },
    ],
  },
  {
    slug: "birthday-parties",
    title: "Birthday Parties",
    tagline: "Milestone moments made magical",
    eyebrow: "Magical · Themed · Joyful",
    description:
      "Themed, styled and coordinated milestone celebrations — from concept through to the last confetti fall — crafted for pure joy.",
    longDesc: [
      "Every birthday deserves to feel extraordinary. Whether it's a child's first birthday, a sweet sixteen, a 50th milestone, or a lavish 100-guest garden party — we design celebrations that capture the spirit of the person being celebrated.",
      "We specialise in themed birthday experiences — from whimsical children's parties with character themes and games, to elegant adult celebrations with curated décor, live entertainment, and gourmet menus.",
      "Our team manages every detail: invitations, venue styling, entertainment, catering, photography coordination, and even the birthday cake — leaving you free to simply enjoy the moment.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b19f?w=800&q=80",
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=800&q=80",
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
    ],
    features: [
      {
        icon: "Palette",
        title: "Custom Theming",
        body: "Fully themed décor from balloons and banners to complete venue transformation.",
      },
      {
        icon: "Cake",
        title: "Cake & Dessert Tables",
        body: "Designer cakes and curated dessert spreads that are as beautiful as they are delicious.",
      },
      {
        icon: "Music",
        title: "Entertainment",
        body: "Magicians, DJs, live bands, photo booths and activity zones for all ages.",
      },
      {
        icon: "Gift",
        title: "Guest Experience",
        body: "Personalised favours, custom invitations, and curated return gifts for every guest.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Concept & Theme",
        body: "We design a theme around the birthday person's personality, interests and preferences.",
      },
      {
        step: "02",
        title: "Décor & Styling Plan",
        body: "Complete styling plan with mood board, colour palette and decoration layout.",
      },
      {
        step: "03",
        title: "Entertainment & Catering",
        body: "Entertainment lineup and menu curated to suit the age group and occasion.",
      },
      {
        step: "04",
        title: "Day-of Coordination",
        body: "Full on-site coordination so the family can focus on celebrating.",
      },
    ],
    faqs: [
      {
        q: "Do you do children's birthday parties?",
        a: "Yes — we specialise in themed children's parties with age-appropriate entertainment and décor.",
      },
      {
        q: "What is the minimum budget?",
        a: "We work with budgets starting from ₹50,000. Packages are fully customisable.",
      },
      {
        q: "Can you arrange outdoor parties?",
        a: "Yes — we manage outdoor garden parties, terrace events, and farmhouse celebrations.",
      },
      {
        q: "Do you coordinate photography?",
        a: "Yes — we can recommend and coordinate with photographers and videographers.",
      },
    ],
  },
  {
    slug: "social-functions",
    title: "Social Functions",
    tagline: "Elegant gatherings, flawlessly executed",
    eyebrow: "Warm · Elegant · Flawless",
    description:
      "Receptions, cultural functions and social gatherings brought to life with warmth, creativity and impeccable hospitality.",
    longDesc: [
      "Social functions are at the heart of Indian culture — and we understand their significance. From engagement ceremonies and naming rituals to retirement parties and anniversary celebrations, we plan every gathering with cultural sensitivity and creative flair.",
      "We work closely with families to understand their traditions, preferences, and vision for the occasion. Our team then designs a celebration that honours those values while adding a modern aesthetic touch.",
      "Whether it's an intimate dinner for 30 or a grand reception for 500, we ensure every guest feels welcomed, every ritual is honoured, and every moment is memorable.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    ],
    features: [
      {
        icon: "Heart",
        title: "Cultural Sensitivity",
        body: "Deep respect for traditions, rituals, and cultural nuances across all communities.",
      },
      {
        icon: "Sparkles",
        title: "Venue Styling",
        body: "Beautiful venue transformation with décor that reflects the occasion's spirit.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Traditional Catering",
        body: "Authentic traditional menus alongside contemporary options for all guests.",
      },
      {
        icon: "Camera",
        title: "Moment Capture",
        body: "Photography and videography coordination to preserve every precious memory.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Family Consultation",
        body: "We meet with the family to understand the occasion, traditions, and vision.",
      },
      {
        step: "02",
        title: "Concept & Budget",
        body: "We present a tailored concept with full budget transparency.",
      },
      {
        step: "03",
        title: "Coordination & Preparation",
        body: "Vendor coordination, venue booking, and all pre-event logistics managed by us.",
      },
      {
        step: "04",
        title: "Day-of Hosting Support",
        body: "Our team ensures the function flows smoothly from beginning to end.",
      },
    ],
    faqs: [
      {
        q: "Do you plan religious ceremonies?",
        a: "Yes — we plan functions across all communities and religious traditions with full respect.",
      },
      {
        q: "Can you assist with venue selection?",
        a: "Absolutely — we have relationships with venues across Patna and surrounding regions.",
      },
      {
        q: "Do you offer day-of coordination only?",
        a: "Yes — we offer full planning, partial planning, or day-of coordination packages.",
      },
      {
        q: "How do you handle last-minute changes?",
        a: "Our team is trained for agility. We manage last-minute changes calmly and efficiently.",
      },
    ],
  },
  {
    slug: "destination-events",
    title: "Destination Events",
    tagline: "Extraordinary events at extraordinary places",
    eyebrow: "Pan-India · Immersive · Seamless",
    description:
      "From palace weddings in Rajasthan to beachside celebrations in Goa — we plan and execute flawless destination events anywhere across India.",
    longDesc: [
      "Destination events are our specialty — blending the magic of a beautiful location with the flawless execution Ellora is known for. Whether it's a royal wedding in Udaipur, a corporate retreat in the hills of Shimla, or a beachside celebration in Goa, we handle every detail remotely and on-ground.",
      "Our destination event service includes full venue scouting, travel logistics for guests, local vendor coordination, accommodation blocks, and a dedicated on-site Ellora team for execution day.",
      "We partner with TravelWell Delight — our sister travel platform — to seamlessly manage flights, hotels, and travel packages for your guests, making destination events truly stress-free.",
    ],
    heroImage: "/images/destination_event1.jpg",
    gallery: [
      "/images/destination_event1.jpg",
      "/images/assetImg 2.jpeg",
      "/images/destination_event3.jpg",
      "/images/destination_event2.jpg",
      "/images/stagedecorImg 3.jpg",
      "/images/assetImg 1.jpeg",
    ],
    features: [
      {
        icon: "Globe",
        title: "Venue Scouting",
        body: "We scout and shortlist the perfect destination venues matched to your vision and budget.",
      },
      {
        icon: "Users",
        title: "Guest Travel Management",
        body: "Full coordination of flights, hotels and transport for all outstation guests via TravelWell Delight.",
      },
      {
        icon: "MapPin",
        title: "Local Vendor Network",
        body: "Established relationships with premium vendors across Goa, Rajasthan, Kerala, Shimla and more.",
      },
      {
        icon: "CheckCircle",
        title: "On-Ground Execution",
        body: "A dedicated Ellora team is present at the destination from setup through to the final farewell.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Destination Selection",
        body: "We present curated destination options based on your vision, guest count, and budget.",
      },
      {
        step: "02",
        title: "Venue & Vendor Booking",
        body: "Full venue booking, vendor contracts, and accommodation blocks managed by our team.",
      },
      {
        step: "03",
        title: "Travel Coordination",
        body: "Guest travel, transfers, and hotel blocks managed via TravelWell Delight.",
      },
      {
        step: "04",
        title: "On-Site Execution",
        body: "Our team flies to the destination and manages every element of the event on the ground.",
      },
    ],
    faqs: [
      {
        q: "Which destinations do you cover?",
        a: "Goa, Rajasthan (Udaipur, Jaipur, Jodhpur), Kerala, Shimla, Mussoorie, and select international destinations.",
      },
      {
        q: "Do you handle guest travel bookings?",
        a: "Yes — through our sister platform TravelWell Delight, we manage all guest travel end-to-end.",
      },
      {
        q: "How far in advance should we book?",
        a: "Destination events require minimum 6–9 months lead time for the best venue and vendor availability.",
      },
      {
        q: "Is there a minimum guest count?",
        a: "We recommend destination events for 50+ guests for the best experience and value.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
