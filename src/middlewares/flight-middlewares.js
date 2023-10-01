const { ClientErrors } = require("../utils/enums-codes");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price ||
    !req.body.boardingGate
  ) {
    // if any of the params is missing we come inside the
    return res.status(ClientErrors.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing mandatory properties for create flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};
