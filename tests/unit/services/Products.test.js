const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const productsServices = require("../../../services/Products");
const productsModels = require("../../../models/Products")

describe("Test the file Services, function getAllProductsServices", () => {
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

  it("Verify if object has property id", async () => {
    const response = await productsServices.getAllProductsServices();
    expect(response).to.have.property("id");
  });
});


describe("Test the file Services, function registerProductModels", () => {
  const payloadTest = {
    name: "Mascara do Batman",
  };

  before(() => {
    const idExample = 1;
    sinon
      .stub(productsModels, "registerProductModels")
      .resolves({ id: idExample });
  });

  after(async () => {
    sinon.restore();
  });

  it("Verify if new object has property id", async () => {
    const response = await productsServices.registerProductServices(
      payloadTest
    );
    expect(response).to.have.a.property("id");
  });
});
