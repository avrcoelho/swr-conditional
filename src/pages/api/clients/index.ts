import data from "../../../../data.json";

const handle = async (req, res) => {
  res.json(data.clients);
};

export default handle;
