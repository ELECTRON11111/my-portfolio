// "use client";

// import { useState, useEffect } from "react";

// export function useActiveSection(sectionIds: string[]) {
//     const [active, setActive] = useState<string>("");
    
//     useEffect(() => {
//         const updateHash = () => {
//             setActive(window.location.hash.replace("#", ""));
//         }

//         window.addEventListener("hashchange", updateHash);
//         updateHash(); // for initial load

//         return () => window.removeEventListener("hashchange", updateHash);
//     }, []);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActive(entry.target.id);
//                         history.replaceState(null, "", `#${entry.target.id}`);
//                     }
//                 });
//             },
//             { threshold: 0.6 }
//         )

//         sectionIds.forEach((id) => {
//             const el = document.getElementById(id);
//             if (el) observer.observe(el);
//         });

//         return () => observer.disconnect();
//     }, [sectionIds]);

//     return active;
// }


"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    // Update when clicking a hash link
    const updateHash = () => {
      setActive(window.location.hash.replace("#", ""));
    };

    window.addEventListener("hashchange", updateHash);
    updateHash(); // initial load

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {    
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      console.log(el);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]); 

  useEffect(() => console.log(active), [active]);

  return active;
}
