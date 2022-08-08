/**
 * FOR DASHBOARD PART
 */

const {
  errResponse,
  checkAuthorization,
} = require("../../helpers/helper.controller");
const db = require("../../models");
const Users = db.Users;

// Get Users Count
exports.getUsersCount = (req, res) => {
  // Check authorization first
  checkAuthorization(req, res, "Admin");
  // Count frequency of user_type values
  Users.count({
    col: "users_type",
    group: ["users_type"],
  })
    .then((result) => {
      // Users Count Object
      usersCount = {
        all: 0,
        Admin: 0,
        Staff: 0,
        Dentist: 0,
        Patient: 0,
      };

      // Get each element in result
      result.forEach((at) => {
        // Get count for each element
        var c = at.count;

        // Get total users
        usersCount.all += c;

        // Get count per user
        if (at.user_type === "Patient") usersCount.Patient = c;
        if (at.user_type === "Staff") usersCount.Staff = c;
        if (at.user_type === "Dentist") usersCount.Dentist = c;
        if (at.user_type === "Admin") usersCount.Admin = c;
      });
      // Respond the userCount object
      res.send({ users_count: usersCount });
    })
    .catch((err) => errResponse(res, err));
};
