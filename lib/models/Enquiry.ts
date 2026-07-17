import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  tour: String,
  message: String,
  pickupLocation: String,
  passengers: String,
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);