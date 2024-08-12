const express = require('express');
const router = express.Router();
const Game = require('../models/Game');



//get specific game using game_id
router.get('/games/:game_id', async (req, res) => {
    try {
        const game = await Game.findById(req.params.game_id);
        if (!game) {
            return res.status(404).json({ message: 'Game Not Found' });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
