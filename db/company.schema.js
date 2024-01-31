import mongoose from "mongoose";

const company_schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Company = mongoose.models.Company || mongoose.model("Company", company_schema);
export default Company;
