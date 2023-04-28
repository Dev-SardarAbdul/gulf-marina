const { Admin } = require("../schemas/admin");
const SHA256 = require("crypto-js/sha256");
const logger = require("../../logger");

const insertCredentials = async () => {
  try {
    const data = await Admin.create({
      username: "admin",
      password: JSON.stringify(SHA256("1234").words),
    });
    // console.log(data, "data")
    if (!data) throw "not inserted";
    else return data;
  } catch (error) {
    logger.error(error);
    return { error };
  }
};

const getAdmin = async (ctx) => {
  try {
    const data = await Admin.find();
    if (!data) throw "not inserted";
    else return data;
  } catch (error) {
    logger.error(error);
    return {
      error: error,
    };
  }
};

const adminLogin = async (username) => {
  try {
    const data = await Admin.find({
      $and: [{ username }],
    });

    if (!data) throw "not found";
    else return data;
  } catch (error) {
    logger.error(error);
    return {
      error: error,
    };
  }
};

const deleteAdmin = async () => {
  try {
    const data = await Admin.deleteMany();

    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    logger.error(error);
    return { error };
  }
};

const userNameUpdate = async (id, username) => {
  try {
    const updated = await Admin.updateOne(
      { _id: id },
      {
        $set: {
          username,
        },
      }
    );

    return updated;
  } catch (error) {
    logger.error(error);
    return { error: error };
  }
};

const passwordUpdate = async (id, currentPass, newPassword) => {
  try {
    const data = await Admin.find({
      $and: [{ _id: id }],
    });

    if (data[0].password != currentPass) {
      throw "Incorrect old password";
    } else {
      const updatedPassword = await Admin.updateOne(
        { _id: id },
        {
          $set: {
            password: newPassword,
          },
        }
      );
      return updatedPassword;
    }
  } catch (error) {
    logger.error(error);
    return { error: error };
  }
};

module.exports = {
  insertCredentials,
  passwordUpdate,
  deleteAdmin,
  userNameUpdate,
  getAdmin,
  adminLogin,
};
