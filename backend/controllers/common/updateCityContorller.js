/**
 * @description Controller for updating city details.
 */

const countryModel = require('../../model/countryModel');


exports.updateCity = (req, res) => {
    countryModel.find({ name: req.body.name }, (err, city) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            countryModel.findOneAndUpdate({ name: req.body.name }, {
                $push: {
                    cities: req.body.city
                }
            }, (error, updatedCity) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json("City successfully updated.");
                }
            })
        }
    })
}