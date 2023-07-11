const fs = require('fs');
const axios = require('axios');
const { parse } = require('url');

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Couldn't read ${filename}: ${err}`);
    process.exit(1);
  }

  const urls = data.split('\n');

  
  urls.forEach(async (url) => {
    try {
      const response = await axios.get(url);

      const { hostname } = parse(url);

      const outputFilename = `${hostname}.txt`;

      fs.writeFile(outputFilename, response.data, 'utf8', (err) => {
        if (err) {
          console.error(`Couldn't write to ${outputFilename}: ${err}`);
        } else {
          console.log(`Wrote to ${outputFilename}`);
        }
      });
    } catch (err) {
      console.error(`Couldn't download ${url}: ${err}`);
    }
  });
});

