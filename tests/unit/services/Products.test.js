const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const productsServices = require("../../../services/Products");

describe("Test the file Services, products", () => {
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
    sinon.restore();
  });

  it("Verify if show  all product", async () => {
    const response = await productsServices.getAllProductsServices();
    expect(response).to.be.a("object");
  });
});
