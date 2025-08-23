import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  saleType: String,
  projectName: String,
  projectWebsite: String,
  projectDescription: String,
  projectLogo: String;
  projectBaner: String;
  tokenId: String,
  tokenName: String,
  tokenTicker: String,
  hardCap: Number,
  softCap: Number,
  exchangeTokenId: String,
  exchangeTokenSymbol: String,
  exchangeRatio: String,
  duration: Number,
  minContribution: Number,
  maxContribution: Number,
  target: Number,
});

export const projectModel = mongoose.model("projects", projectsSchema);
