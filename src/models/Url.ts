import mongoose, { Schema, Document } from "mongoose";

export interface UrlDocument extends Document {
  originalUrl: string;
  shortUrl: string;
  createdAt: Date;
  expireAt?: Date;
  noOfclicks: number;
  // Additional fields for analytics
  referralSource?: string;
  clickTimestamp?: Date;
  browserType?: string;
  deviceType?: string;
}

const urlSchema: Schema = new Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expireAt: { type: Date, default: Date.now, index: { expires: "1h" } },
  noOfclicks: { type: Number, default: 0, require: true },
  // Additional fields for analytics
  referralSource: String,
  clickTimestamp: Date,
  browserType: String,
  deviceType: String,
});

const Url = mongoose.model<UrlDocument>("Url", urlSchema);

export default Url;
