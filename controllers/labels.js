const Label = require("../models/labels");
const createLabel = async (req, res) => {
  try {
    const userId = req.user._id;
    const newLabel = new Label({
      name: req.body.name,
      createdBy: userId,
    });
    await newLabel.save();
    const post = await Label.find({ createdBy: userId });
    res.status(201).send({ message: "Success", data: { post } });
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllLabels = async (req, res) => {
  try {
    const userId = req.user._id;
    let labels = await Label.find({ createdBy: userId });
    res.status(200).send({ message: "Success", data: { labels } });
  } catch (err) {
    console.log(err);
  }
};
const updatelabel = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateddata = {};
    updateddata.name = req.body.name;
    await Label.findByIdAndUpdate(_id, updateddata);
    res.status(201).send({ message: "Updated Successfully" });
  } catch (err) {
    console.log(err);
  }
};
const deletelabel = async (req, res) => {
  try {
    const { _id } = req.params;
    await Label.findByIdAndDelete(_id);
    res.status(200).send({ message: "Deleted Succesfully" });
  } catch (err) {
    console.log(err);
  }
};
const getlabelbyid = async (req, res) => {
  try {
    const { _id } = req.params;
    let labels = await Label.find({ _id });
    res.status(200).send({ message: "Success", data: { labels } });
  } catch (err) {
    console.log(err);
  }
};
const LabelControllers = {
  createLabel,
  getAllLabels,
  updatelabel,
  deletelabel,
  getlabelbyid,
};
module.exports = LabelControllers;