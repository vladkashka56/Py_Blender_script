import fs from "fs";

const rarities = [
  { value: "Scavenger", weight: 1, modifier: 0 },
  { value: "Blacksmith", weight: 0.3333, modifier: 0.1 },
  { value: "Rancher", weight: 0.1, modifier: 0.2 },
  { value: "Sheriff", weight: 0.03333, modifier: 0.25 },
  { value: "Gunslinger", weight: 0.01, modifier: 0.3 },
  { value: "Mercenary", weight: 0.003333, modifier: 0.35 },
  { value: "Bounty Hunter", weight: 0.001, modifier: 0.4 },
];

const rarityModifier = [
  { value: "Scavenger", rarity: rarities[0] },
  { value: "Blacksmith", rarity: rarities[1] },
  { value: "Rancher", rarity: rarities[2] },
  { value: "Sheriff", rarity: rarities[3] },
  { value: "Gunslinger", rarity: rarities[4] },
  { value: "Mercenary", rarity: rarities[5] },
  { value: "Bounty Hunter", rarity: rarities[6] },
];

const Outfit = [
  { value: "Yuma", rarity: rarities[0] },
  { value: "Tombstone", rarity: rarities[2] },
  { value: "Durango (Dual Brass Belt)", rarity: rarities[1] },
  { value: "Durango (Dual Silver Belt)", rarity: rarities[1] },
  { value: "Escalante (Dual Brass Belt)", rarity: rarities[1] },
  { value: "Escalante (Dual Silver Belt)", rarity: rarities[1] },
  { value: "Sedona (Dual Brass Belt)", rarity: rarities[0] },
  { value: "Sedona (Dual Silver Belt)", rarity: rarities[0] },
];

const Head = [
  { value: "Gold Desperado (Blue Eyes)", rarity: rarities[0] },
  { value: "Gold Desperado (Orange Eyes)", rarity: rarities[0] },
  { value: "Gold Desperado (Red Eyes)", rarity: rarities[0] },
  { value: "Gold Desperado (Purple Eyes)", rarity: rarities[0] },

  { value: "Silver Desperado (Blue Eyes)", rarity: rarities[0] },
  { value: "Silver Desperado (Orange Eyes)", rarity: rarities[0] },
  { value: "Silver Desperado (Red Eyes)", rarity: rarities[0] },
  { value: "Silver Desperado (Purple Eyes)", rarity: rarities[0] },

  { value: "Bronze Desperado (Blue Eyes)", rarity: rarities[0] },
  { value: "Bronze Desperado (Orange Eyes)", rarity: rarities[0] },
  { value: "Bronze Desperado (Red Eyes)", rarity: rarities[0] },
  { value: "Bronze Desperado (Purple Eyes)", rarity: rarities[0] },

  { value: "Bronze Oni (Blue Eyes)", rarity: rarities[3] },
  { value: "Bronze Oni (Orange Eyes)", rarity: rarities[3] },
  { value: "Bronze Oni (Purple Eyes)", rarity: rarities[3] },
  { value: "Bronze Oni (Red Eyes)", rarity: rarities[4] },

  { value: "Gold Oni (Blue Eyes)", rarity: rarities[3] },
  { value: "Gold Oni (Orange Eyes)", rarity: rarities[3] },
  { value: "Gold Oni (Purple Eyes)", rarity: rarities[3] },
  { value: "Gold Oni (Red Eyes)", rarity: rarities[4] },

  { value: "Silver Oni (Blue Eyes)", rarity: rarities[3] },
  { value: "Silver Oni (Orange Eyes)", rarity: rarities[3] },
  { value: "Silver Oni (Purple Eyes)", rarity: rarities[3] },
  { value: "Silver Oni (Red Eyes)", rarity: rarities[3] },

  { value: "Gold Pathfinder (Blue Eyes)", rarity: rarities[1] },
  { value: "Gold Pathfinder (Orange Eyes)", rarity: rarities[1] },
  { value: "Gold Pathfinder (Red Eyes)", rarity: rarities[1] },
  { value: "Gold Pathfinder (Purple Eyes)", rarity: rarities[1] },

  { value: "Silver Pathfinder (Blue Eyes)", rarity: rarities[1] },
  { value: "Silver Pathfinder (Orange Eyes)", rarity: rarities[1] },
  { value: "Silver Pathfinder (Red Eyes)", rarity: rarities[1] },
  { value: "Silver Pathfinder (Purple Eyes)", rarity: rarities[1] },

  { value: "Bronze Pathfinder (Blue Eyes)", rarity: rarities[1] },
  { value: "Bronze Pathfinder (Orange Eyes)", rarity: rarities[1] },
  { value: "Bronze Pathfinder (Red Eyes)", rarity: rarities[1] },
  { value: "Bronze Pathfinder (Purple Eyes)", rarity: rarities[1] },

  { value: "Gold Anasazi (Blue Eyes)", rarity: rarities[2] },
  { value: "Gold Anasazi (Orange Eyes)", rarity: rarities[2] },
  { value: "Gold Anasazi (Red Eyes)", rarity: rarities[2] },
  { value: "Gold Anasazi (Purple Eyes)", rarity: rarities[2] },

  { value: "Silver Anasazi (Blue Eyes)", rarity: rarities[2] },
  { value: "Silver Anasazi (Orange Eyes)", rarity: rarities[2] },
  { value: "Silver Anasazi (Red Eyes)", rarity: rarities[2] },
  { value: "Silver Anasazi (Purple Eyes)", rarity: rarities[2] },

  { value: "Bronze Anasazi (Blue Eyes)", rarity: rarities[2] },
  { value: "Bronze Anasazi (Orange Eyes)", rarity: rarities[2] },
  { value: "Bronze Anasazi (Red Eyes)", rarity: rarities[2] },
  { value: "Bronze Anasazi (Purple Eyes)", rarity: rarities[3] },

  { value: "Gold Deputy", rarity: rarities[1] },

  { value: "Silver Deputy (Blue Eyes)", rarity: rarities[1] },
  { value: "Silver Deputy (Orange Eyes)", rarity: rarities[1] },
  { value: "Silver Deputy (Purple Eyes)", rarity: rarities[1] },
  { value: "Silver Deputy (Red Eyes)", rarity: rarities[1] },

  { value: "Titanium Enforcer (Blue Eyes)", rarity: rarities[2] },
  { value: "Titanium Enforcer (Orange Eyes)", rarity: rarities[2] },
  { value: "Titanium Enforcer (Purple Eyes)", rarity: rarities[2] },
  { value: "Titanium Enforcer (Red Eyes)", rarity: rarities[2] },

  { value: "Gold Enforcer (Blue Eyes)", rarity: rarities[3] },
  { value: "Gold Enforcer (Orange Eyes)", rarity: rarities[3] },
  { value: "Gold Enforcer (Purple Eyes)", rarity: rarities[3] },
  { value: "Gold Enforcer (Red Eyes)", rarity: rarities[3] },

  { value: "Silver Enforcer (Blue Eyes)", rarity: rarities[2] },
  { value: "Silver Enforcer (Orange Eyes)", rarity: rarities[2] },
  { value: "Silver Enforcer (Purple Eyes)", rarity: rarities[2] },
  { value: "Silver Enforcer (Red Eyes)", rarity: rarities[2] },

  { value: "Gold Scout", rarity: rarities[3] },
  { value: "Gold Scout w/Glasses", rarity: rarities[3] },
  { value: "Brass Scout", rarity: rarities[3] },
  { value: "Brass Scout w/Glasses", rarity: rarities[3] },

  { value: "Bronze Scout", rarity: rarities[3] },
  { value: "Bronze Scout w/Glasses", rarity: rarities[3] },

  { value: "Brass Scout w/Steampunk Goggles", rarity: rarities[3] },
  { value: "Silver Scout w/Steampunk Goggles", rarity: rarities[4] },

  { value: "Silver Scout", rarity: rarities[3] },
];

const Hat = [
  { value: "Southwest (Tan)", rarity: rarities[1] },
  { value: "Southwest (Brown)", rarity: rarities[1] },
  { value: "McClintock (Black)", rarity: rarities[0] },
  { value: "McClintock (Brown)", rarity: rarities[0] },
  { value: "Josey", rarity: rarities[1] },
  { value: "Brimley", rarity: rarities[1] },
  { value: "Wayne", rarity: rarities[2] },
  { value: "Rife", rarity: rarities[2] },
];

const Guns = [
  { value: "Bone (Left)", rarity: rarities[0] },
  { value: "Tungsten (Left)", rarity: rarities[0] },
  { value: "Gold (Left)", rarity: rarities[0] },
  { value: "Bone (Right)", rarity: rarities[0] },
  { value: "Tungsten (Right)", rarity: rarities[0] },
  { value: "Gold (Right)", rarity: rarities[0] },
  { value: "Tungsten (Left & Right)", rarity: rarities[1] },
  { value: "Gold (Left & Right)", rarity: rarities[1] },
  { value: "Mahogany (Left & Right)", rarity: rarities[1] },
  { value: "Steampunk (Left & Right)", rarity: rarities[1] },
  { value: "Bone (Left, Right, & Concealed)", rarity: rarities[3] },
  { value: "Gold (Left, Right, & Concealed)", rarity: rarities[3] },
  { value: "Doc Holliday (Left)", rarity: rarities[5] },
  { value: "Doc Holliday (Left & Right)", rarity: rarities[5] },
];

const Back = [
  { value: "Bandolier (Gold)", rarity: rarities[1] },
  { value: "Bandolier (Gold w/Rifle)", rarity: rarities[1] },
  { value: "Bandolier (Gold w/Katana)", rarity: rarities[2] },
  { value: "Bandolier (Gold w/Knife & Rifle)", rarity: rarities[1] },
  { value: "Bandolier (Gold w/Knife & Katana)", rarity: rarities[6] },
  { value: "Bandolier (Silver)", rarity: rarities[0] },
  { value: "Bandolier (Silver w/Rifle)", rarity: rarities[0] },
  { value: "Bandolier (Silver w/Katana)", rarity: rarities[0] },
  { value: "Respirator", rarity: rarities[3] },
];

const Epaulettes = [
  { value: "Classic", rarity: rarities[2] },
  { value: "Artemus Blue (L)", rarity: rarities[3] },
  { value: "Artemus Blue (R)", rarity: rarities[3] },
  { value: "Artemus Green (L)", rarity: rarities[3] },
  { value: "Artemus Green (R)", rarity: rarities[3] },
  { value: "Artemus Red (L)", rarity: rarities[4] },
  { value: "Artemus Red (R)", rarity: rarities[4] },
  { value: "Sode Black (L)", rarity: rarities[5] },
  { value: "Sode Black (R)", rarity: rarities[5] },
  { value: "Sode Blue (L)", rarity: rarities[6] },
  { value: "Sode Blue (R)", rarity: rarities[6] },
  { value: "Sode Bronze (L)", rarity: rarities[1] },
  { value: "Sode Bronze (R)", rarity: rarities[1] },
];

const Vambrace = [
  { value: "Jango", rarity: rarities[2] },
  { value: "Loveless (L)", rarity: rarities[1] },
  { value: "Loveless (R)", rarity: rarities[1] },
  { value: "Loveless Apocalyptic (L)", rarity: rarities[3] },
  { value: "Loveless Apocalyptic (R)", rarity: rarities[3] },
  { value: "Loveless Silver (L)", rarity: rarities[4] },
  { value: "Loveless Silver (R)", rarity: rarities[4] },
  { value: "Oroku (L)", rarity: rarities[2] },
  { value: "Oroku (R)", rarity: rarities[2] },
  { value: "Oroku Gold (L)", rarity: rarities[0] },
  { value: "Oroku Gold (R)", rarity: rarities[0] },
  { value: "Oroku Titanium (L)", rarity: rarities[1] },
  { value: "Oroku Titanium (R)", rarity: rarities[1] },
  { value: "Kilokahn (L)", rarity: rarities[2] },
  { value: "Kilokahn (R)", rarity: rarities[2] },
  { value: "Revolver (L)", rarity: rarities[0] },
  { value: "Revolver (R)", rarity: rarities[0] },
  { value: "Parisi (L)", rarity: rarities[1] },
  { value: "Parisi (R)", rarity: rarities[1] },
  { value: "Inferno (L)", rarity: rarities[5] },
  { value: "Inferno (R)", rarity: rarities[5] },
  { value: "Dart (L)", rarity: rarities[4] },
  { value: "Dart (R)", rarity: rarities[4] },
  { value: "Dual Revolver (L)", rarity: rarities[1] },
  { value: "Dual Revolver (R)", rarity: rarities[1] },
  { value: "Bushido (L)", rarity: rarities[4] },
  { value: "Bushido (R)", rarity: rarities[4] },
  { value: "T800 (L)", rarity: rarities[1] },
  { value: "T800 (R)", rarity: rarities[1] },
];

const Torso = [
  { value: "Bandana (Apocalypse)", rarity: rarities[0] },
  { value: "Bandana (Josey)", rarity: rarities[0] },
  { value: "Utility Belt (Apocalypse)", rarity: rarities[0] },
  { value: "Utility Belt (Josey)", rarity: rarities[0] },
  { value: "Plackart (Apocalypse)", rarity: rarities[0] },
  { value: "Plackart (Josey)", rarity: rarities[0] },
  { value: "Utility Belt (Apocalypse w/Bandana)", rarity: rarities[1] },
  { value: "Utility Belt (Josey w/Bandana)", rarity: rarities[1] },
  { value: "Plackart (Apocalypse w/Bandana)", rarity: rarities[1] },
  { value: "Plackart (Josey w/Bandana)", rarity: rarities[1] },
  { value: "Plackart (Apocalypse w/Utility Belt)", rarity: rarities[1] },
  { value: "Plackart (Josey w/Utility Belt)", rarity: rarities[1] },
  { value: "Bundle (Apocalypse)", rarity: rarities[2] },
  { value: "Bundle (Josey)", rarity: rarities[2] },
  { value: "Bundle (Classic)", rarity: rarities[2] },
  { value: "Bundle (Classic Red)", rarity: rarities[2] },
  { value: "Plackart (Black Ninja)", rarity: rarities[3] },
  { value: "Plackart (Green Ninja)", rarity: rarities[3] },
  { value: "Bolo Longhorn", rarity: rarities[2] },
  { value: "Bolo Longhorn Alien", rarity: rarities[4] },
  { value: "Bolo Longhorn Gold", rarity: rarities[3] },
  { value: "Mangas", rarity: rarities[5] },
];

const Arms = [
  { value: "Robot (Bronze)", rarity: rarities[0] },
  { value: "Robot (Gold)", rarity: rarities[0] },
  { value: "Robot (Silver)", rarity: rarities[0] },
  { value: "Black w/Bronze Gloves", rarity: rarities[0] },
  { value: "Tan w/Titanium Gloves", rarity: rarities[0] },
  { value: "White w/Gold Gloves", rarity: rarities[0] },
  { value: "White w/Red Gloves", rarity: rarities[1] },
  { value: "Black w/Copper (L) Bronze Prosthesis (R)", rarity: rarities[0] },
  { value: "Black w/Copper (L) Gold Prosthesis (R)", rarity: rarities[0] },
  { value: "Black w/Copper (L) Silver Prosthesis (R)", rarity: rarities[0] },
  { value: "White w/Titanium (L) Bronze Prosthesis (R)", rarity: rarities[1] },
  { value: "White w/Titanium (L) Gold Prosthesis (R)", rarity: rarities[1] },
  { value: "White w/Titanium (L) Silver Prosthesis (R)", rarity: rarities[1] },
  { value: "Tan w/Titanium (L) Bronze Prosthesis (R)", rarity: rarities[1] },
  { value: "Tan w/Titanium (L) Gold Prosthesis (R)", rarity: rarities[1] },
  { value: "Tan w/Titanium (L) Silver Prosthesis (R)", rarity: rarities[1] },
  { value: "White w/Red (L) Bronze Prosthesis (R)", rarity: rarities[2] },
  { value: "White w/Red (L) Gold Prosthesis (R)", rarity: rarities[2] },
  { value: "White w/Red (L) Silver Prosthesis (R)", rarity: rarities[2] },
  { value: "Bronze Prosthesis (L) Black w/Copper (R)", rarity: rarities[0] },
  { value: "Gold Prosthesis (L) Black w/Copper (R)", rarity: rarities[0] },
  { value: "Silver Prosthesis (L) Black w/Copper (R)", rarity: rarities[0] },
  { value: "Bronze Prosthesis (L) White w/Titanium (R)", rarity: rarities[1] },
  { value: "Gold Prosthesis (L) White w/Titanium (R)", rarity: rarities[1] },
  { value: "Silver Prosthesis (L) White w/Titanium (R)", rarity: rarities[1] },
  { value: "Bronze Prosthesis (L) Tan w/Titanium (R)", rarity: rarities[1] },
  { value: "Gold Prosthesis (L) Tan w/Titanium (R)", rarity: rarities[1] },
  { value: "Silver Prosthesis (L) Tan w/Titanium (R)", rarity: rarities[1] },
  { value: "Bronze Prosthesis (L) White w/Red (R)", rarity: rarities[2] },
  { value: "Gold Prosthesis (L) White w/Red (R)", rarity: rarities[2] },
  { value: "Silver Prosthesis (L) White w/Red (R)", rarity: rarities[2] },
];

const Garment = [
  { value: "Jacket (Blue)", rarity: rarities[2] },
  { value: "Jacket (Black)", rarity: rarities[2] },
  { value: "Duster (Brown)", rarity: rarities[2] },
  { value: "Duster (Red)", rarity: rarities[2] },
  { value: "Poncho", rarity: rarities[2] },
  { value: "Cape", rarity: rarities[2] },
  { value: "Cape (w/Gauntlet)", rarity: rarities[2] },
];

const Boots = [
  { value: "Murrieta", rarity: rarities[0] },
  { value: "Hickok", rarity: rarities[0] },
  { value: "Rogers", rarity: rarities[0] },
  { value: "Eastwood", rarity: rarities[0] },
  { value: "Vitaly", rarity: rarities[1] },
  { value: "Raven", rarity: rarities[1] },
  { value: "Hiro", rarity: rarities[1] },
];

const Backgrounds = [
  { value: "Ammo_Depot", rarity: rarities[0] },
  { value: "Space_Wagon_BD", rarity: rarities[0] },
  { value: "Train_Scene_BD_Frame", rarity: rarities[3] },
  { value: "Jail", rarity: rarities[0] },
  { value: "Crypto Mine", rarity: rarities[1] },
  { value: "Canyon_BD_Frame", rarity: rarities[1] },
  { value: "Campfire", rarity: rarities[2] },
  { value: "Saloon_Outdoors_BD", rarity: rarities[1] },
  { value: "Teleporter_BD_Frame", rarity: rarities[2] },
  { value: "Interior_Saloon_BD_Frame", rarity: rarities[2] },
];

const getTableOutput = (randomNumber, table, min = 0) => {
  let totalVal;
  totalVal = table.reduce((a, b) => a + b.rarity.weight, 0);

  const adjustedVal = totalVal - min;
  const roll = randomNumber * adjustedVal + min;

  for (let i = 0; i < table.length; i++) {
    if (i === 0) table[i]["min"] = 0;
    else
      table[i]["min"] = table
        .slice(0, i)
        .reduce((a, b) => a + b.rarity.weight, 0);
    if (i === table.length - 1) table[i]["max"] = totalVal + 1000;
    else
      table[i]["max"] = table
        .slice(0, i + 1)
        .reduce((a, b) => a + b.rarity.weight, 0);
  }

  const output = table.find((x) => roll >= x["min"] && roll <= x.max);

  return output;
};

let alreadyCreated = [];

function generateStats() {
  // Rarity modifier
  let rarity = getTableOutput(Math.random(), rarityModifier);
  const fixedRarityModifier = rarities.find(
    (x) => x.value === rarity.value
  ).modifier;

  const outfit = getTableOutput(Math.random(), Outfit, fixedRarityModifier);

  const head = getTableOutput(Math.random(), Head, fixedRarityModifier);

  const hat = getTableOutput(Math.random(), Hat, fixedRarityModifier);

  const boots = getTableOutput(Math.random(), Boots, fixedRarityModifier);

  const back = getTableOutput(Math.random(), Back, fixedRarityModifier);

  const isBandolier = back.value.includes("Bandolier")

  const garment =
    back.value != "Respirator"
      ? getTableOutput(Math.random(), Garment, fixedRarityModifier)
      : getTableOutput(
          Math.random(),
          [
            { value: "Jacket (Blue)", rarity: rarities[2] },
            { value: "Jacket (Black)", rarity: rarities[4] },
          ],
          fixedRarityModifier
        );

  const isDusterOrJacket = garment.value.includes("Duster") || garment.value.includes("Jacket")

  // const VambraceIfDusterOrJacket = Vambrace.filter((vambrace) => {
  //   return !vambrace.value.includes("Loveless") && !vambrace.value.includes("Jango") && !vambrace.value.includes("Slicer");;
  // });

  const vambrace = isDusterOrJacket? null : getTableOutput(Math.random(), Vambrace, fixedRarityModifier);


  const EpaulettesIfBandolier = Epaulettes.filter((epaulettes) => {
    return !epaulettes.value.includes("(R)")
  });

  const epaulettes = getTableOutput(Math.random(), isBandolier ? EpaulettesIfBandolier : Epaulettes, fixedRarityModifier);

  const isPoncho = garment.value.includes("Poncho");

  const TorsoIfPoncho = Torso.filter((torso) => {
    return !torso.value.includes("Utility") && !torso.value.includes("Plackart") && !torso.value.includes("Bundle");
  });

  const torso = getTableOutput(Math.random(), isPoncho ? TorsoIfPoncho : Torso, fixedRarityModifier);

  const arms = getTableOutput(Math.random(), Arms, fixedRarityModifier);

  const backgrounds = getTableOutput(
    Math.random(),
    Backgrounds,
    fixedRarityModifier
  );

  const GunsIfPoncho = Guns.filter((gun) => {
    return !gun.value.includes("(Left, Right, & Concealed)");
  });

  const guns = getTableOutput(Math.random(), isPoncho ? GunsIfPoncho : Guns, fixedRarityModifier);

  let hash =
    rarity.value +
    " | " +
    outfit.value +
    " | " +
    head.value +
    " | " +
    hat.value;

  const cowboy = {
    description: "",
    external_url: "",
    image: "",
    name: hash,
    attributes: [
      {
        trait_type: "outfit",
        value: outfit.value,
      },
      {
        trait_type: "head",
        value: head.value,
      },
      {
        trait_type: "hat",
        value: hat.value,
      },
      {
        trait_type: "boots",
        value: boots.value,
      },
      {
        trait_type: "back",
        value: back.value,
      },
      {
        trait_type: "epaulettes",
        value: epaulettes.value,
      },
      {
        trait_type: "torso",
        value: torso.value,
      },
      {
        trait_type: "arms",
        value: arms.value,
      },
      {
        trait_type: "garment",
        value: garment.value,
      },
      {
        trait_type: "guns",
        value: guns.value,
      },
      {
        trait_type: "backgrounds",
        value: backgrounds.value,
      },
    ],
    rarity: rarity.value
  };

  // add vambrace item if is not null
  if(vambrace) {
    cowboy.attributes.push(      {
      trait_type: "vambrace",
      value: vambrace.value,
    })
  }

  alreadyCreated.push(cowboy);

  return cowboy;
}

const series = [];
// How many cowboys to generate in the series?
const seriesSize = 100;

for (let i = 0; i < seriesSize; i++) {
  const cowboy = generateStats();

  if (!cowboy.duplicate) series.push(cowboy);
}

console.log("cowboy", series)


console.log(
  "Scavengers",
  series.filter((cowboy) => cowboy.rarity === "Scavenger").length
);
console.log(
  "Blacksmiths",
  series.filter((cowboy) => cowboy.rarity === "Blacksmith").length
);
console.log(
  "Ranchers",
  series.filter((cowboy) => cowboy.rarity === "Rancher").length
);
console.log(
  "Sheriffs",
  series.filter((cowboy) => cowboy.rarity === "Sheriff").length
);
console.log(
  "Gunslingers",
  series.filter((cowboy) => cowboy.rarity === "Gunslinger").length
);
console.log(
  "Mercenaries",
  series.filter((cowboy) => cowboy.rarity === "Mercenary").length
);
console.log(
  "Bounty Hunters",
  series.filter((cowboy) => cowboy.rarity === "Bounty Hunter").length
);

console.log(
  "Ravens",
  series.filter((cowboy) => JSON.stringify(cowboy).includes("Raven")).length
);

console.log(
  "Onis",
  series.filter((cowboy) => JSON.stringify(cowboy).includes("Oni")).length
);

const seriesFiltered = [];
series.forEach((cowboy) => {
  const newCowboy = { ...cowboy };
  delete newCowboy["duplicate"];
  delete newCowboy["hash"];
  delete newCowboy["rarity"];
  seriesFiltered.push(newCowboy);
});

console.log(
  "Made a series with",
  seriesSize,
  "attempted. Generated",
  seriesFiltered.length,
  "cowboys"
);
if (seriesFiltered.length < seriesSize) {
  console.log(
    "Try adding more unique options to generators to increase likelihood of successful generation"
  );
}

const data = JSON.stringify(seriesFiltered);

fs.writeFileSync("data.json", data);