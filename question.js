/**
 * Local Question Bank - English, Mathematics, Current Affairs, and Nigerian History
 * 20 Questions per subject. Configured for a 10-minute CBT examination.
 */
const examData = {
  "English": [
    {
      id: 1,
      question: "Choose the word that is nearest in meaning to the capitalized word: The manager's TACITURN nature made it difficult for employees to know his thoughts.",
      options: { A: "Loquacious", B: "Reserved", C: "Aggressive", D: "Friendly" },
      answer: "B"
    },
    {
      id: 2,
      question: "Choose the word that best completes the sentence: Neither the principal nor the teachers _____ present at the meeting yesterday.",
      options: { A: "was", B: "were", C: "is", D: "are" },
      answer: "B"
    },
    {
      id: 3,
      question: "Select the option opposite in meaning to the capitalized word: The doctor described the disease as BENIGN.",
      options: { A: "Harmless", B: "Malignant", C: "Contagious", D: "Infectious" },
      answer: "B"
    },
    {
      id: 4,
      question: "Choose the correct spelling among the options:",
      options: { A: "Accommodate", B: "Acommodate", C: "Accomodate", D: "Acomodate" },
      answer: "A"
    },
    {
      id: 5,
      question: "Complete the idiom: To spill the ____.",
      options: { A: "water", B: "milk", C: "beans", D: "soup" },
      answer: "C"
    },
    {
      id: 6,
      question: "Identify the grammatically correct sentence:",
      options: { A: "One of the boys have gone home.", B: "One of the boys has gone home.", C: "One of the boy have gone home.", D: "One of the boy has gone home." },
      answer: "B"
    },
    {
      id: 7,
      question: "Choose the interpretation that best explains the expression: 'To kick the bucket' means to:",
      options: { A: "Start a fight", B: "Die", C: "Play football", D: "Clean the house" },
      answer: "B"
    },
    {
      id: 8,
      question: "Fill in the blank with the correct preposition: She is superior _____ him in mathematics.",
      options: { A: "than", B: "to", C: "above", D: "over" },
      answer: "B"
    },
    {
      id: 9,
      question: "Choose the option that is nearest in meaning to the capitalized word: His METICULOUS attention to detail saved the project.",
      options: { A: "Careless", B: "Thorough", C: "Lazy", D: "Hasty" },
      answer: "B"
    },
    {
      id: 10,
      question: "Choose the word that best completes the sentence: If I _____ known about the traffic, I would have taken another route.",
      options: { A: "have", B: "had", C: "would have", D: "did" },
      answer: "B"
    },
    {
      id: 11,
      question: "Select the antonym for the capitalized word: Her ARROGANT behavior alienated her colleagues.",
      options: { A: "Humble", B: "Proud", C: "Haughty", D: "Boastful" },
      answer: "A"
    },
    {
      id: 12,
      question: "Choose the correct option to fill in the blank: The committee _____ divided in its decision yesterday.",
      options: { A: "was", B: "were", C: "is", D: "are" },
      answer: "B"
    },
    {
      id: 13,
      question: "Choose the correct spelling:",
      options: { A: "Occurence", B: "Occurrence", C: "Ocurrence", D: "Ocurrance" },
      answer: "B"
    },
    {
      id: 14,
      question: "What does the idiom 'A blessing in disguise' mean?",
      options: { A: "A hidden misfortune", B: "A good thing that seemed bad at first", C: "An expensive gift", D: "An unexpected visitor" },
      answer: "B"
    },
    {
      id: 15,
      question: "Choose the correct tag: Let us go for a walk, _____?",
      options: { A: "shall we", B: "will you", C: "let us", D: "don't we" },
      answer: "A"
    },
    {
      id: 16,
      question: "Choose the word that best fits: The criminal was EXTRADITED to his home country. Extradited means:",
      options: { A: "Forgiven", B: "Handed over across jurisdictions", C: "Imprisoned indefinitely", D: "Set free on bail" },
      answer: "B"
    },
    {
      id: 17,
      question: "Identify the correct plural form of 'Formula':",
      options: { A: "Formulas", B: "Formulae", C: "Formuli", D: "Formulasis" },
      answer: "B"
    },
    {
      id: 18,
      question: "Choose the option nearest in meaning to EPHEMERAL:",
      options: { A: "Permanent", B: "Short-lived", C: "Beautiful", D: "Dangerous" },
      answer: "B"
    },
    {
      id: 19,
      question: "Complete the sentence: Hard _____ he worked, he could not pass the difficult examination.",
      options: { A: "as", B: "though", C: "when", D: "if" },
      answer: "A"
    },
    {
      id: 20,
      question: "Choose the word with the correct stress pattern: PHOTOGRAPHY",
      options: { A: "PHO-to-gra-phy", B: "pho-TO-gra-phy", C: "pho-to-GRA-phy", D: "pho-to-gra-PHY" },
      answer: "B"
    }
  ],

  "Mathematics": [
    {
      id: 1,
      question: "If 2x + 5 = 15, calculate the value of x.",
      options: { A: "3", B: "5", C: "7", D: "10" },
      answer: "B"
    },
    {
      id: 2,
      question: "Solve the quadratic equation roots for: x² - 5x + 6 = 0.",
      options: { A: "x = 2 or x = 3", B: "x = -2 or x = -3", C: "x = 1 or x = 6", D: "x = -1 or x = -6" },
      answer: "A"
    },
    {
      id: 3,
      question: "Simplify: log₁₀(1000)",
      options: { A: "1", B: "2", C: "3", D: "4" },
      answer: "C"
    },
    {
      id: 4,
      question: "Find the mean of the numbers: 4, 8, 12, 16, 20.",
      options: { A: "10", B: "12", C: "14", D: "16" },
      answer: "B"
    },
    {
      id: 5,
      question: "Calculate the simple interest on ₦50,000 for 2 years at 5% per annum.",
      options: { A: "₦2,500", B: "₦5,000", C: "₦7,500", D: "₦10,000" },
      answer: "B"
    },
    {
      id: 6,
      question: "What is the area of a circle with a radius of 7 cm? (Use π = 22/7)",
      options: { A: "154 cm²", B: "44 cm²", C: "88 cm²", D: "308 cm²" },
      answer: "A"
    },
    {
      id: 7,
      question: "Convert 1011₂ (binary) to base 10 (decimal).",
      options: { A: "9", B: "11", C: "13", D: "15" },
      answer: "B"
    },
    {
      id: 8,
      question: "Solve for θ in sin(θ) = 0.5, where 0° ≤ θ ≤ 90°.",
      options: { A: "30°", B: "45°", C: "60°", D: "90°" },
      answer: "A"
    },
    {
      id: 9,
      question: "If a fair six-sided die is rolled once, what is the probability of getting an even number?",
      options: { A: "1/6", B: "1/3", C: "1/2", D: "2/3" },
      answer: "C"
    },
    {
      id: 10,
      question: "Expand the algebraic expression: (x + 3)(x - 4)",
      options: { A: "x² - x - 12", B: "x² + x - 12", C: "x² - 7x + 12", D: "x² + 7x - 12" },
      answer: "A"
    },
    {
      id: 11,
      question: "Find the value of x if 3x - 7 = 2x + 5.",
      options: { A: "2", B: "12", C: "-2", D: "-12" },
      answer: "B"
    },
    {
      id: 12,
      question: "Calculate the perimeter of a rectangle whose length is 12 cm and width is 5 cm.",
      options: { A: "17 cm", B: "34 cm", C: "60 cm", D: "24 cm" },
      answer: "B"
    },
    {
      id: 13,
      question: "Express 0.00456 in standard form.",
      options: { A: "4.56 × 10⁻³", B: "4.56 × 10³", C: "45.6 × 10⁻⁴", D: "0.456 × 10⁻²" },
      answer: "A"
    },
    {
      id: 14,
      question: "If ₦12,000 is shared between Ade and Bola in the ratio 3:5, how much does Bola receive?",
      options: { A: "₦4,500", B: "₦7,500", C: "₦6,000", D: "₦8,000" },
      answer: "B"
    },
    {
      id: 15,
      question: "What is the next term in the geometric progression: 2, 6, 18, 54, ...?",
      options: { A: "108", B: "162", C: "216", D: "324" },
      answer: "B"
    },
    {
      id: 16,
      question: "Find the gradient of the straight line passing through points (2, 3) and (4, 7).",
      options: { A: "1", B: "2", C: "3", D: "4" },
      answer: "B"
    },
    {
      id: 17,
      question: "Evaluate: 5³ ÷ 5²",
      options: { A: "1", B: "5", C: "25", D: "125" },
      answer: "B"
    },
    {
      id: 18,
      question: "Find the median of the set of numbers: 14, 7, 22, 19, 3, 11, 8.",
      options: { A: "11", B: "14", C: "12", D: "19" },
      answer: "A"
    },
    {
      id: 19,
      question: "If the interior angle of a regular polygon is 120°, how many sides does the polygon have?",
      options: { A: "4", B: "5", C: "6", D: "8" },
      answer: "C"
    },
    {
      id: 20,
      question: "Evaluate √144 + √81.",
      options: { A: "15", B: "21", C: "23", D: "25" },
      answer: "B"
    }
  ],

  "Current Affairs": [
    {
      id: 1,
      question: "What do the two white horses on the Nigerian National Coat of Arms represent?",
      options: { A: "Peace and unity", B: "Dignity and pride", C: "Strength and agriculture", D: "Freedom and democracy" },
      answer: "B"
    },
    {
      id: 2,
      question: "What does the green vertical band on the Nigerian national flag represent?",
      options: { A: "Forests and rich agriculture", B: "Peace and harmony", C: "The Niger River", D: "Unity and faith" },
      answer: "A"
    },
    {
      id: 3,
      question: "How many Local Government Areas (LGAs) are officially recognized in Nigeria?",
      options: { A: "650", B: "714", C: "774", D: "805" },
      answer: "C"
    },
    {
      id: 4,
      question: "Which body is constitutionally responsible for conducting general elections in Nigeria?",
      options: { A: "NOA", B: "EFCC", C: "INEC", D: "NPC" },
      answer: "C"
    },
    {
      id: 5,
      question: "What is the official currency of Nigeria?",
      options: { A: "Dollar", B: "CFA Franc", C: "Naira", D: "Pound" },
      answer: "C"
    },
    {
      id: 6,
      question: "Where is the headquarters of ECOWAS (Economic Community of West African States) located?",
      options: { A: "Accra, Ghana", B: "Abuja, Nigeria", C: "Dakar, Senegal", D: "Lagos, Nigeria" },
      answer: "B"
    },
    {
      id: 7,
      question: "Which bank is the apex monetary authority and regulatory body in Nigeria?",
      options: { A: "First Bank of Nigeria", B: "Central Bank of Nigeria (CBN)", C: "Access Bank", D: "Zenith Bank" },
      answer: "B"
    },
    {
      id: 8,
      question: "What does JAMB stand for in the Nigerian educational system?",
      options: { A: "Joint Admissions and Matriculation Board", B: "Joint African Matriculation Bureau", C: "Junior Academic and Matriculation Board", D: "Joint Assessment and Monitoring Board" },
      answer: "A"
    },
    {
      id: 9,
      question: "Which arm of government in Nigeria is vested with the power to make laws?",
      options: { A: "The Executive", B: "The Judiciary", C: "The Legislature", D: "The Civil Service" },
      answer: "C"
    },
    {
      id: 10,
      question: "What does the black shield on the Nigerian National Coat of Arms represent?",
      options: { A: "Fertile soil of Nigeria", B: "The Niger River", C: "Good agricultural land", D: "Nigerian mineral wealth" },
      answer: "A"
    },
    {
      id: 11,
      question: "The National Youth Service Corps (NYSC) anthem was composed to promote what core value?",
      options: { A: "Military readiness", B: "Youth empowerment", C: "National unity and integration", D: "Technological growth" },
      answer: "C"
    },
    {
      id: 12,
      question: "What do the 'Y' shape silver bands on the Nigerian coat of arms represent?",
      options: { A: "The confluence of Rivers Niger and Benue", B: "Road and rail networks", C: "Mountain ranges", D: "Borders with neighbors" },
      answer: "A"
    },
    {
      id: 13,
      question: "Which federal agency is primarily tasked with combating financial and economic crimes in Nigeria?",
      options: { A: "NDLEA", B: "EFCC", C: "FRSC", D: "ICPC" },
      answer: "B"
    },
    {
      id: 14,
      question: "How many senators make up the upper chamber of the Nigerian National Assembly?",
      options: { A: "109", B: "360", C: "774", D: "469" },
      answer: "A"
    },
    {
      id: 15,
      question: "How many members constitute the House of Representatives in Nigeria?",
      options: { A: "109", B: "360", C: "469", D: "774" },
      answer: "B"
    },
    {
      id: 16,
      question: "What is the motto found on the Nigerian National Coat of Arms?",
      options: { A: "Justice, Peace and Progress", B: "Unity and Faith, Peace and Progress", C: "Work and Worship", D: "Strength in Diversity" },
      answer: "B"
    },
    {
      id: 17,
      question: "Which international organization has Nigeria as a founding member since 1960?",
      options: { A: "United Nations (UN)", B: "European Union", C: "NATO", D: "ASEAN" },
      answer: "A"
    },
    {
      id: 18,
      question: "What is the primary function of the Nigerian judiciary?",
      options: { A: "Enforcing laws", B: "Interpreting laws", C: "Making laws", D: "Collecting taxes" },
      answer: "B"
    },
    {
      id: 19,
      question: "Which Nigerian national symbol contains the line 'Arise, O compatriots, Nigeria's call obey'?",
      options: { A: "National Pledge", B: "National Anthem", C: "National Prayer", D: "Coat of Arms" },
      answer: "B"
    },
    {
      id: 20,
      question: "Who authored the current Nigerian National Pledge ('I pledge to Nigeria my country...')?",
      options: { A: "Prof. Felicia Adeyoyin", B: "Taiwo Akinkunmi", C: "Ben Enwonwu", D: "Wole Soyinka" },
      answer: "A"
    }
  ],

  "Nigerian History": [
    {
      id: 1,
      question: "In what year did Nigeria gain its independence from British colonial rule?",
      options: { A: "1957", B: "1960", C: "1963", D: "1970" },
      answer: "B"
    },
    {
      id: 2,
      question: "Who was the first President of the Federal Republic of Nigeria?",
      options: { A: "Sir Abubakar Tafawa Balewa", B: "Chief Obafemi Awolowo", C: "Dr. Nnamdi Azikiwe", D: "General Aguiyi-Ironsi" },
      answer: "C"
    },
    {
      id: 3,
      question: "Which British colonial administrator amalgamated the Northern and Southern Protectorates of Nigeria in 1914?",
      options: { A: "Sir Frederick Lugard", B: "Sir John Macpherson", C: "Sir Arthur Richards", D: "Sir James Robertson" },
      answer: "A"
    },
    {
      id: 4,
      question: "In what year was the Nigerian Federal Capital Territory officially moved from Lagos to Abuja?",
      options: { A: "1976", B: "1985", C: "1991", D: "1999" },
      answer: "C"
    },
    {
      id: 5,
      question: "Who was the first Prime Minister of independent Nigeria?",
      options: { A: "Sir Ahmadu Bello", B: "Sir Abubakar Tafawa Balewa", C: "Dr. Nnamdi Azikiwe", D: "Chief Samuel Akintola" },
      answer: "B"
    },
    {
      id: 6,
      question: "The Aba Women's Riot against colonial taxation took place in which year?",
      options: { A: "1914", B: "1929", C: "1945", D: "1953" },
      answer: "B"
    },
    {
      id: 7,
      question: "Who moved the motion for Nigeria's self-government in 1953?",
      options: { A: "Chief Anthony Enahoro", B: "Chief Obafemi Awolowo", C: "Sir Ahmadu Bello", D: "Herbert Macaulay" },
      answer: "A"
    },
    {
      id: 8,
      question: "The Clifford Constitution of 1922 introduced which important political concept to Nigeria?",
      options: { A: "Federalism", B: "The Elective Principle", C: "Regionalism", D: "Bicameral Legislature" },
      answer: "B"
    },
    {
      id: 9,
      question: "In what year did Nigeria officially become a Republic?",
      options: { A: "1960", B: "1963", C: "1979", D: "1999" },
      answer: "B"
    },
    {
      id: 10,
      question: "Which military head of state created the initial 12 states in Nigeria in May 1967?",
      options: { A: "General Aguiyi-Ironsi", B: "General Yakubu Gowon", C: "General Murtala Mohammed", D: "General Olusegun Obasanjo" },
      answer: "B"
    },
    {
      id: 11,
      question: "The Nigerian Civil War lasted from which year to which year?",
      options: { A: "1960–1963", B: "1965–1968", C: "1967–1970", D: "1970–1973" },
      answer: "C"
    },
    {
      id: 12,
      question: "Who founded Nigeria's first political party, the Nigerian National Democratic Party (NNDP), in 1923?",
      options: { A: "Dr. Nnamdi Azikiwe", B: "Herbert Macaulay", C: "Chief Obafemi Awolowo", D: "Sir Ahmadu Bello" },
      answer: "B"
    },
    {
      id: 13,
      question: "Which general created an additional 7 states in 1976, bringing the total to 19 states?",
      options: { A: "General Murtala Mohammed", B: "General Olusegun Obasanjo", C: "General Muhammadu Buhari", D: "General Ibrahim Babangida" },
      answer: "A"
    },
    {
      id: 14,
      question: "What was the name of the political arrangement that led to Nigeria's return to democratic rule in 1999?",
      options: { A: "Second Republic", B: "Third Republic", C: "Fourth Republic", D: "Transition Council" },
      answer: "C"
    },
    {
      id: 15,
      question: "Who was Nigeria's Head of State immediately following the assassination of General Murtala Mohammed in 1976?",
      options: { A: "General Olusegun Obasanjo", B: "Shehu Shagari", C: "General Yakubu Gowon", D: "Major General Muhammadu Buhari" },
      answer: "A"
    },
    {
      id: 16,
      question: "The Richards Constitution of 1945 divided Nigeria into how many regions?",
      options: { A: "Two", B: "Three", C: "Four", D: "Five" },
      answer: "B"
    },
    {
      id: 17,
      question: "Who was elected President of Nigeria during the short-lived Second Nigerian Republic?",
      options: { A: "Nnamdi Azikiwe", B: "Shehu Shagari", C: "MKO Abiola", D: "Olusegun Obasanjo" },
      answer: "B"
    },
    {
      id: 18,
      question: "Which constitutional conference introduced the parliamentary system of government to Nigeria in 1954?",
      options: { A: "Lagos Conference", B: "Ibadan Conference", C: "Lyttleton Constitution", D: "Macpherson Constitution" },
      answer: "C"
    },
    {
      id: 19,
      question: "In what year did the National Youth Service Corps (NYSC) scheme established?",
      options: { A: "1960", B: "1970", C: "1973", D: "1980" },
      answer: "C"
    },
    {
      id: 20,
      question: "Who was the Governor-General of Nigeria when the country attained independence in 1960?",
      options: { A: "Sir Frederick Lugard", B: "Sir James Robertson", C: "Sir John Macpherson", D: "Sir Arthur Richards" },
      answer: "B"
    }
  ]
};