const { CityService } = require("../services/index.js");
const CityService = new CityService();

// @POST  data-> req.body
const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not available to create a city",
      err: error,
    });
  }
};

// @DELETE  data-> req.params.id
const destroy = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not available to delete a city",
      err: error,
    });
  }
};

//@GET -> /city/:id
const get = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not available to fetch a city",
      err: error,
    });
  }
};

//@UPDTE -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not available to fetch a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};