// ── HOW TO MANAGE PROJECTS ────────────────────────────────
// Add a project : copy one block below, paste at the end, fill in values
// Hide a project: set published: false
// Update a project: edit the values in the block
// ─────────────────────────────────────────────────────────

export const projects = [
  {
    id: "inwan",
    published: true,
    title: "Inwan",
    subtitle: "Flutter Marketplace App",
    period: "Oct 2024 – Feb 2025",
    tech: ["Flutter", "GetX", "Clean Architecture"],
    description: "A modern marketplace with product catalog, cart management, promo codes, and Firebase push notifications. Built with clean architecture for easy maintainability.",
    thumbnail: "assets/inwan/thumb.png",
    video: null, // replace with "assets/inwan/demo.mp4" when you have the recording
    appStoreUrl: "https://apps.apple.com/id/app/inwan-store/id6749757596",
    designUrl: "https://drive.google.com/file/d/17fwIdmAhaig9hHQXR205SQSpQIZtCGMA/view",
    playStoreUrl: null,
    liveUrl: null,
  },
  {
    id: "customa",
    published: true,
    title: "Customa Manga Cafe",
    subtitle: "React Native (TypeScript) App",
    period: "May 2025 – Oct 2025",
    tech: ["React Native", "TypeScript", "Google Maps"],
    description: "Japanese manga cafe booking app with multi-tier membership, QR/barcode scanning, SNS login (Google, Apple, LINE), and Google Maps store locator.",
    thumbnail: "assets/customa/thumb.png",
    video: null, // replace with "assets/customa/demo.mp4" when you have the recording
    appStoreUrl: "https://apps.apple.com/us/app/customa-%E5%85%AC%E5%BC%8F%E3%82%A2%E3%83%97%E3%83%AA/id1196634621",
    designUrl: "https://drive.google.com/file/d/1Phpyk4ABdiT7k0dIUIbH3c96qvdEZY24/view",
    playStoreUrl: null,
    liveUrl: null,
  },
  {
    id: "zensate",
    published: true,
    title: "Zensate",
    subtitle: "Flutter BLE + IoT Wellness App",
    period: "Nov 2025 – Present",
    tech: ["Flutter", "BLE", "WebSocket", "IoT"],
    description: "Wellness app connecting to a MUSE headband via Bluetooth for real-time brainwave monitoring and guided group relaxation sessions with IoT bed controls.",
    thumbnail: "assets/zensate/thumb.png",
    video: null, // replace with "assets/zensate/demo.mp4" when you have the recording
    appStoreUrl: null,
    designUrl: "https://www.figma.com/design/fJ5pAv71wS4VJRPn2JvPKO/Zensate-Bed-App---v.2",
    playStoreUrl: null,
    liveUrl: null,
  },
  {
    id: "project-ai-1",
    published: false, // set true when content is ready
    title: "AI Project Title",
    subtitle: "Agentic AI · Web",
    period: "2025",
    tech: ["Claude API", "TypeScript", "Next.js"],
    description: "Brief description of the agentic AI project. Replace this with the real description before publishing.",
    thumbnail: "assets/project-ai-1/thumbnail.jpg",
    video: null,
    appStoreUrl: null,
    designUrl: null,
    playStoreUrl: null,
    liveUrl: "https://your-live-url-here.com",
  },
  {
    id: "project-web-1",
    published: false, // set true when content is ready
    title: "Fullstack Project Title",
    subtitle: "Web App",
    period: "2025",
    tech: ["React", "Node.js", "PostgreSQL"],
    description: "Brief description of the fullstack project. Replace this with the real description before publishing.",
    thumbnail: "assets/project-web-1/thumbnail.jpg",
    video: null,
    appStoreUrl: null,
    designUrl: null,
    playStoreUrl: null,
    liveUrl: "https://your-live-url-here.com",
  },
];
