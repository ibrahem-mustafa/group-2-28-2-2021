const UserDto = ({ _id, name, email, phoneNumber, role }) => ({
  id: _id,
  name,
  email,
  phone: phoneNumber,
  role
});

module.exports = {UserDto};
