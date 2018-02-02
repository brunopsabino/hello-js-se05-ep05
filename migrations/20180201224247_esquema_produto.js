//Cria tabela produto

exports.up = knex => knex.schema.createTable("produto", tb => {
    tb.increments("idproduto")
    tb.string("nomeproduto").notNullable()
    tb.timestamp("dtcriacaoproduto").notNullable().defaultTo(knex.fn.now())
  })
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("produto")
  };