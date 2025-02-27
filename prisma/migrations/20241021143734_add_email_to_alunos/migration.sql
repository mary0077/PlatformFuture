module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Aluno', 'nota_primeiro_modulo', 'NotaPrimeiroSemestre');
    await queryInterface.renameColumn('Aluno', 'nota_segundo_modulo', 'NotaSegundoSemestre');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Aluno', 'NotaPrimeiroSemestre', 'nota_primeiro_modulo');
    await queryInterface.renameColumn('Aluno', 'NotaSegundoSemestre', 'nota_segundo_modulo');
  }
};
