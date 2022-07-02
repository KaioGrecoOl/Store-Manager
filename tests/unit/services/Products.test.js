const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const productsModels = require("../../../services/Products");

describe("Test the file Services, products", () => {
  const mochpayLoadProducts = [
    {
      id: 1,
      name: "Martelo de Thor",
    },
  ];

  before(async () => {
    sinon.stub(connection, "execute").resolves(mochpayLoadProducts);
  });

  after(async () => {
    connection.execute.restore();
  });

  it("Verify if show  all product", async () => {
    const response = await productsModels.getAllProductsServices();
    expect(response).to.be.a("object");
  });
});
