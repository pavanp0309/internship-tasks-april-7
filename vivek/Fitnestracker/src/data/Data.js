export const fitnessData = [
  {
    category: "Exercise",
    metrics: [
      {
        id: 1,
        title: "Steps",
        current: 12500,
        goal: 10000,
        unit: "steps",
        icon: "👟",
        lowThreshold: 50,
        warningColor: "#ff6b6b",
        successColor: "#51cf66"
      },
      {
        id: 2,
        title: "Workout Time",
        current: 45,
        goal: 60,
        unit: "minutes",
        icon: "⏱️",
        lowThreshold: 40,
        warningColor: "#ff922b",
        successColor: "#339af0"
      }
    ]
  },
  {
    category: "Health",
    metrics: [
      {
        id: 3,
        title: "Water Intake",
        current: 6,
        goal: 8,
        unit: "glasses",
        icon: "💧",
        lowThreshold: 30,
        warningColor: "#74c0fc",
        successColor: "#1c7ed6"
      },
      {
        id: 4,
        title: "Calories Burned",
        current: 1800,
        goal: 2000,
        unit: "cal",
        icon: "🔥",
        lowThreshold: 60,
        warningColor: "#fcc419",
        successColor: "#f76707"
      }
    ]
  }
];