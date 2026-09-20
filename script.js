// TRUE deterministic randomizer (no pattern)
function getIlyaIndex(month, day) {
  const seed = `${month}-${day}`;

  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  hash >>>= 0;
  return hash % 31;
}

// Ilya images
const ilyaImages = [];
for (let i = 1; i <= 31; i++) {
  ilyaImages.push(`pics/IlyaR${i}.png`);
}

// Ilya texts (placeholder)
const ilyaTexts = [
  "Ilya wondering if this is how he dies",
  "Ilya's sexy back 🥵",
  "Ilya after the boy who he has sex with repeatedly came out to him",
  "Ilya seeing something he is very interested in",
  "Ilya is Russian, he does not blush (stupid Marly)",
  "Ilya promising 50 goals this season",
  "Ilya being on the cover of the fucking game",
  "Ilya being very incognito mode at the airport",
  "Ilya needing to WIN",
  "Ilya after saying no to a blowjob on the filthy bathroom floor(but promising more after)",
  "Ilya not wanting to hear about Rose Landry",
  "Ilya falling in love with his freckled future Husband",
  "Ilya showing all of Canada's wildlife what Shane does to him",
  "Ilya and Spaghetti🍝",
  "Ilya having a naughty intentions while Hollander is occupied",
  "Ilya pre-NHL draft baby Ilya",
  "Ilya after being saved from his father by Svetlana",
  "Ilya being the best actor ever",
  "Ilya after saying maybe",
  "Ilya comforting his very Panicked (almost) boyfriend",
  "Ilya having the best view",
  "Ilya watching Hollander fold his clothes(very sexy)",
  "Ilya loving all his teammates",
  "Ilya being asked complicated questions",
  "Ilya might knock",
  "Ilya needing some money",
  "Ilya mesmerized by all that is happening in his lap",
  "Ilya sexting 'Montreal Jane'",
  "Ilya in da clurb(All the things she said, all the things she said running through my head, running through my head)",
  "Ilya thirsting for more than just water💦",
  "Ilya going up"
];

// DOM elements
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const showButton = document.getElementById("showIlya");
const resultText = document.getElementById("resultText");
const ilyaImage = document.getElementById("IlyaImage"); // FIXED
const shareButton = document.getElementById("shareTwitter");

// Days per month
const daysInMonth = {
  1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
  7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
};

// Landing page default
resultText.textContent = "What Ilya will come to your birthday party?";
ilyaImage.src = "";
ilyaImage.style.display = "none";

// Update day options
monthInput.addEventListener("change", () => {
  const month = parseInt(monthInput.value, 10);
  dayInput.innerHTML = '<option value="">--</option>';

  if (!month || !daysInMonth[month]) return;

  const maxDay = daysInMonth[month];
  for (let d = 1; d <= maxDay; d++) {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    dayInput.appendChild(option);
  }
});

// Show Ilya
showButton.addEventListener("click", () => {
  const month = parseInt(monthInput.value, 10);
  const day = parseInt(dayInput.value, 10);

  if (!month || !day) {
    resultText.textContent = "What Ilya will come to your birthday party?";
    ilyaImage.src = "";
    ilyaImage.style.display = "none";
    return;
  }

  const index = getIlyaIndex(month, day);

  resultText.textContent = ilyaTexts[index];
  ilyaImage.src = ilyaImages[index];
  ilyaImage.style.display = "block";
});

// Twitter share
shareButton.addEventListener("click", () => {
  if (ilyaImage.style.display === "none") return;

  const text = resultText.textContent;
  const url = "https://holinanov.github.io/Ilya-Rozanov-birthday-finder/";

  const twitterUrl =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  window.open(twitterUrl, "_blank");
});
