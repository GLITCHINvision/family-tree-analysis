const express = require('express');
const router = express.Router();
const FamilyMember = require('../models/familyMember');

router.post('/add', async (req, res) => {
  try {
    const member = new FamilyMember(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const members = await FamilyMember.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const member = await FamilyMember.findById(req.params.id);
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
