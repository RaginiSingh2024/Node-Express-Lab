import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    linkedInUrl: { type: String, trim: true },
    naukriUrl: { type: String, trim: true },
    eduExp: { type: String, trim: true },
    resumeUrl: { type: String, trim: true }
  },
  { timestamps: true }
);

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
