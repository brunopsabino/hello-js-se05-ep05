//insere dados na tabela contato

const contatos = [
    {nomecontato: 'Chico', telefone: '2223344' },
    {nomecontato: 'Maria', telefone: '2837172' },
    {nomecontato: 'Jose', telefone: '1882323' },   
]


exports.up = knex => knex("contato").insert(contatos)
  
exports.down = knex => knex("contato").del()
  .whereIn("nomecontato", contatos.map(e => e.nomecontato))

