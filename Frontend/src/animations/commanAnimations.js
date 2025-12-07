// --- Common / Minimal / Reusable Motion Variants ---
// Use for: text, headings, buttons, icons, images

// 1️⃣ Fade Up (best for text, headings)

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const staggerChildren = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};


// 2️⃣ Fade Only (very soft)
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

// 3️⃣ Zoom In (very good for buttons + icons)
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

// 4️⃣ Slide Up Small (good for images)
export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// 5️⃣ Small Stagger Container (can wrap any element group)
export const smallStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};
