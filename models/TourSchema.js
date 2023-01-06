import { Schema, model, models } from "mongoose";

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
    maxLength: [40, "A tour must have less or equal 40characters"],
    minLength: [10, "A tour must have more or equal 10characters"],
    validate: {
      validator: function (value) {
        return validator.isAlpha(value.split(" ").join(""));
      },
      message: "Tour name must only contain characters.",
    },
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
    validate: {
      validator: function (val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: "Discount price ({VALUE}) should be below regular price",
    },
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
});

const Tour = models.Tour || model("Tour", tourSchema);

export default Tour;
