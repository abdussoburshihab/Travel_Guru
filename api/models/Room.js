import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    roomType:{
      type:String,
      required:false
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    roomNumbersWithPrice: [{ number: Number, unavailableDates: { type: [Date] }, price: {type: Number, required:true}  }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
