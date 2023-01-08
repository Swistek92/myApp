import { Schema, model, models } from "mongoose";
import slugify from "slugify";
import validator from "validator";
const tourSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
      trim: true,
      maxLength: [40, "A tour must have less or equal 40characters"],
      minLength: [10, "A tour must have more or equal 10characters"],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, "a tour must have a duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "tour must have a group size"],
    },
    difficulty: {
      type: String,
      required: [true, "tour must have a difficult"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "difficulty is either: easy medium or diffcult",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "rating must be hinger or equal 1"],
      max: [5, "rating must be lower or equal 5"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    priceDiscount: {
      type: Number,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "a tour must have a summary"],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "a tour must have a cover image"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
    // secretTour: {
    //   type: Boolean,
    //   default: false,
    // },
    // startLocation: {
    //   //geoJSON
    //   type: {
    //     type: String,
    //     default: "Point",
    //     enum: ["Point"],
    //   },
    //   coordinates: [Number],
    //   adress: String,
    //   drescription: String,
    // },
    // locations: [
    //   {
    //     type: {
    //       type: String,
    //       default: "Point",
    //       enum: ["Point"],
    //     },
    //     coordinates: [Number],
    //     adress: String,
    //     drescription: String,
    //     day: Number,
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

tourSchema.virtual("durationWeeks").get(function () {
  return this.duration / 7;
});

tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// tourSchema.pre("save", function (next) {
//   console.log("save doc");
//   next();
// });

// tourSchema.post("save", function (doc, next) {
//   console.log(doc);
//   next();
// });

const Tour = models.Tour || model("Tour", tourSchema);

export default Tour;
