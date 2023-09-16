const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository");
      throw { error };
    }
  }

  async deletecity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // the blelow aproch also works but not return updated obj-->
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      //   returning: true,
      //   plain: true,
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository");
      throw { error };
    }
  }
}

module.exports = CityRepository;
