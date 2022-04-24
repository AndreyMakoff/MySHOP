const router = require('express').Router();

const srtipe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', (req, res) => {
  srtipe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
