"use strict";

var data = [
  "1337,AIA Miami Center for Architecture & Design,100 NE 1st Ave",
  "134,123 Burger Shot Beer,738 10th Ave",
  "3197,123 Burger Shot Beer,738 10th Ave",
  "354,B.B. King Blues Club & Grill,237 W 42nd St",
  "4687,115 Bourbon Street,3359 W 115th St",
  "1771,Children's Health Council,650 Clark Way",
  "1016,Houston Improv Comedy Club,7620 Katy Fwy",
  "1086,Katra,217 Bowery",
  "1999,Ter-Tini's,7050 Crystal Dr",
  "1518,Olana State Historic Site,5720 NY-9G",
  "537,Ruby Skye,420 Mason St",
  "84321,1757 Golf Club,45120 Waxpool Rd",
  "1167,Lehi Public Library,120 N Center St",
  "1896,St. Vincent's Medical Center Riverside,1 Shircliff Way",
  "11264,1871,222 W Merchandise Mart Plaza #1212",
  "2150,The Manor,1327 Connecticut Ave NW",
  "1931,The PIT,123 E 24th St",
  "2269,Tongue & Groove,565 Main St NE",
  "1860,Soma Vida,2324 E Cesar Chavez St",
  "9613,1 Bligh Street,1 Bligh Street",
  "133,115 Bourbon Street,3359 W 115th St",
  "135,1757 Golf Club,45120 Waxpool Rd",
  "101,1015 Folsom,1015 Folsom St",
  "137,21 Acres,13701 NE 171st St",
  "126,1871,222 W Merchandise Mart Plaza #1212",
  "141,301 Nightlife,301 S Ochoa St",
  "29,AIA Miami Center for Architecture & Design,100 NE 1st Ave",
  "2187,The PIT,123 E 24th St",
  "142,3Hues Painting Studio,17702 W Little York Rd #300",
  "22,440 Studios,440 Lafayette St",
  "143,3S Artspace,319 Vaughan St",
  "145,4BroadwayDover.com,4 Broadway",
  "2007,The Alloy Studios,5530 Penn Ave",
  "146,50 Mason Social House,50 Mason St",
  "147,6B Lounge,6 Beacon St",
  "76,1 Bligh Street,1 Bligh Street",
  "144,49 Social,49 Temple Pl",
  "13,Katra,217 Bowery",
  "87,3S Artspace,319 Vaughan St",
  "151,717 LOUNGE,717 N Westover Blvd"
];

// breaks strings in data down into arrays of id, venue name, address
let mapArr = data.map(string => string.split(","));

// compare name and address elements of each array with others to see if they are duplicates
let dupArr = [];

for (let i = 0; i < mapArr.length; i++) {
  for (let j = 0; j < mapArr.length; j++) {
    if (i !== j) {
      // eliminates false positives based on same mapArr element
      // if the venue name and address are the same push the 2 ids to dupArr
      if (mapArr[i][1] === mapArr[j][1] && mapArr[i][2] === mapArr[j][2]) {
        dupArr.push([mapArr[i][0], mapArr[j][0]]);
      }
    }
  }
}

// sort each of the id pair arrays so lodash uniqWith will work
for (let i = 0; i < dupArr.length; i++) {
  dupArr[i].sort((a, b) => {
    return a - b;
  });
}

// use lodash uniqWith to filter out duplicate results
let resultArr = _.uniqWith(dupArr, _.isEqual);

// get the output div
const outputDiv = document.querySelector(".output");

let outputString = "";
for (let i = 0; i < resultArr.length; i++) {
  outputString += `<p>id: ${resultArr[i][0]}, duplicate: ${resultArr[i][1]}`;
}

outputDiv.innerHTML = outputString;