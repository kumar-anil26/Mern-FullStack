const enquiryModel = require("../../models/enquiryModels");

const enquiryHome = (req, res) => {
  res.send("welcome to home page");
};

const enquiryInsert = async (req, res) => {
  let { Name, Email, Phone, Message } = req.body;

  const enquiry = enquiryModel({
    Name: Name,
    Email: Email,
    Phone: Phone,
    Message: Message,
  });

  await enquiry
    .save()
    .then(() => {
      res.send({
        status: 1,
        msg: "Enquiry saved successfully!",
      });
    })
    .catch((err) => {
      res.send({ status: 0, msg: "Error while inserting enquiry", err });
    });
};

const enquiryList = async (req, res) => {
  let enquiryDetails = await enquiryModel.find();
  res.send({
    status: 1,
    msg: "Enquirylist find successfully1",
    enquiryData: enquiryDetails,
  });
};

const enquiryEdit = async (req, res) => {
  let enquiryId = req.params.id;
  let enquirydata = await enquiryModel.findOne({ _id: enquiryId });
  res.send({ status: 1, msg: "data find successfyll", data: enquirydata });
};

const enquiryUpdate = async (req, res) => {
  let { Name, Email, Phone, Message, _id } = req.body;

  let enquiryObj = {
    Name: Name,
    Email: Email,
    Phone: Phone,
    Message: Message,
    _id: _id,
  };
  let data = await enquiryModel.updateOne({ _id: _id }, enquiryObj);
  res.send({ status: 1, msg: "Data update successfylly", Udata: data });
};

const enquiryDelete = async (req, res) => {
  let enquiryid = req.params.id;
  let deleteEnquiryData = await enquiryModel.deleteOne({ _id: enquiryid });

  let resObj = {};

  if (deleteEnquiryData.deletedCount !== 0) {
    resObj = {
      status: 1,
      msg: "Enquiry delete successfull!",
      deleteEnquiryData: deleteEnquiryData,
    };
  } else {
    resObj = {
      status: 0,
      msg: "Enquiry error while deleting...",
      deleteEnquiryData: deleteEnquiryData,
    };
  }
  res.send(resObj);
};

module.exports = {
  enquiryHome,
  enquiryInsert,
  enquiryList,
  enquiryEdit,
  enquiryUpdate,
  enquiryDelete,
};
