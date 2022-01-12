//Done
const { kitties } = require('./datasets/kitties');
//Done
const { clubs } = require('./datasets/clubs');
//Done
const { mods } = require('./datasets/mods');
//Done
const { cakes } = require('./datasets/cakes');
//Done
const { classrooms } = require('./datasets/classrooms');
//Done
const { breweries } = require('./datasets/breweries');
//Done
const { nationalParks } = require('./datasets/nationalParks');
//Done
const { books } = require('./datasets/books');
//Done
const { weather } = require('./datasets/weather');
//Done
const { instructors, cohorts } = require('./datasets/turing');
//Done
const { bosses, sidekicks } = require('./datasets/bosses');
//Done
const { constellations, stars } = require('./datasets/astronomy');
//Done
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name);
    return result;

    // Annotation:
    //Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    const result = kitties.map(kitty => {
      return kitty.age + 2;
    })
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    const clubMembers = clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        if (!acc[member]) {
          acc[member] = [club.club];
        } else {
          acc[member].push(club.club);
        }
      });
      return acc;
    }, {});
    return clubMembers;

    // Annotation:
    //Iterate over club.members and set as keys using bracket notation.
    //if [club] contains member, push into [member] array
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    const result = mods.map(index => {
      let stuPerInst = index.students/          index.instructors;
      return {mod: index.mod, studentsPerInstructor:  stuPerInst};
    });
    return result;

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
    //
    const result = cakes.map(cake => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {

    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => {
      return cake.inStock > 0;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {

      acc += cake.inStock;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    return result;


    // Annotation:
    //Access each cake's toppings array
    //Remove toppings from individual array
    //Place in new array if the topping is not already in there.
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }
    const result = cakes.reduce((acc, cake) => {
      const getToppings = cake.toppings.filter(topping => {
        if(!acc[topping]) {
          acc[topping] = 1;
          return acc;
        } else {
          acc[topping] += 1;
          return acc;
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Input: Array of objects.
    // Output: Object is keys of ingredient names and values of how many times
    // the ingredient shows up in the array.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result =
    classrooms.filter(classroom =>
      classroom.program === 'FE'
    );
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    let beClassrooms = classrooms.filter(classroom => classroom.program ==='BE' );
    let feClassrooms = classrooms.filter(classroom =>
      classroom.program === 'FE');
    let reduceMe = feClassrooms.reduce((acc,classroom) => {
      acc += classroom.capacity;
      return acc;
    }, 0);
    let reduceYou = beClassrooms.reduce((acc,classroom) => {
      acc += classroom.capacity;
      return acc;
    }, 0);
    const result = {feCapacity: reduceMe, beCapacity: reduceYou};
    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a,b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']



    const result = books.filter(book => book.genre !== 'Horror');
    const newResult = result.filter(book => book.genre !== 'True Crime');
    const filteredBooks = newResult.map(book => book.title);
    return filteredBooks;

    // Annotation:
    // Returning all books that are NOT horror/true crime
    //Access genre of books
    //If genre !=== "Horror" && "True Crime"

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const newBooks = books.filter(book => book.published > 1989);
    const result = newBooks.map(newBook => {
      return {title: newBook.title, year: newBook.published};
    });
    return result;

    // Annotation:
    //Create array of books published in 1990s
    //Creative array of books published in 2000s
    //Does publishing include 199? What about 20?
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const avgTemps = [];
    const calculateAvgTemp = weather.forEach(place => {
      const avg = (place.temperature.high + place.temperature.low) /2;
      avgTemps.push(avg);
    });
    return avgTemps;

    // Annotation:
    // Access temperature for each location.
    //Add and divide the two numbers
    //Push result into array

  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const sunnyLocations = [];
    const findSunnyLocations = weather.filter(place => {
      return place.type.includes('sunny');
    });
    const weatherReport = findSunnyLocations.map(place => {
      return `${place.location} is ${place.type}.`;
    });
    return weatherReport;

    // Annotation:
    // Create an array for sunny places.
    //Filter through weather locations for places that include sunny.
    //Push places into sunny array.
    //Iterate through the array with map to log them into sentences.
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const sortByHumidity = weather.sort((a, b) => b.humidity - a.humidity);
    return weather[0];

    // Annotation:
    // Sort places my humidity from b-a
    //Return element at index 0.

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    const parks = {
      parksVisited: nationalParks.filter(park => {
        return park.visited === true;
      }).map(park => park.name),
      parksToVisit: nationalParks.filter(park => {
        return park.visited === false;
      }).map(park => park.name),
    };
    return parks;




    // Annotation:
    //Filter parks visited and to visit
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const parkState = nationalParks.map(park => {
      return {[park.location]: park.name};
    });
    return parkState;

    // Annotation:
    //Goal: Output array of same length with key as location and value as park name.
    //Iterate over each park
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((acc, park) => {
      park.activities.forEach(activity => {
        if (!acc.includes(activity)) {
          acc.push(activity);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // We want a single array with NO duplicates
    //Access the nationalParks activites,
    //Check if the array contains the activity elements
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    const totalBeers = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc;
    }, 0);
    return totalBeers;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    const breweryInfo = breweries.map(brewery => {
      return {name: brewery.name, beerCount: brewery.beers.length};
    });
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    return breweryInfo;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    const highestABV = [];
    const sortBeers = breweries.forEach(brewery => {
      brewery.beers.sort((a, b) => {
        return b.abv - a.abv;
      });
      highestABV.push(brewery.beers[0]);
    });
    const sortedHighest = highestABV.sort((a, b) => {
      return b.abv - a.abv;
    });
    return highestABV[0];
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    // Annotation:
    //Goal: output the beers with the highest ABV.
    //Beers is a key on the in the brewery.
    //Sort all the beers, push the highest ABV beers into an array
    //Sort that array and return the result.
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
    const checkCohort = instructors.map(instructor => {
      cohorts.forEach(cohort => {
        if (cohort.module === instructor.module && !instructor.studentCount) {
          instructor.studentCount = cohort.studentCount;
        }
      });
    });
    const instructorCohort = instructors.map(instructor => {
      return {name: instructor.name, studentCount: instructor.studentCount};
    });
    return instructorCohort;

    // Annotation:
    // Create an array of objects with the instructor name.
    // Add key of studentCount and set it to 0.
    //Iterate over cohorts and check if the cohort.module matches instructor.module.
    // If yes, add studentCount to instructor object.
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    const totalInstructors = instructors.reduce((acc, instructor) => {
      if(!acc[instructor.module]) {
        acc[instructor.module] = 0;
        acc[instructor.module]++;
      } else {
        acc[instructor.module]++;
      }
      return acc;
    }, {});
    const displayStudentRatio = cohorts.reduce((acc, cohort) => {
      const modules = Object.keys(totalInstructors);
      const matchModules = modules.find(module => {
        return module === cohort.module.toString();
      });
      acc[`cohort${cohort.cohort}`] = cohort.studentCount/ totalInstructors[matchModules];
      return acc;
    }, {});

    return displayStudentRatio;
    // Annotation:
    // Get a count on how many instructors are in each cohort.
    // Once you have that number, divide cohort.studentCount by it.
    //Create key of each cohort ex= cohort1801;
    //Assign the appropriate value to that key.
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    const result = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      const checkLesson = instructor.teaches.forEach(lesson => {
        cohorts.forEach(cohort => {
          if (cohort.curriculum.includes(lesson) && !acc[instructor.name].includes(cohort.module)) {
            acc[instructor.name].push(cohort.module);
          }
        });
      });
      acc[instructor.name].sort();
      return acc;
    }, {});
    return result;

    // Annotation:
    // Iterate through the instructor array and set names as keys to a value of empty array;
    // Iterate over instructors again, this time checking teaches array.
    //Check to see if 'teaches' elements include any of the cohort.curriculum elements.
    //If yes, push cohort.module into the array.
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach(subject => {
        if(!acc[subject]) {
          acc[subject] = [];
        }
      });
      console.log(acc);
      return acc;
    }, {});
    const goThroughInstructor = instructors.forEach(instructor => {
      instructor.teaches.forEach(lesson => {
        result[lesson].push(instructor.name);
      });
    });
    return result;
    // Annotation:
    // iterate over cohorts and create an object where each subject is a key with an empty array;
    //iterate over instructors array to see if instructor.teaches matches the keys.
    //If yes, push that lesson into subject array;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    const getBossName = Object.keys(bosses);
    const displayBosses = getBossName.map(boss => {
      return {bossName: boss.charAt(0).toUpperCase() + boss.slice(1)};
    });
    const matchBosses = displayBosses.forEach(boss => {
      sidekicks.forEach(sidekick => {
        if(boss.sidekickLoyalty && sidekick.boss === boss.bossName) {
          boss.sidekickLoyalty += sidekick.loyaltyToBoss;
        } else if(!boss.sidekickLoyalty && sidekick.boss === boss.bossName) {
          boss.sidekickLoyalty = 0;
          boss.sidekickLoyalty += sidekick.loyaltyToBoss;
        }
      });
    });
    return displayBosses;

    // Annotation:
    // Create array of objects with boss names as values to property 'bossName'.
    //Sidekicks is an array of objects.
    //Check to see if sidekick.boss === boss[name]
    //If yes, add sidekick.loyaltyToBoss to accumulator
    //Count of numOfSidekicks would need to access matching boss name.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    const starBabies = [];
    const constellationKeys = Object.keys(constellations);
    const result = stars.filter(star => {
      return constellationKeys.forEach(conKey => {
        if (constellations[conKey].stars.includes(star.name)) {
          starBabies.push(star);
        }
      });
    });
    return starBabies;
    // const result =
    // return result;

    // Annotation:
    // Goal: Array of Star Objects that appears in constellations[i].stars;
    // 1) Make constellation into an array so we can iterate through.
    // 2) Access constellation properties with bracket notation for each constellation;
    // 3)
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if (!acc[star.color]) {
        acc[star.color] = [];
        acc[star.color].push(star);
      } else {
        acc[star.color].push(star);
      }
      return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]
    const result = stars.sort((a, b) => {
      return a.visualMagnitude - b.visualMagnitude;
    }).filter(star => {
      if (star.constellation) {
        return star.constellation;
      }
    }).map(star => star.constellation);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    // const weaponInfo = Object.keys(weapons);
    // const calcDamage = weaponInfo.forEach(key => {
    //   console.log(960, weapons[key].damage)
    // });
    const totalDamage = characters.reduce((acc, character) => {
      character.weapons.forEach(charWeap => {
        acc += weapons[charWeap].damage;
      });
      return acc;
    }, 0);
    return totalDamage;
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
    const result = characters.map(character => {
      var totalDamage = 0;
      var totalRange = 0;
      character.weapons.forEach(charWeapon =>  {
        totalDamage += weapons[charWeapon].damage;
        totalRange += weapons[charWeapon].range;
      });
      return {[character.name]: {damage: totalDamage, range: totalRange}};
    });
    return result;
    // Annotation:
    // Goal: Create array of objects where each obj has a key of the character name and
    //a value of the total 'damage' and 'range' of all character's weapons.
    // 1) Create an object with keys of the character names and values of empty objects.
    // 2) Iterate over character weapons array. Match charWeapons to weapons keys to access
    //the numbers.
    // 3) If charWeapons contains the key, add damage and range to respective keys.

  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    const result = movies.reduce((acc, movie) => {
      acc[movie.title] = 0;
      const dinoSpecies = Object.keys(dinosaurs);
      movie.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome) {
          acc[movie.title]++;
        }
      });
      return acc;
    }, {});
    return result;

    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((acc, movie) => {
      const actors = Object.keys(humans);
      let avgAge = 0;
      movie.cast.forEach(castMem => {
        avgAge += (movie.yearReleased - humans[castMem].yearBorn);
      });
      if (!acc[movie.director]) {
        acc[movie.director] = {[movie.title]: Math.floor(avgAge/movie.cast.length)};
      } else {
        acc[movie.director][movie.title] = Math.floor(avgAge/movie.cast.length);
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // Goal: Object is a key of movieDirectorName and a value of an object.
    //The key inside of the object is the movie title and the value is the avg
    //age of the cast the year it came out.
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    //Array of strings representing actor names. ALSO keys to each actor object.

    const actorNames = Object.keys(humans);
    const allCasts = movies.reduce((acc, movie) => {
      movie.cast.forEach(movieCast => {
        acc.push(movieCast);
      });
      return acc;
    }, []);
    const unhiredActors = actorNames.filter(actor => {
      return !allCasts.includes(actor);
    });
    const result = unhiredActors.map(actor => {
      return {name: actor, nationality: humans[actor].nationality, imdbStarMeterRating: humans[actor].imdbStarMeterRating};
    }).sort((a, b) => {
      // return a.nationality.toLowerCase().localeCompare(b.nationality.toLowerCase());;
      if (a.nationality.toLowerCase() < b.nationality.toLowerCase()) {
        return -1;
      }
      if (a.nationality.toLowerCase() > b.nationality.toLowerCase()) {
        return 1;
      }
    });
    return result;
    // console.log(unhiredActors);
    //Tanisha Pseudocode
    // Create new array with all of the movie.casts;
    // Annotation:
    // Data Type Goal: Array of Actor Objects that have NOT been cast in any movies.
    //    - Each object must have national and imbdStarMeterRating;
    //    - The array must be sorted by alphabetically BY NATIONALITY;
    // 1) Filter through humans because we want act objects.
    // 2) If movies[i].cast does not include actor, return actor object.
    // 3) Iterate tbrough new array to only have three properties (name, nationality, imbdStarMeterRating);
    // 4) Sotrt alphabetically by NATIONALITY;
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    const allCasts = movies.reduce((acc, movie) => {
      movie.cast.forEach(castMem => {
        if (!acc.includes(castMem)) {
          acc.push(castMem);
        }
      });
      return acc;
    }, []);
    const actorNames = Object.keys(humans);
    const result = allCasts.map(castMem => {
      let castAge = 0;
      let ageList = [];
      movies.forEach(movie => {
        var actorAge = actorNames.forEach(actor => {
          if (movie.cast.includes(castMem)) {
            castAge = movie.yearReleased - humans[castMem].yearBorn;
          }
        });
        if (!ageList.includes(castAge) && castAge !== 0) {
          ageList.push(castAge);
        }
      });
      return {name: castMem, ages: ageList};
    });
    return result;



    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
