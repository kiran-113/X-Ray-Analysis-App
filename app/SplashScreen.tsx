"use client";

import { useEffect, useState } from "react";
import { CSSProperties } from "react";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 8000); // Show splash for 10 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div style={splashContainerStyle}>
        {/* Header Text */}

        <p
            style={{
                color: "orange", // Correct color usage
                fontStyle: "italic", // Correct property for italic text
                fontSize: "2rem", // Font size in rem units
                marginBottom: "20px", // Margin below the text
            }}
            >
            AI X-Ray-Analysis App
            </p>


        <h2 style={headerStyle}>Developed By</h2>

        {/* Logo displayed below the header */}
        <img
          src="/logo.png" // Ensure this file is in the public directory
          alt="Logo"
          style={logoStyle}
        />
        {/* Loading animation displayed below the logo */}
        <img
          src="/loading.gif" // Ensure loading.gif is in the public directory
          alt="Loading Animation"
          style={loadingStyle}
        />
      </div>
    );
  }

  return <>{children}</>;
}

// Inline styles using React's CSSProperties for strong typings
const splashContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column", // Stack items vertically
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "black", // Black background
};

const headerStyle: CSSProperties = {
  color: "white",
  fontStyle: "italic",
  fontSize: "2rem",
  marginBottom: "20px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const logoStyle: CSSProperties = {
  width: "250px", // Adjust the logo size as needed
  height: "auto",
  marginBottom: "20px", // Space between logo and gif
};

const loadingStyle: CSSProperties = {
  width: "150px", // Set desired size for the loading gif
  height: "auto",
};

// "use client";

// import { useEffect, useState } from "react";
// import { CSSProperties } from "react";

// export default function SplashScreen({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 10000); // Show splash for 10 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     return (
//       <div style={splashContainerStyle}>
//         {/* Logo displayed at the top */}
//         <img
//           src="/logo.png" // Ensure this file is in the public directory
//           alt="Logo"
//           style={logoStyle}
//         />
//         {/* Loading animation displayed below the logo */}
//         <img
//           src="/loading.gif" // Ensure loading.gif is in the public directory
//           alt="Loading Animation"
//           style={loadingStyle}
//         />
//       </div>
//     );
//   }

//   return <>{children}</>;
// }

// // Inline styles using React's CSSProperties for strong typings
// const splashContainerStyle: CSSProperties = {
//   display: "flex",
//   flexDirection: "column", // Stack items vertically
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   backgroundColor: "black", // Black background
// };

// const logoStyle: CSSProperties = {
//   width: "200px", // Adjust the logo size as needed
//   height: "auto",
//   marginBottom: "20px", // Space between logo and gif
// };

// const loadingStyle: CSSProperties = {
//   width: "150px", // Set desired size for the loading gif
//   height: "auto",
// };

// "use client";

// import { useEffect, useState } from "react";

// export default function SplashScreen({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 10000); // Display splash for 10 seconds
//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);

//   // Splash screen component
//   if (showSplash) {
//     return (
//       <div style={styles.splashContainer}>
//         <img
//           src="/logo.png" // Make sure your logo is in the "public" directory
//           alt="Company Logo"
//           style={styles.logo}
//         />
//       </div>
//     );
//   }

//   return <>{children}</>; // Render the main content after the splash screen disappears
// }

// // Inline styles for the splash screen
// const styles = {
//   splashContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#fff",
//   },
//   logo: {
//     width: "300px", // Adjust logo size as needed
//     height: "300px",
//   },
// };