const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const productsModels = require("../../../models/Products");

describe("Test the file Models, products", () => {
  const mochpayLoadProducts = [
    {
      id: 1,
      name: "Martelo de Thor",
    },
    { id: 2, name: "Traje de encolhimento" },
    { id: 3, name: "Escudo do Capitão América" },
  ];

  before(async () => {
    sinon.stub(connection, "execute").resolves(mochpayLoadProducts);
  });

  after(async () => {
    connection.execute.restore();
  });

  it("Verify if its an object", async () => {
    const response = await productsModels.getAllProductsModels();
    expect(response).to.be.a("object");
  });
});
