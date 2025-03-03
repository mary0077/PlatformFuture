const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aluno = sequelize.define('Aluno', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0 
    }
  },
  NotaPrimeiroSemestre: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 10.0
    }
  },
  NotaSegundoSemestre: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 10.0
    }
  },
  nome_professor: {
  type: DataTypes.STRING,
    allowNull: true,  // Permite NULL
    defaultValue: 'Professor Desconhecido', // Valor padrão
  },  
  Media: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: null
  }
}, {
  hooks: {
    beforeSave: (aluno) => {
      if (aluno.NotaPrimeiroSemestre !== null && aluno.NotaSegundoSemestre !== null) {
        aluno.Media = (aluno.NotaPrimeiroSemestre + aluno.NotaSegundoSemestre) / 2;
      }
    }
  }
});

module.exports = Aluno;
