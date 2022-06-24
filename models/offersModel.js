const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    name: String,
    Offers: [
      {
        Offer: String,
        Hotels: [
          {
            HotelName: String,
            countryName: String,
            NightNumber: Number,
            RoomType: String,
            RegisterDate: String,
            price: Number,
            foods: String,
            image1: String,
            image_url: String,
            teps1: String,
            teps2: String,
            teps3: String,
            teps4: String,
            teps5: String,
            teps6: String,
            teps7: String,
            teps8: String,
            teps9: String,
            teps10: String,
          },
        ],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
