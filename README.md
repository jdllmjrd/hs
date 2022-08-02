### <img align="left" alt="Visual Studio Code" width="200px" src="https://github.com/eurus-eastwind/hs-web/blob/b7b013fd4a8723c944fc098d2d0029262a7774be/assets/images/HSBW.PNG" style="padding-right:10px; padding-top: 10px;" /> 

## A Dental Clinic Management System	

## System Overview
Happy Smile Dental Clinic Management System is intended to make the process of managing a dental clinic easier and more accesible to its users. The primary functions of the system include the appointment of dental services, maintenance of patient dental records, online viewing services, and dental supply inventories.

&nbsp;
### Dependencies

+ Initialize Sequelize  `$ sequelize init`

+ Express `$ npm install express --save`

+ Sequelize `$ npm install --save sequelize`

+ Sequelize-cli ` $ npm install -g sequelize-cli`

---

+ MySQL Driver  `$ npm install --save mysql2`

+ Nodemon ` $ npm i -D nodemon`

+ Dotenv `$ npm install dotenv`
---
+ brcypt  `$ npm install bcrypt`

+  jsonwebtoken `$ npm install jsonwebtoken`

---

Edit config.json in config folder

``` js
{
  "development": {
    ...
    "database": "YOUR DATABASE NAME",
    ...
  },
  ...
}
```
---
+ Run app by development `$ npm run start`

+ To create database `$ sequelize db:create`

+ To drop database `$ sequelize db:drop`

+ To create model: <details><summary>model list</summary>

  + `$ sequelize model:generate --name Model_Name --attributes column:string`

  + `$ sequelize model:generate --name Services --attributes services_id:string`

  + `$ sequelize model:generate --name Invoices_services --attributes inser_id:string`

  + `$ sequelize model:generate --name Invoices --attributes invoices_id:string`

  + `$ sequelize model:generate --name Dentists --attributes dentists_id:string`

  + `$ sequelize model:generate --name Dentists_schedules --attributes schedule_id:string`

  + `$ sequelize model:generate --name Branches --attributes branches_id:string`

  + `$ sequelize model:generate --name Appointments --attributes appointments_id:string`
</details>
