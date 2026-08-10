import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const data = await Contact.create({
      name,
      email,
      message,
      user: req.user ? req.user.id : undefined
    });

    res.status(201).json({ id: data._id });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const listContacts = async (req, res) => {
  try {
    const items = await Contact.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
