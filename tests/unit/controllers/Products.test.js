const sinon = require("sinon");
const { expect } = require("chai");

const productsServices = require("../../../services/Products");
const productsController = require("../../../controllers/Products");

describe("Test the file Controller, products", () => {
  const mochpayLoadProducts = [
    {
      id: 1,
      name: "Martelo de Thor",
    },
    { id: 2, name: "Traje de encolhimento" },
    { id: 3, name: "Escudo do Capitão América" },
  ];
  const response = {};
  const request = {};

  before(async () => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon
      .stub(productsServices, "getAllProductsServices")
      .resolves(mochpayLoadProducts);
  });

  after(async () => {
    productsServices.getAllProductsServices.restore();
  });

  it("Verify if request is valid", async () => {
    await productsController.getAllProductsController(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(mochpayLoadProducts)).to.be.equal(false);
  });
});
