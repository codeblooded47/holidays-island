var FormData = require("form-data");
var fs = require("fs");
var axios = require("axios");

const uploadImage = async (fileName, country) => {
  const form = new FormData();
  const stream = fs.createReadStream(`./Hotels/${country}/${fileName}`);

  form.append("name", fileName.split(".jpg")[0]);
  form.append("country", country);
  form.append("sampleFile", stream);

  // In Node.js environment you need to set boundary in the header field 'Content-Type' by calling method `getHeaders`
  const formHeaders = form.getHeaders();
  try {
    const response = await axios.post(
      "https://frozen-ravine-64852.herokuapp.com/hotels/update-hotels",
      form,
      {
        headers: {
          ...formHeaders,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }

  console.log(fileName);
};

const main = async () => {
  fs.readdir("./Hotels", async (err, mainfiles) => {
    for (let i = 0; i < mainfiles.length; i++) {
      fs.readdir(`./Hotels/${mainfiles[i]}`, async function (err, files) {
        // console.log(mainfiles[i]);
        for (var j = 0; j < files.length; j++) {
          // if (i < 3) {
          await uploadImage(files[j], mainfiles[i]);
          // }
        }
      });
    }
  });
};

main();
