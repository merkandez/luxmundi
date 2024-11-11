export const theme = {
  colors: {
    primary: "#29C9A9", // Main green color
    primaryHover: "#1FAF93",
    primaryLight: "rgba(41, 201, 169, 0.1)",
    background: "#0A0A0A",
    surface: "#111111",
    surfaceHover: "#1A1A1A",
    border: "#333333",
    text: {
      primary: "#FFFFFF",
      secondary: "#999999",
      tertiary: "#666666",
    },
  },
  typography: {
    h1: {
      size: "3rem",
      weight: 700,
      lineHeight: 1.2,
    },
    h2: {
      size: "2.5rem",
      weight: 700,
      lineHeight: 1.3,
    },
    body: {
      size: "1rem",
      weight: 400,
      lineHeight: 1.5,
    },
  },
  animation: {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    hover: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    fadeIn: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1200px",
  },
};
