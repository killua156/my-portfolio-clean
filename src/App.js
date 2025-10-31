import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Award, ExternalLink } from "lucide-react";

// =============================
// Assets (your filenames)
// =============================
const ANIME_IMG = "/images/thumb-1920-959683.jpg"; // landing gate preview (anime)
const GAME_IMG  = "/images/gamebg.jpg";            // landing gate preview (games)

const VIDEOS = {
  anime: "/videos/coffee-shop.3840x2160.mp4",               // Anime background video (cozy)
  games: "/videos/big-city-split-fiction-moewalls-com.MP4", // Game background video (neon)
  default: "/videos/big-city-split-fiction-moewalls-com.MP4",
};

// =============================
// Theme tokens
// =============================
const THEME = {
  anime: {
    accent: "text-rose-300",
    borderAccent: "border-amber-300/50",
    headingGrad: "from-rose-300 to-amber-200",
    gridTint: "rgba(255,185,130,0.25)",
    cardShadow: "hover:shadow-rose-300/20",
    nameVariant: "cozy",
    radialLabel: "text-amber-200",
    overlayClass: "bg-gradient-to-b from-black/20 via-black/35 to-black/60",
  },
  games: {
    accent: "text-fuchsia-400",
    borderAccent: "border-fuchsia-400/50",
    headingGrad: "from-purple-400 to-pink-400",
    gridTint: "rgba(0,212,255,0.3)",
    cardShadow: "hover:shadow-cyan-400/20",
    nameVariant: "cyber",
    radialLabel: "text-fuchsia-300",
    overlayClass: "bg-black opacity-60",
  },
};

// =============================
// Cyberpunk/Cozy Neon Name
// =============================
function CyberpunkName({ text = "JEAN PAUL", id = "JP-2025-NEN", variant = "cyber" }) {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 120 + Math.random() * 200);
    }, 3500 + Math.random() * 2500);
    return () => clearInterval(t);
  }, []);

  const tubeStroke = variant === "cozy" ? 2 : 3;
  const backStroke = variant === "cozy" ? 10 : 14;
  const letterSpacing = variant === "cozy" ? "8px" : "12px";
  const showScanlines = variant !== "cozy";

  return (
    <div className="relative inline-block select-none">
      <svg className="block mx-auto" viewBox="0 0 1400 220" width="100%" style={{ maxWidth: 1000 }}>
        <defs>
          <filter id="outer-glow">
            <feGaussianBlur stdDeviation={variant === "cozy" ? "5" : "8"} result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="tube-glow">
            <feGaussianBlur stdDeviation={variant === "cozy" ? "1.3" : "2"} result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Cyber gradient */}
          <linearGradient id="holo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00fff0" />
            <stop offset="25%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#b400ff" />
            <stop offset="75%" stopColor="#00ff85" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          {/* Cozy gradient */}
          <linearGradient id="peach" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd1c1" />
            <stop offset="35%" stopColor="#ffc8a2" />
            <stop offset="70%" stopColor="#ffe3b0" />
            <stop offset="100%" stopColor="#ffd1c1" />
          </linearGradient>
        </defs>

        {/* Back glow */}
        <text
          x="50%" y="60%" textAnchor="middle" className="font-mono"
          fontSize="150" fill="none"
          stroke={variant === "cozy" ? "url(#peach)" : "url(#holo)"}
          strokeWidth={backStroke}
          filter="url(#outer-glow)"
          style={{ letterSpacing }}
        >
          {text}
        </text>

        {/* Tube core */}
        <text
          x="50%" y="60%" textAnchor="middle" className="font-mono"
          fontSize="150" fill="none"
          stroke={variant === "cozy" ? "#fff8f5" : "#eaffff"}
          strokeWidth={tubeStroke}
          filter="url(#tube-glow)"
          style={{ letterSpacing }}
        >
          {text}
        </text>

        {/* Chromatic shadows */}
        <text
          x="50%" y="60%" textAnchor="middle" className="font-mono" fontSize="150"
          fill="none" stroke={variant === "cozy" ? "#ffb8b8" : "#00e5ff"} strokeWidth="2"
          opacity={variant === "cozy" ? "0.55" : "0.8"} transform="translate(2,0)"
          style={{ letterSpacing }}
        >
          {text}
        </text>
        <text
          x="50%" y="60%" textAnchor="middle" className="font-mono" fontSize="150"
          fill="none" stroke={variant === "cozy" ? "#ffd79e" : "#ff2bd6"} strokeWidth="2"
          opacity={variant === "cozy" ? "0.45" : "0.7"} transform="translate(-2,0)"
          style={{ letterSpacing }}
        >
          {text}
        </text>
      </svg>

      {/* Scanlines only for cyber */}
      {showScanlines && <div className="pointer-events-none absolute inset-0 mix-blend-screen cyber-scanlines" />}
      <div className={`pointer-events-none absolute inset-0 ${flicker ? "cyber-flicker" : ""}`} />

      <div
        className={`text-center font-mono tracking-[0.35em] mt-2 text-xs md:text-sm ${
          variant === "cozy" ? "text-amber-200" : "text-cyan-400"
        }`}
        style={{ textShadow: variant === "cozy" ? "0 0 8px #ffcf9e" : "0 0 10px #00d4ff" }}
      >
        [ ID: {id} ]
      </div>
    </div>
  );
}

// =============================
// Split Landing Gate (Anime | Games)
// =============================
function LandingGate({ onSelect, animeImg = ANIME_IMG, gameImg = GAME_IMG }) {
  const [focusSide, setFocusSide] = useState("anime");
  const handleKey = (e) => {
    if (e.key === "ArrowLeft") setFocusSide("anime");
    if (e.key === "ArrowRight") setFocusSide("games");
    if (e.key === "Enter" || e.key === " ") onSelect(focusSide);
  };

  return (
    <div
      className="fixed inset-0 z-[999] grid grid-cols-1 md:grid-cols-2"
      role="dialog"
      aria-modal="true"
      aria-label="Choose a theme"
      onKeyDown={handleKey}
      tabIndex={0}
    >
      {/* Anime side */}
      <button
        onClick={() => onSelect("anime")}
        onMouseEnter={() => setFocusSide("anime")}
        aria-pressed={focusSide === "anime"}
        className="relative group overflow-hidden"
      >
        <img
          src={animeImg}
          alt="Anime theme preview"
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 ring-0 group-hover:ring-8 ring-amber-300/30 transition-all duration-300" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-amber-200 drop-shadow-lg">
            ANIME MODE
          </h2>
          <p className="mt-3 text-rose-100/90 font-mono tracking-widest text-xs">
            Cozy • Warm • Chill
          </p>
          <span className="mt-6 inline-block px-5 py-2 rounded-lg border border-amber-200/60 bg-black/40 backdrop-blur-sm group-hover:bg-amber-200/20 transition">
            Enter
          </span>
        </div>
      </button>

      {/* Games side */}
      <button
        onClick={() => onSelect("games")}
        onMouseEnter={() => setFocusSide("games")}
        aria-pressed={focusSide === "games"}
        className="relative group overflow-hidden"
      >
        <img
          src={gameImg}
          alt="Gaming theme preview"
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 ring-0 group-hover:ring-8 ring-fuchsia-400/30 transition-all duration-300" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-fuchsia-300 drop-shadow-lg">
            GAME MODE
          </h2>
          <p className="mt-3 text-fuchsia-200/80 font-mono tracking-widest text-xs">
            Neon • HUD • Depth
          </p>
          <span className="mt-6 inline-block px-5 py-2 rounded-lg border border-fuchsia-300/60 bg-black/40 backdrop-blur-sm group-hover:bg-fuchsia-500/20 transition">
            Enter
          </span>
        </div>
      </button>

      <div className="pointer-events-none hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
    </div>
  );
}

function App() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  // Theme mode: anime | games | null
  const [mode, setMode] = useState(() => localStorage.getItem("mode") || null);
  useEffect(() => {
    if (mode) localStorage.setItem("mode", mode);
  }, [mode]);
  const handleSelectMode = (m) => setMode(m);

  const isAnime = mode === "anime";
  const theme = isAnime ? THEME.anime : THEME.games;
  const accent = theme.accent;
  const borderAccent = theme.borderAccent;

  // Video reload for mode changes (works even if both modes are video)
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
        v.load();
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {}
    }
  }, [mode]);

  // Radial menu items
  const menuItems = [
    { id: "about", label: "About Me", icon: "👤", angle: 0 },
    { id: "anime", label: "Animes Watched", icon: "⚔️", angle: 72 },
    { id: "music", label: "Favourite Songs", icon: "🎵", angle: 144 },
    { id: "games", label: "Games I Play", icon: "🎮", angle: 216 },
    { id: "tech", label: "Tech Interests", icon: "💻", angle: 288 },
  ];
  const handleSectionSelect = (id) => setSelectedSection(id);

  // Skills / Projects / Experience / Awards
  const skills = [
    { name: "Python", level: 95, type: "Enhancement", color: "from-green-400 to-emerald-600" },
    { name: "Machine Learning", level: 90, type: "Manipulation", color: "from-cyan-400 to-blue-600" },
    { name: "AWS & Cloud", level: 85, type: "Emission", color: "from-purple-400 to-pink-600" },
    { name: "Data Engineering", level: 92, type: "Transmutation", color: "from-yellow-400 to-orange-600" },
    { name: "React & Full Stack", level: 88, type: "Conjuration", color: "from-red-400 to-rose-600" },
    { name: "SQL & Databases", level: 90, type: "Enhancement", color: "from-green-400 to-teal-600" },
  ];

  const projects = [
    {
      name: "LLM Rule-Engine PR Copilot",
      difficulty: "S-RANK",
      type: "Specialization",
      tech: ["Python", "FastAPI", "Gemini", "Redis", "Kafka"],
      desc: "Real-time GitHub App with LLM-assisted policy gates, streaming evaluations, and automated code review with SARIF annotations.",
      color: "border-purple-500",
      glow: "shadow-purple-500/50",
      // no link for now
    },
    {
      name: "Empathetic AI Journal",
      difficulty: "A-RANK",
      type: "Manipulation",
      tech: ["React", "Node.js", "MongoDB", "Gemini"],
      desc: "Emotion-aware journaling with sentiment detection, 40% engagement boost, and voice-enabled feedback using ElevenLabs TTS.",
      color: "border-cyan-500",
      glow: "shadow-cyan-500/50",
      link: "https://github.com/killua156/HackUTA-AI-Journal", // ADDED
    },
    {
      name: "Chicago Crime Predictor",
      difficulty: "A-RANK",
      type: "Enhancement",
      tech: ["Python", "TensorFlow", "Power BI"],
      desc: "25 years of CPD data analysis with geospatial patterns and interactive Power BI dashboards for law enforcement planning.",
      color: "border-green-500",
      glow: "shadow-green-500/50",
      link: "https://github.com/killua156/Chicago-Crime-Dataset-Analysis/blob/main/Final_Project_6302.ipynb", // ADDED
    },
  ];

  const experience = [
    {
      title: "Graduate Teaching Assistant",
      company: "UT Arlington",
      period: "Aug 2024 - Present",
      achievements: [
        "Mentored 40+ peers in ML - 20% grade improvement, 30% participation increase",
        "Created 15+ interactive study guides for statistical modeling and ML concepts",
        "Led SQL workshop with hands-on database design and optimization",
      ],
    },
    {
      title: "Data Engineer",
      company: "LTIMindtree",
      period: "Mar 2021 - Nov 2023",
      achievements: [
        "Secured 100+ enterprise databases with key-based masking - 40% risk reduction",
        "Automated data-masking via CI/CD pipelines - 50% efficiency boost",
        "Orchestrated SQL to PostgreSQL migration with AWS Glue - 30% cost savings",
        "Optimized workforce operations saving $100K+ annually",
      ],
    },
    {
      title: "AI/ML Engineer",
      company: "Bridged.co",
      period: "Oct 2020 - Mar 2021",
      achievements: [
        "Built NAICS classifier for 10K+ companies - 25% accuracy improvement",
        "Engineered PHP data pipeline for 12K+ labeled samples - 40% faster preprocessing",
      ],
    },
  ];

  const awards = [
    { title: "UTA Datathon 2025 Winner", subtitle: "Dungeons & Dragons Challenge", color: "text-yellow-400" },
    { title: "Best Teaching Assistant", subtitle: "Spring 2025 • Academic Excellence", color: "text-purple-400" },
    { title: "AWS Solutions Architect", subtitle: "Associate Certified • 2025", color: "text-cyan-400" },
    { title: "Best Presentation Award", subtitle: "UTA Data Science Faculty", color: "text-green-400" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .cyber-scanlines {
            background:
              repeating-linear-gradient(
                to bottom,
                rgba(0, 255, 200, 0.12),
                rgba(0, 255, 200, 0.12) 2px,
                transparent 2px,
                transparent 4px
              ),
              radial-gradient(ellipse at 50% -10%, rgba(0, 255, 223, 0.15), transparent 60%),
              linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,255,230,0.06) 50%, rgba(0,0,0,0) 100%);
            animation: holoSweep 6s linear infinite, grain 2.5s steps(10) infinite;
            opacity: 0.7;
          }
          @keyframes holoSweep {
            0% { background-position: -200% 0, 50% 0, 0 0; }
            100% { background-position: 200% 0, 50% 0, 100% 0; }
          }
          @keyframes grain {
            0%, 100% { transform: translate(0,0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            60% { transform: translate(1px, 1px); }
            80% { transform: translate(-1px, -1px); }
          }
          .cyber-flicker {
            background: radial-gradient(circle at 50% 50%, rgba(0,255,200,0.25), transparent 55%);
            animation: tubeFlicker 0.18s ease-in-out;
            mix-blend-mode: screen;
          }
          .scanline { position: relative; overflow: hidden; }
          .scanline::before {
            content: '';
            position: absolute; top: 0; left: 0; width: 100%; height: 2px;
            background: linear-gradient(transparent, rgba(0, 255, 159, 0.8), transparent);
            animation: scan 4s linear infinite;
          }
          @keyframes scan { 0% { transform: translateY(0); } 100% { transform: translateY(300px); } }
        `,
        }}
      />

      {/* Landing Gate */}
      {!mode && <LandingGate onSelect={handleSelectMode} animeImg={ANIME_IMG} gameImg={GAME_IMG} />}

      {/* Background (video for both modes) */}
      <div className="fixed inset-0 overflow-hidden">
        <video
          key={mode || "default"}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full w-auto h-auto object-cover"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <source
            src={mode ? (VIDEOS[mode] || VIDEOS.default) : VIDEOS.default}
            type="video/mp4"
          />
        </video>

        {/* Subtle grid – warm in anime, cool in games */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${theme.gridTint} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridTint} 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              opacity: isAnime ? 0.08 : 0.10,
            }}
          />
        </div>

        {/* Overlay: warm gradient for Anime, dark veil for Games */}
        <div className={`absolute inset-0 ${theme.overlayClass}`} />
      </div>

      <div className="relative z-10">
        {/* Switch Mode */}
        {mode && (
          <button
            onClick={() => setMode(null)}
            className="fixed top-5 left-5 z-[1000] px-3 py-2 text-xs font-mono tracking-widest rounded-md border border-white/20 bg-black/50 hover:bg-white/10 backdrop-blur-sm"
            aria-label="Switch theme"
            title="Switch theme"
          >
            SWITCH MODE
          </button>
        )}

        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="absolute top-8 right-8 flex gap-4">
            {/* UPDATED social links */}
            <a
              href="https://github.com/killua156"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeanpaul15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>

          <div className="text-center max-w-4xl">
            <div className={`text-sm mb-3 tracking-widest font-mono ${isAnime ? "text-amber-200" : "text-cyan-400"}`}>
              データ念能力者 • DATA NEN SPECIALIST
            </div>

            {/* Radial Menu */}
            <div className="relative w-64 h-64 mb-8 mx-auto">
              {/* Rings */}
              <div className={`absolute inset-0 rounded-full border-4 ${isAnime ? "border-amber-300/30" : "border-purple-500/30"} animate-ping`} style={{ animationDuration: "3s" }} />
              <div className={`absolute inset-4 rounded-full border-2 ${isAnime ? "border-rose-200/50" : "border-cyan-400/50"}`} />
              <div className={`absolute inset-8 rounded-full border-2 ${isAnime ? "border-amber-200/50" : "border-green-400/50"}`} />

              {/* Center */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setMenuOpen((v) => !v)}
                aria-pressed={menuOpen}
              >
                <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${isAnime ? "from-rose-900/70 to-amber-900/70" : "from-purple-900 to-cyan-900"} border-4 ${isAnime ? "border-amber-200" : "border-cyan-400"} flex items-center justify-center shadow-lg ${isAnime ? "shadow-amber-200/30" : "shadow-cyan-400/50"} group-hover:scale-110 transition-transform`}>
                  <div className="text-center">
                    <div className="text-5xl mb-1">{isAnime ? "☕" : "⚡"}</div>
                    <div className={`text-xs font-bold ${isAnime ? "text-amber-200" : "text-cyan-400"}`}>EXPLORE</div>
                  </div>
                </div>
              </div>

              {/* Items */}
              {menuItems.map((item, index) => {
                const radius = 120;
                const angleRad = (item.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div
                    key={item.id}
                    className={`absolute top-1/2 left-1/2 transition-transform duration-500 ease-out will-change-transform ${
                      menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{
                      transform: menuOpen ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` : "translate(-50%, -50%)",
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <button
                      onClick={() => setSelectedSection(item.id)}
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${isAnime ? "from-rose-800/70 to-amber-800/70" : "from-purple-800 to-cyan-800"} border-2 flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-all ${
                        selectedSection === item.id ? "border-yellow-400 shadow-yellow-400/50" : `${borderAccent} ${THEME.games.cardShadow}`
                      }`}
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className={`text-xs font-bold text-center leading-tight px-1 ${theme.radialLabel}`}>
                        {item.label.split(" ")[0]}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Selected Section */}
            {selectedSection && (
              <div className={`mt-8 max-w-2xl mx-auto bg-black/80 border-2 rounded-xl md:rounded-2xl p-6 backdrop-blur-sm ${borderAccent}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold ${accent}`}>
                    {["About Me","Animes Watched","Favourite Songs","Games I Play","Tech Interests"][
                      ["about","anime","music","games","tech"].indexOf(selectedSection)
                    ]}
                  </h3>
                  <button onClick={() => setSelectedSection(null)} className="text-gray-400 hover:text-white text-2xl">×</button>
                </div>

                <div className="text-gray-300 space-y-3">
                  {selectedSection === "about" && (
                    <div>
                      <p className="mb-3">Master's student in Applied Statistics & Data Science at UT Arlington with a perfect 4.0 GPA. Passionate about leveraging data to solve real-world problems.</p>
                      <p>Previously worked as a Data Engineer at LTIMindtree and AI/ML Engineer at Bridged.co, with expertise in building scalable data pipelines and machine learning systems.</p>
                    </div>
                  )}
                  {selectedSection === "anime" && (
                    <div>
                      <p className="mb-2">Top favorites that inspire my work:</p>
                      <ul className="space-y-1 text-rose-200">
                        <li>⚡ Jujutsu Kaisen — relentless pacing & power systems</li>
                        <li>🏐 Haikyuu!! — teamwork, iteration, and grit</li>
                        <li>🎯 Hunter x Hunter — Nen logic = system design thinking</li>
                        <li>🎮 No Game No Life — strategy, game theory vibes</li>
                        <li>🌌 (and a few more tucked in my watchlist)</li>
                      </ul>
                    </div>
                  )}
                  {selectedSection === "music" && (
                    <div>
                      <p className="mb-2">Coding soundtracks:</p>
                      <ul className="space-y-1 text-amber-200">
                        <li>🎵 "Believer" — Imagine Dragons</li>
                        <li>🎧 Linkin Park — Hybrid Theory to One More Light</li>
                        <li>🎤 Justin Bieber — assorted pop fuel</li>
                        <li>💋 "Kiss Me More" — Doja Cat ft. SZA</li>
                        <li>🌀 Plus a rotating mix of alt/EDM</li>
                      </ul>
                    </div>
                  )}
                  {selectedSection === "games" && (
                    <div>
                      <p className="mb-2">Games I keep returning to:</p>
                      <ul className="space-y-1 text-green-300">
                        <li>🎮 Dota 2 — macro, drafts, tilts, the works</li>
                        <li>⚔️ God of War — cinematic combat & myth</li>
                        <li>🗡️ Assassin's Creed — stealth and parkour loops</li>
                        <li>💀 Dark Souls / Elden Ring — resilience & boss design</li>
                        <li>🕳️ Hollow Knight — tight platforming, perfect feel</li>
                      </ul>
                    </div>
                  )}
                  {selectedSection === "tech" && (
                    <div>
                      <p className="mb-2">Current tech fascinations:</p>
                      <ul className="space-y-2 text-yellow-300">
                        <li>🤖 Large Language Models - Building AI copilots and agents</li>
                        <li>☁️ Cloud Architecture - AWS certified, exploring distributed systems</li>
                        <li>📊 Real-time Data Pipelines - Kafka, streaming analytics</li>
                        <li>🧠 MLOps - Production ML systems and model deployment</li>
                        <li>🔐 Data Security - Encryption, masking, privacy-preserving ML</li>
                        <li>🎨 Interactive Visualizations - D3.js, data storytelling</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Name */}
            <div className="mb-6">
              <CyberpunkName text="JEAN PAUL" id="JP-2025-NEN" variant={theme.nameVariant} />
            </div>

            <div className={`text-center text-xs md:text-sm tracking-widest font-mono opacity-80 -mt-2 mb-2 ${accent}`}>
              データ特化型ハッカー • NEON-RUNNER
            </div>

            <div className="text-2xl md:text-3xl text-purple-400 mb-6 font-light">
              Software Engineer • Data Engineer • ML Specialist
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                Arlington, Texas
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                jeansusid@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                +1 682 247 1312
              </div>
            </div>

            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-lg">
              4.0 GPA • MS in Applied Statistics & Data Science
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-4 py-20 bg-gradient-to-b from-black/0 to-purple-950/40">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r ${theme.headingGrad} bg-clip-text text-transparent`}>
              念 NEN ABILITIES
            </h2>
            <p className="text-center text-gray-400 mb-16 text-sm tracking-widest">
              MASTERY LEVEL: ADVANCED • TYPE: SPECIALIST
            </p>

            <div className="grid md-grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mb-16">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`bg-black/50 border border-gray-800 p-6 rounded-xl md:rounded-2xl backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-xl ${theme.cardShadow}`}
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>{skill.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{skill.type}</div>
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>{skill.level}%</div>
                  </div>
                  <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`} style={{ width: hoveredSkill === i ? `${skill.level}%` : "0%" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-black/50 border border-purple-900/50 p-8 rounded-xl md:rounded-2xl backdrop-blur-sm">
              <h3 className={`text-2xl font-bold mb-6 ${isAnime ? "text-amber-200" : "text-purple-400"}`}>TECH ARSENAL</h3>
              <div className="flex flex-wrap gap-3">
                {["Python","Java","C++","JavaScript","React","Node.js","Next.js","Flask","FastAPI","AWS","Azure","TensorFlow","PyTorch","Pandas","NumPy","Scikit-learn","PostgreSQL","MongoDB","Redis","Kafka","Docker","Git","Power BI","D3.js"].map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-cyan-400/30 rounded-lg text-sm hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r ${theme.headingGrad} bg-clip-text text-transparent`}>
              MISSION LOG
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div key={i} className={`bg-black/70 border-2 ${project.color} rounded-xl p-6 hover:scale-105 transition-transform hover:shadow-2xl ${theme.cardShadow} backdrop-blur-sm`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${
                      project.color === 'border-purple-500'
                        ? 'from-purple-500/20 to-purple-500/40 text-purple-400'
                        : project.color === 'border-cyan-500'
                        ? 'from-cyan-500/20 to-cyan-500/40 text-cyan-400'
                        : 'from-green-500/20 to-green-500/40 text-green-400'
                    }`}>{project.difficulty}</span>
                    <span className="text-xs text-gray-500">{project.type}</span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${
                    project.color === 'border-purple-500'
                      ? 'text-purple-400'
                      : project.color === 'border-cyan-500'
                      ? 'text-cyan-400'
                      : 'text-green-400'
                  }`}>{project.name}</h3>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-gray-900 rounded border border-gray-800">{t}</span>
                    ))}
                  </div>

                  {/* Link button (if provided) */}
                  {project.link && (
                    <div className="mt-5">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-md border border-gray-700 hover:border-cyan-400/60 bg-black/40 hover:bg-black/60 transition"
                      >
                        View Project <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-4 py-20 bg-gradient-to-b from-black/0 to-cyan-950/40">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r ${theme.headingGrad} bg-clip-text text-transparent`}>
              MISSION HISTORY
            </h2>

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="bg-black/50 border border-cyan-900/50 p-8 rounded-xl md:rounded-2xl backdrop-blur-sm hover:border-cyan-400 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold ${accent} mb-1`}>{exp.title}</h3>
                      <div className="text-lg text-purple-400">{exp.company}</div>
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-900 px-4 py-2 rounded-lg mt-2 md:mt-0">{exp.period}</div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="text-gray-300 flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">▹</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 py-20 bg-gradient-to-b from-black/0 to-purple-950/40">
          <div className="max-w-2xl mx-auto">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r ${theme.headingGrad} bg-clip-text text-transparent`}>
              INITIALIZE CONTACT
            </h2>

            <div className="bg-black/70 border-2 border-green-500/50 p-8 rounded-xl md:rounded-2xl font-mono text-sm backdrop-blur-sm">
              <div className={`${isAnime ? "text-amber-200" : "text-green-400"} mb-6`}>
                <div className="mb-2">$ whoami</div>
                <div className="text-gray-500">jean_paul@data-specialist:~$</div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">Email:</span>
                  <a href="mailto:jeansusid@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">jeansusid@gmail.com</a>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">Phone:</span>
                  <span className="text-purple-400">+1 682 247 1312</span>
                </div>
                {/* UPDATED social links */}
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">GitHub:</span>
                  <a
                    href="https://github.com/killua156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                  >
                    github.com/killua156 <ExternalLink size={14} />
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/jeanpaul15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                  >
                    linkedin.com/in/jeanpaul15 <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className={`${isAnime ? "text-amber-200" : "text-green-400"} mt-6 flex items-center gap-1`}>
                $ <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-gray-900">
          <div className="text-sm mb-2">Crafted with Nen • Powered by Data</div>
          <div className="text-xs">© 2025 Jean Paul • All Rights Reserved</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
