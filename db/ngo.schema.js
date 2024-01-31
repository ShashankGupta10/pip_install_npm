import mongoose from "mongoose";

const ngo_schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const NGO = mongoose.models.NGO || mongoose.model("NGO", ngo_schema);
export default NGO;
