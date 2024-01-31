import mongoose from "mongoose";

const ngo_schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  causes: [{
    category: {
      type: String,
      enum: ["philanthropy", "environmental", "ethical", "financial"]
    },
    title: String,
    description: String,
    location: {
      type: String,
      enum: ["thane", "khar", "bandra", "goregaon", "andheri"]
    }
  }]
});

const NGO = mongoose.models.NGO || mongoose.model("NGO", ngo_schema);
export default NGO;
