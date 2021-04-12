// Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };
// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }
// const verdict = declareMurderer();
// console.log(verdict);

// ** 'The murderer is Miss Scarlet.'


// ** Episode 2
// const murderer = 'Professor Plum';
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ** Initial - 'The murderer is Mrs. Peacock', because we have called changeMurderer before declareMurderer
// ** Revised - Error, as initial murderer declaration is a const


// ** Episode 3
// let murderer = 'Professor Plum';
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
 
// ** Two outputs.
// ** First Verdict: The murderer is Mrs. Peacock
// **** First verdict calls declareMurderer method, which changes murderer to Mrs Peacock
// ** Second Verdict: The murderer is Professor Plum
// **** Second verdict calls the global murderer, which is professor plum. The Mrs Peacock is local in declareMurderer


// ** Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// ** Two outputs
// ** The suspects are Miss Scarler, Professor Plum, Colonol Mustard - Because we've called declareAllSuspects, and have thanged suspect 3 to Colonel
// ** Suspect three is Mrs Peacock - Grabbed global suspect three


// ** Episode 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// ** The weapon is the revolver - We have called changeweapon, then declareweapon


//** Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ** The murderer is Mrs. White
// ** We changed from Colonel to Mr Green with changeMurderer
// ** Then within, ran another function to change to Mrs White, and called it
// ** then called changeMurderer, before declareMurderer


// ** Episode 7
// let murderer = 'Professor Plum';
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//     unexpectedOutcome();
//   }
//   plotTwist();
// }
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ** The murderer is Mr Green
// ** We start with Professor Plum, call changeMurderer to get mr Green
// ** Then calls plotTwist, which makes a new local variable for murderer to colonel mustard
// ** Within plotTwist, unexpectedOutcome changes the local plotTwist murderer variable to Miss Scarlet
// ** However the return from these isn't asked for.
// ** DeclareMurderer asks for the global murderer, which at this point is Mr Green


// ** Episode 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };
// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }
//         const unexpectedOutcome = function(murderer){
//             if(scenario.murderer === murderer){
//                 scenario.weapon = 'Candle Stick';
//             }
//         }
//         unexpectedOutcome('Colonel Mustard');
//     }
//     plotTwist('Dining Room');
// }
// const declareWeapon = function() {
//     return `Thw weapon is ${scenario.weapon}.`
// }
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

  // ** 'The weapon is candle stick'
  // ** initial weapon is lead pipe
  // ** Calling changeScenario()
  // ** Changing room to dining room
  // ** Calling plotTwist('Dining Room')
  // ** Dining room matched, Murderer is now colonel Mustard
  // ** Calling unexpectedOutcome('colonel mustard')
  // ** Colonel mustard matched, weapon is now candle stick
  // ** Function complete, scenario is now Colonel Mustard, Dining Room, Candle Stick
  // ** Output for declareweapon() print is then Candle Stick


  // ** Episode 9

  let murderer = 'Professor Plum';

  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

  // ** if murderer... -> True. Makes a new variable, let murderer = Mrs Peacock. This is already defined
  // ** this will print something like 'murderer already defined', or it'll ignore the new let entirely, and print professor plum

  // ** Revised - Output was professer plum