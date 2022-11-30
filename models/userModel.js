import { Schema, model, models } from "mongoose";
import { isEmail } from "validator";
import { hash } from "bcryptjs";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "user must have a unique  name "],
    unique: true,
    trim: true,
    maxLength: [15, "A name must have less or equal 15characters"],
    minLength: [4, "A name must have more or equal 4characters"],
  },
  email: {
    type: String,
    required: [true, "user must have a unique and valid email!"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [isEmail, "please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "set a password bettwen 6 and 40 characters"],
    maxLength: [40, "A password must have less or equal 40characters"],
    minLength: [6, "A password must have more or equal 6characters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "plase a confirm your password"],
    validate: {
      //this only work on CREATE AND SAVE!!
      validator: function (el) {
        return el === this.password;
      },
      message: "password are not the same",
    },
  },

  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  // only run if password is was actually modifed
  // if (!this.isModified("password")) {
  //   return next();
  // }
  //hash the pasword with cost of 12
  this.password = await hash(this.password, 12);
  //delete cofirm pass
  this.passwordConfirm = undefined;
  next();
});

const Users = models.Users || model("Users", userSchema);

export default Users;
