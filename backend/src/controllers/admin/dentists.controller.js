// const db = require('../models');
// const Dentists = db.Dentists; // user model

// /**
//  * 
//  * CONTROLLER DENTIST FOR ADMIN
//  */

// //create and save new featured dentist
// exports.create = (req, res) => {
//     Dentists.create(req.body)
//     .then((data) => { 
//     Dentists.findByPk(data.id)
//       .then(
//         (result) => {
//           res.send({
//             error: false,
//             data: result,
//             message: [process.env.SUCCESS_CREATE],
//           });
//         }
//       );
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// };
// // Retrieve all Featured Dentists from the database.
// exports.update =  (req, res) => {
//     const id = req.params.id;

  
//     Dentists.update(req.body, { where: { id: id, status: 'Active'} })
//       .then((result) => {
//         if (result) {
//           // retrieve updated details
//           User.findByPk(id).then((data) => {
//             res.send({
//               error: false,
//               data: data,
//               message: [process.env.SUCCESS_UPDATE],
//             });
//           });
//         } else {
//           res.status(500).send({
//             error: true,
//             data: [],
//             message: ["Error in updating a record"],
//           });
//         }
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   };

// exports.findAll = (req, res) => {
//     Dentists.findAll({where : {status : 'Active'}})
//     .then((data) => {
//         res.send({
//             error : false,
//             data : data,
//             message : ["Retrieved Successfully!"],
//         });
//     }).catch((err) => {
//         res.status(500).send({
//             error : true,
//             data : [],
//             message : err.errors.map((e) => e.message),
//         });
//     });
//   };
  

// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Dentists.findByPk(id)
//     .then((data) => {
//       res.send({
//         error: false,
//         data: data,
//         message: [process.env.SUCCESS_RETRIEVED],
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         error: true,
//         data: [],
//         message:
//           err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
//       });
//     });

//   // User.findOne({ where: { id: id } })
//   //   .then((data) => {
//   //     res.send({
//   //       error: false,
//   //       data: data,
//   //       message: [process.env.SUCCESS_RETRIEVED],
//   //     });
//   //   })
//   //   .catch((err) => {
//   //     res.status(500).send({
//   //       error: true,
//   //       data: [],
//   //       message:
//   //         err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
//   //     });
//   //   });
// };

// exports.delete = async (req, res) => {
//     const id = req.params.id;
//     const body = {dentists_status : 'Inactive'};
    
//     Dentists.update(body, { where: { id: id } })
//       .then((result) => {
//         if (result) {
//           // retrieve updated details
//           User.findByPk(id).then((data) => {
//             res.send({
//               error: false,
//               data: data,
//               message: [process.env.SUCCESS_UPDATE],
//             });
//           });
//         } else {
//           res.status(500).send({
//             error: true,
//             data: [],
//             message: ["Error in updating a record"],
//           });
//         }
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
// }