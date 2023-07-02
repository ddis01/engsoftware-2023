const assert = require('assert');
const {CRUD} = require('../src/crud'); // Importe as funções do programa CRUD

describe("CRUD", function() {
  describe("createItem()", function() {
    it("Adicionar um item na lista", function() {
      let c = new CRUD();

      c.createItem("Teste");

      assert.strictEqual(c.items.length, 1);
    });

    it("Adicionar 3 itens na lista", function() {
      let c = new CRUD();

        c.createItem("Item 1");
        c.createItem("Item 2");
        c.createItem("Item 3");

        assert.strictEqual(c.items.length, 3);
    });
  });

  describe("readItem()", function () {
    it("Ler todos os itens", function () {
      let c = new CRUD();

        c.createItem("Item 1");
        c.createItem("Item 2");

        assert.strictEqual(c.items.length, 2);
    })
  });

  describe("readItem()", function () {
    it("Ler item pelo índice", function () {
      let c = new CRUD();

        c.createItem("Item 1");
        c.createItem("Item 2");

        assert.strictEqual(c.readItem(0), "Item 1");
    })

    it("Ler 3 itens pelo índice", function () {
      let c = new CRUD();

        c.createItem("Item 1");
        c.createItem("Item 2");
        c.createItem("Item 3");

        assert.strictEqual(c.readItem(0), "Item 1");
        assert.strictEqual(c.readItem(1), "Item 2");
        assert.strictEqual(c.readItem(2), "Item 3");
    })
  })

  describe("updateItem()", function () {
    it("Atualiza um item", function () {
      let c = new CRUD();

        c.createItem("Item 1");

        assert.strictEqual(c.updateItem(0, "Item 5"), true);
    })

    it("Atualiza dois itens", function () {
      let c = new CRUD();

      c.createItem("Item 1");
      c.createItem("Item 2");

      c.updateItem(0, "Item 2");
      c.updateItem(1, "Item 1");

      assert.strictEqual(c.readItem(0), "Item 2");
      assert.strictEqual(c.readItem(1), "Item 1");
    })
  })

  describe("deleteItem()", function () {
    it("Deleta um item", function () {
      let c = new CRUD();
      
      c.createItem("Teste");

      c.deleteItem(0)

      assert.strictEqual(c.readItem(0), undefined);
    })

    it("Deleta dois itens", function () {
      let c = new CRUD();

      c.createItem("Fulano");
      c.createItem("Darline");
      c.createItem("Betano");

      c.deleteItem(0)
      c.deleteItem(1)

      assert.strictEqual(c.readItem(0), "Darline");
    })
  })
});
