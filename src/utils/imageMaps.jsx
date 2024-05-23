export const imageMap = {
  Moon: () => import("../assets/destination/image-moon.png"),
  Mars: () => import("../assets/destination/image-mars.png"),
  Europa: () => import("../assets/destination/image-europa.png"),
  Titan: () => import("../assets/destination/image-titan.png"),
};

export const crewImg = {
  Commander: () => import("../assets/crew/image-douglas-hurley.png"),
  "Mission Specialist": () =>
    import("../assets/crew/image-mark-shuttleworth.png"),
  Pilot: () => import("../assets/crew/image-victor-glover.png"),
  "Flight Engineer": () => import("../assets/crew/image-anousheh-ansari.png"),
};

export const techImg = {
  "Launch vehicle": () =>
    import("../assets/technology/image-launch-vehicle-portrait.jpg"),
  Spaceport: () => import("../assets/technology/image-spaceport-portrait.jpg"),
  "Space capsule": () =>
    import("../assets/technology/image-space-capsule-portrait.jpg"),
};
