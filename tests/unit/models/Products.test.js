const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const productsModels = require("../../../models/Products");

describe("Test the file Models, function getAllProductsModels", () => {
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
    sinon.restore();
  });
  it("Verify if its an object", async () => {
    const response = await productsModels.getAllProductsModels();
    expect(response).to.be.a("object");
  });
});

describe("Test the file Models, function registerProductModels", () => {
  const payloadTest = {
    name: "Mascara do Batman",
  };

  before(async () => {
    const execute = [{ insertId: 4 }]; 
    sinon.stub(connection, "execute").resolves(execute);
  });

  after(async () => {
    sinon.restore();
  });

  it("verify if returns a object", async () => {
    const response = await productsModels.registerProductModels(payloadTest);
    expect(response).to.be.a("object");
  });
});