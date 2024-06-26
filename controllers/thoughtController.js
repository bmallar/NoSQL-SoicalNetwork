const { Thought } = require('../models');

const thoughtController = {
    async getThoughts(req, res) {
        try {
            const dbThoughtData =  await Thought.find()

            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async getSingleThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOne({ _id: req.params.thoughtId})
            .populate('reactions')

            res.json(dbThoughtData)
        } catch(err) {

        }
    },


async createThought(req, res) {
    try {
        const dbThoughtData = await Thought.create(req.body)
        res.json(dbThoughtData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
        
    }
},

async updateThought(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

   

      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId })

    
     
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    try {
      const dbReactionData = await Thought.create(req.body);
      res.json(dbReactionData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      const dbReactionData = await Thought.findOneAndDelete({ _id: req.params.reactionId })

    
     
      res.json({ message: 'Reaction deleted!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

}

module.exports = thoughtController; 
    
