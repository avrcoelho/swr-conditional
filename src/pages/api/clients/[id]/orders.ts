import data from "../../../../../data.json";

const handle = async (req, res) => {
  const orders = data.orders.filter((order) => {
    return order.client_id === Number(req.query.id);
  });

  res.json(orders);
};

export default handle;
