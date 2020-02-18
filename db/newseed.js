const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('trips.tsv');
writeUsers.write(`id\tname\tseason\tyear\timageUrl\tdays\tcontinent\tcountry\tcities\tdescriptions\tnights\tbreakfasts\tlunches\tdinners\tthe_trafalgar_difference\tsightseeing_highlights\ttravel_highlights\n`, 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
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
      const cities = JSON.stringify(citiesArr);

      const descriptionsArr = [];
      for (let k = 0; k < faker.random.number({ min: 2, max: 4 }); k += 1) {
        descriptionsArr.push(faker.lorem.sentence());
      }
      const descriptions = JSON.stringify(descriptionsArr);

      const breakfasts = faker.random.number({ min: 1, max: 7 });
      const lunches = faker.random.number({ min: 1, max: 7 });
      const dinners = faker.random.number({ min: 1, max: 7 });

      const trafalgarArr = [];
      for (let k = 0; k < faker.random.number({ min: 2, max: 4 }); k += 1) {
        trafalgarArr.push(faker.lorem.sentence());
      }
      const the_trafalgar_difference = JSON.stringify(trafalgarArr);

      const sightseeingArr = [];
      for (let k = 0; k < faker.random.number({ min: 2, max: 4 }); k += 1) {
        sightseeingArr.push(faker.lorem.sentence());
      }
      const sightseeing_highlights = JSON.stringify(sightseeingArr);

      const highlightsArr = [];
      for (let k = 0; k < faker.random.number({ min: 2, max: 4 }); k += 1) {
        highlightsArr.push(faker.lorem.sentence());
      }
      const travel_highlights = JSON.stringify(highlightsArr);

      const data = `${id}\t${name}\t${season}\t${year}\t${imageUrl}\t${days}\t${continent}\t${country}\t${cities}\t${descriptions}\t${nights}\t${breakfasts}\t${lunches}\t${dinners}\t${the_trafalgar_difference}\t${sightseeing_highlights}\t${travel_highlights}\n`;

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
