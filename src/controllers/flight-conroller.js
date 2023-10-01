const { FlightService } = require("../services/index.js");
const { SuccesCodes } = require("../utils/enums-codes.js");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    let flightRequestData = {
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      flightNumber: req.body.flightNumber,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccesCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not available to create a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccesCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched the  flights",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not available to fetch the flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
