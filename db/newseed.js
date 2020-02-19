const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('trips.tsv');
writeUsers.write(`id\tname\tseason\tyear\timageUrl\tdays\tcontinent\tcountry\tcitiesStr\tdescriptionsStr\tnights\tbreakfasts\tlunches\tdinners\tdifferenceStr\tsightseeingStr\ttravelStr\n`, 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (id % 500000 === 0) {
        console.log(id, ' records completed');
      }

      const name = faker.lorem.words(5);
      const season = faker.lorem.word();
      const year = 2020;
      const continent = faker.lorem.word();
      const country = faker.lorem.word();
      const imageUrl = 'https://loremflickr.com/1920/1080/paris';
      const days = faker.random.number({ min: 2, max: 8 });
      const nights = days - 1;

      const citiesArr = [];
      for (let j = 0; j < faker.random.number({ min: 2, max: 4 }); j += 1) {
        citiesArr.push(faker.lorem.word());
      }

      const citiesStr = citiesArr.join(',');

      let descriptionsArr = [];
      for (let k = 0; k < faker.random.number({ min: 2, max: 4 }); k += 1) {
        descriptionsArr.push(faker.lorem.sentence());
      }

      const descriptionsStr = descriptionsArr.join(',');


      const breakfasts = faker.random.number({ min: 1, max: 7 });
      const lunches = faker.random.number({ min: 1, max: 7 });
      const dinners = faker.random.number({ min: 1, max: 7 });

      // generate randomly between 1 and 4 entries with real first word followed by lorem ipsum text
      const firstWord = ['Connect With Locals', 'Stays With Stories', 'Local Specialists', 'Dive Into Culture', 'Make A Difference'];
      const restOfSentence = [
        'volutpat sed',
        'nam at lectus',
        'risus nec feugiat in',
        'quis enim lobortis scelerisque fermentum dui',
        'egestas sed tempus urna et pharetra pharetra',
        'consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis',
        'eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat',
      ];
      let numberOfSentences = Math.floor(Math.random() * 4) + 1;
      const differenceArr = [];
      while (numberOfSentences > 0) {
        const first = firstWord[Math.floor(Math.random() * firstWord.length)].toUpperCase();
        const rest = restOfSentence[Math.floor(Math.random() * restOfSentence.length)];
        // check there are no repeats of the first part
        if (differenceArr.filter((sentence) => sentence.includes(first)).length === 0) {
          differenceArr.push(`${first} ${rest}`);
          numberOfSentences -= 1;
        }
      }
      const differenceStr = differenceArr.join(',');


      // generate randomly between 1 and 4 entries with real first word followed by lorem ipsum text
      const firstWordS = ['City Tour', 'Visit', 'Orientation', 'View', 'See', 'Scenic Drive', 'VIP Admission'];
      const restOfSentenceS = [
        'egestas sed',
        'fermentum et sollicitudin',
        'nunc mi ipsum faucibus',
        'pellentesque pulvinar pellentesque habitant morbi tristique senectus et',
        'egestas sed tempus urna et pharetra pharetra',
        'egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor',
        'consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus',
      ];

      let numberOfSentencesS = Math.floor(Math.random() * 4) + 1;
      const sentences = [];
      while (numberOfSentencesS > 0) {
        const first = firstWordS[Math.floor(Math.random() * firstWordS.length)].toUpperCase();
        const rest = restOfSentenceS[Math.floor(Math.random() * restOfSentenceS.length)];
        // check there are no repeats of the first part
        if (sentences.filter((sentence) => sentence.includes(first)).length === 0) {
          sentences.push(`${first} ${rest}`);
          numberOfSentencesS -= 1;
        }
      }
      let sightseeingStr = sentences.join(',');


      // generate 6-12 travel highlights based on real data from Trafalgar page
      const choices = [
        'Audio Headsets for flexible sightseeing',
        'Luxury air-conditioned coach with Wi-Fi in most countries or alternative transportation (such as rail journeys)',
        'Cherry-picked hotels all tried and trusted',
        'All porterage and restaurant gratuities',
        'Handcrafted Highlights',
        'An expert Travel Director and professional Driver',
        'Daily breakfast and up to half your evening meals',
        'Optional Experiences and free time',
        'Must-see sightseeing and surprise extras',
        'All hotel tips, charges and local taxes',
        'VIP entry to many sights',
        'Airport transfers on the first and last day of your guided holiday',
        'The services of a Trafalgar Local Host at your hotel',
        'Use of Trafalgar\'s Reception Centre offering a range of services including tickets for day trips and local attractions',
      ];
      let numberOfHighlights = Math.floor(Math.random() * (12 - 6 + 1) + 6);
      const highlights = [];
      while (numberOfHighlights > 0) {
        const highlight = choices[Math.floor(Math.random() * (choices.length))];
        if (!highlights.includes(highlight)) {
          highlights.push(highlight);
          numberOfHighlights -= 1;
        }
      }
      let travelStr = highlights.join(',');


      const data = `${id}\t${name}\t${season}\t${year}\t${imageUrl}\t${days}\t${continent}\t${country}\t${citiesStr}\t${descriptionsStr}\t${nights}\t${breakfasts}\t${lunches}\t${dinners}\t${differenceStr}\t${sightseeingStr}\t${travelStr}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
