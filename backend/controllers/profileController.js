import Profile from '../models/Profile.js';

export const upsertMyProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { fullName, email, linkedInUrl, naukriUrl, eduExp } = req.body;

    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const update = {
      user: userId,
      fullName,
      email,
      linkedInUrl,
      naukriUrl,
      eduExp,
    };
    if (resumeUrl) update.resumeUrl = resumeUrl;

    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { $set: update },
      { new: true, upsert: true }
    );

    res.json({ profile });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const profile = await Profile.findOne({ user: userId });
    res.json({ profile });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
