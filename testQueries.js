const {
  customer,
  category,
  order,
  product,
  productOrder,
} = require("./models");

async function customersWithOrders() {
  const custWithOrders = await customer.findAll({ include: [order] });
  return custWithOrders.map((list) => list.get({ plain: true }));
}
//customersWithOrders().then((lists) => console.log(lists));

async function ordersWithCustomer() {
  const custWithOrders = await order.findAll({ where: { customerId: 3 } });
  console.log(custWithOrders);
}
//specificCustomerWithOrders();

async function productListNames() {
  const list = await product.findAll();
  return list.map((item) => item.get({ plain: true }));
}
productListNames().then((list) => console.log(list));

async function productWithCategory() {
  const specificProduct = await product.findByPk(1, {
    include: [category],
  });
  console.log(specificProduct);
}
//productWithCategory();

async function productOrderList() {
  const listProductOrders = await productOrder.findAll();
  return listProductOrders.map((item) => item.get({ plain: true }));
}
//productOrderList().then((list) => console.log(list));

async function customerWithProducts() {
  const result = await customer.findByPk(2, {
    include: [
      {
        model: order,
        include: { model: product, attributes: ["name"] },
      },
    ],
  });
  return result.get({ plain: true });
}
//customerWithProducts().then((item) => console.log(item));

// Many to many query
async function ordersWithProducts() {
  const orderList = await order.findAll({ include: [product] });
  return orderList.map((item) => item.get({ plain: true }));
}
//ordersWithProducts().then((items) => console.log(items));
