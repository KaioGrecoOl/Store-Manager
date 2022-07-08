const sinon = require("sinon");
const { expect } = require("chai");

const productsServices = require("../../../services/Products");
const productsController = require("../../../controllers/Products");

describe("Test the file Controller, function getAllProductsServices", () => {
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
    sinon.restore();
  });

  it("Verify if request is valid", async () => {
    await productsController.getAllProductsController(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(mochpayLoadProducts)).to.be.deep.equal(
      true
    );
  });
});


describe("Test the file Controller, function registerProductServices", async () => {
  const response = {};
  const request = {};

  before(() => {
    request.body = {
      id: 4,
      name: "Mascara do Batman",
    };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsServices, "registerProductServices").resolves(true);
  });

  after(() => {
    sinon.restore();
  });

  it("Verify if is product was register", async () => {
    await productsController.registerProductController(request, response);
    expect(response.status.calledWith(201)).to.be.equal(true);
  });
});