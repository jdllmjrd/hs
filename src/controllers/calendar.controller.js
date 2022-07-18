const db = require("../models");
const Calendar = db.Calendar;
const {
  errResponse,
  dataResponse,
  emptyDataResponse,
  checkAuthorization,
} = require("../helpers/helper.controller");

exports.createEvent = async (req, res) => {
  try {
    const { users_id } = req.user;

    const event = await Calendar.create({
      ...req.body,
      users_id,
      created_by: users_id,
      updated_by: users_id,
    });
    return dataResponse(res, event, "Event created successfully");
  } catch (error) {
    return errResponse(res, error);
  }
};

exports.findEvent = async (req, res) => {
  try {
    const { users_id } = req.user;
    const { id } = req.body;
    let event;

    // If no id where given -> display all events
    if (!id) {
      event = await Calendar.findAll({
        where: {
          users_id,
        },
      });
    } else {
      event = await Calendar.findByPk(id);
    }

    return dataResponse(res, event, "Event retreived successfully");
  } catch (error) {
    return errResponse(res, error);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { users_id } = req.user;

    const { event_id } = req.params;

    await Calendar.update(
      { ...req.body, updated_by: users_id },
      { where: { id: event_id } }
    );

    const event = await Calendar.findByPk(event_id);

    return res.send({
      error: false,
      data: event,
      message: [process.env.SUCCESS_UPDATE],
    });
  } catch (error) {
    return res.status(500).send({
      error: true,
      data: [],
      message: error || process.env.GENERAL_ERROR_MSG,
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { event_id } = req.params;
    await Calendar.destroy({ where: { id: event_id } });
    return emptyDataResponse(res, "Event successfully deleted");
  } catch (error) {
    return errResponse(res, error);
  }
};
