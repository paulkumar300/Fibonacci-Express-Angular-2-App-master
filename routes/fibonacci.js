var express = require('express');
var router = express.Router();
var fibonacciGenerator = require('../services').fibonacciGenerator;
/**
 * Error Messages for this service
 */
var errors = {
  "inputRequired": "Please provide a integer as input to use this service",
  "numericInput": "Input is not a valid integer"
}
/* GET Fibonacci Series. */
router.get('/:num', function (req, res, next) {
  var input = req.params.num;
  /** 
   * If input is not provided - 400 Error
    */
  if (!input || input == '') {
    return res.status(400).send(errors.inputRequired)
  }
  /** 
   * If input is not a valid integer - 400 Error
    */
  if (isNaN(input)) {
    return res.status(400).send(errors.numericInput)
  }
  /**
   * Input valid, Proceed with series generation
   */
  input = parseInt(input);
  var output = fibonacciGenerator.generate(input)
  return res.json(output);
});

module.exports = router;
