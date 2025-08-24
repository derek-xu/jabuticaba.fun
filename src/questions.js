export const questions = [
  // Everyday Personal Fairness Questions
  // {
  //   id: 1,
  //   category: "Everyday Personal Fairness",
  //   question: "A couple splits rent 50/50 even though one person earns 3× more than the other.",
  //   options: ["Fair", "Not Fair"]
  // },
  {
    id: 2,
    category: "Everyday Personal Fairness",
    question: "A friend drives everyone on a weekend trip and asks each passenger to chip in $50 for gas, even though gas only cost $120 total.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 3,
    category: "Everyday Personal Fairness",
    question: "A roommate buys groceries for the apartment and charges their roommates 10% extra for 'shopping time.'",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 4,
    category: "Everyday Personal Fairness",
    question: "A neighbor rents out their parking spot for $200/month while street parking is free but very limited.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 5,
    category: "Everyday Personal Fairness",
    question: "A group of friends shares dinner, but one person always orders cheaper items — and the group insists on splitting the bill evenly.",
    options: ["Fair", "Not Fair"]
  },
  
  // Capitalist Fair, Consumer Unfair Cases
  {
    id: 6,
    category: "Capitalist Fair, Consumer Unfair",
    question: "A pharmacy raises the price of common allergy medication by 15% during peak allergy season.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 7,
    category: "Capitalist Fair, Consumer Unfair",
    question: "A streaming platform increases its base plan by $5/month but adds no new features.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 8,
    category: "Capitalist Fair, Consumer Unfair",
    question: "A rideshare company charges 25% more for rides that begin in low-income neighborhoods, citing 'higher driver risk.'",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 9,
    category: "Capitalist Fair, Consumer Unfair",
    question: "A food delivery app adds a 12% 'convenience fee' to every order, but none of it goes to drivers.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 10,
    category: "Capitalist Fair, Consumer Unfair",
    question: "A landlord raises rent by 10% annually, arguing the local market supports it.",
    options: ["Fair", "Not Fair"]
  },
  
  // Very Hard, Thought-Provoking & Ambiguous Ones
  {
    id: 11,
    category: "Thought-Provoking & Ambiguous",
    question: "A hospital prioritizes patients who can pay in cash upfront over those with insurance, to speed up cash flow.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 12,
    category: "Thought-Provoking & Ambiguous",
    question: "A university admits a wealthy donor's child with lower grades, using the donation to fund scholarships for 20 low-income students.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 13,
    category: "Thought-Provoking & Ambiguous",
    question: "A city increases bus fares by 10% to fund improvements to bike lanes and public parks (benefits everyone, but burden falls on riders).",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 14,
    category: "Thought-Provoking & Ambiguous",
    question: "An employer promotes a top-performing employee who consistently works 70-hour weeks, despite knowing this sets an unsustainable precedent.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 15,
    category: "Thought-Provoking & Ambiguous",
    question: "A grocery store raises food prices by 8%, while simultaneously giving employees a 10% wage increase.",
    options: ["Fair", "Not Fair"]
  },
  
  // The "Knife-Edge" Questions
  {
    id: 16,
    category: "Knife-Edge Questions",
    question: "A company introduces a $100 'priority interview slot' option for job applicants. Those who pay are seen first.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 17,
    category: "Knife-Edge Questions",
    question: "A local bakery throws away unsold bread each night instead of donating it, citing food safety and liability.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 18,
    category: "Knife-Edge Questions",
    question: "A credit card company charges low-income customers higher interest rates because they're statistically riskier.",
    options: ["Fair", "Not Fair"]
  },
  {
    id: 19,
    category: "Knife-Edge Questions",
    question: "A neighborhood association bans on-street parking for renters to 'protect property values' for homeowners.",
    options: ["Fair", "Not Fair"]
  }
]

// Expected "fair" answers for scoring
export const fairAnswers = [
  "Not Fair", "Not Fair", "Not Fair", "Fair", "Not Fair", // Everyday Personal
  "Not Fair", "Not Fair", "Not Fair", "Not Fair", "Not Fair", // Capitalist Fair, Consumer Unfair
  "Not Fair", "Not Fair", "Not Fair", "Not Fair", "Not Fair", // Thought-Provoking
  "Not Fair", "Not Fair", "Not Fair", "Not Fair" // Knife-Edge
]
