const Contact = require("../models/contact");
const xlsx = require("xlsx");
const User=require("../models/user")
const createcontact = async (req, res) => {
  try {
    const newContact = new Contact({
      userId: req.user._id,
      trash: false,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      mobile: req.body.mobile,
      labels: req.body.labels,
    });
    await newContact.save();
    res.status(201).json("contact created succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
};
const updatecontact = async (req, res) => {
  try {
    const { id } = req.params;
    const updateddata = {};
    updateddata.firstname = req.body.firstname;
    updateddata.lastname = req.body.lastname;
    updateddata.email = req.body.email;
    updateddata.mobile = req.body.mobile;
    updateddata.labels = req.body.labels;
    const dataupdate = await Contact.findByIdAndUpdate(id, updateddata);
    res.status(200).json("data updated scuccesfully");
  } catch (err) {
    console.log(err);
  }
};
const readcontact = async (req, res) => {
  try {
    const userId=req.user._id;
    const data = await Contact.find({ userId, trash: false });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
const labelcontact = async (req, res) => {
  try {
    const { labels } = req.params;
    const data = await Contact.find({ labels });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
const readeditcontact = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Contact.find({ _id });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
const readtrash = async (req, res) => {
  try {
    const userId=req.user._id
    const data = await Contact.find({ userId, trash: true });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
const addtrash = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateddata = {};
    updateddata.trash = true;
    await Contact.findByIdAndUpdate(_id, updateddata);
    res.status(200).json("move to trash");
  } catch (err) {
    console.log(err);
  }
};
const recovercontact = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateddata = {};
    updateddata.trash = false;
    await Contact.findByIdAndUpdate(_id, updateddata);
    res.status(200).json("recovers succesfully");
  } catch (err) {
    console.log(err);
  }
};
const deletecontact = async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findByIdAndDelete(_id);
    res.status(200).json("Contact deleted succesfully");
  } catch (err) {
    console.log(err);
  }
};
const bulkUpload = async (req, res) => {
  try {
    if (!req.file) return res.status(400).send({ message: "File required" });
    let wb = xlsx.read(req.file.buffer);
    const sheetName = wb.SheetNames[0];
    let contactList = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
    res.status(200).json(contactList);
  } catch (err) {
    console.log(err);
  }
};
const getUser=async(req,res)=>{
  try{
   const _id =req?.user?._id
     let data= await User.find({_id});
     res.status(200).json(data[0].username);
  }
  catch(err){
     console.log(err)
  }
}
const ContactControllers = {
  createcontact,
  readcontact,
  readtrash,
  addtrash,
  readcontact,
  updatecontact,
  readcontact,
  readeditcontact,
  recovercontact,
  deletecontact,
  bulkUpload,
  labelcontact,
  getUser
};
module.exports = ContactControllers;