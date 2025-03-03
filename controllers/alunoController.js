const { INTEGER, FLOAT } = require('sequelize');
const Aluno = require('../models/aluno');

// Função para obter todos os alunos
exports.getAll = async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
};

// Função para criar um novo aluno
exports.create = async (req, res) => {
  console.log("Corpo da requisição recebido:", req.body); // Adiciona log para depuração

  try {
    const { nome, email, idade, NotaPrimeiroSemestre, NotaSegundoSemestre, nome_professor } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'O campo e-mail é obrigatório' });
    }

    if (isNaN(NotaPrimeiroSemestre) || isNaN(NotaSegundoSemestre)) {
      return res.status(400).json({ error: 'As notas devem ser números válidos' });
    }

    const alunoExistente = await Aluno.findOne({ where: { email } });

    if (alunoExistente) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    const aluno = await Aluno.create({
      nome,
      email,
      idade,
      NotaPrimeiroSemestre: parseFloat(NotaPrimeiroSemestre),
      NotaSegundoSemestre: parseFloat(NotaSegundoSemestre),
      nome_professor,
      Media: (parseFloat(NotaPrimeiroSemestre) + parseFloat(NotaSegundoSemestre)) / 2
    });

    res.status(201).json(aluno);
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    res.status(500).json({ error: 'Erro ao criar aluno', details: error.message });
  }
};

// Função para obter um aluno pelo ID
exports.getById = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter aluno' });
  }
};

// Função para atualizar um aluno
exports.update = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      const { nome, idade, NotaPrimeiroSemestre, NotaSegundoSemestre, nome_professor } = req.body;

      if (isNaN(NotaPrimeiroSemestre) || isNaN(NotaSegundoSemestre)) {
        return res.status(400).json({ error: 'As notas devem ser números válidos' });
      }

      // Atualiza os dados do aluno
      await aluno.update({
        nome,
        idade,
        NotaPrimeiroSemestre: parseFloat(NotaPrimeiroSemestre),
        NotaSegundoSemestre: parseFloat(NotaSegundoSemestre),
        nome_professor,
        Media: (parseFloat(NotaPrimeiroSemestre) + parseFloat(NotaSegundoSemestre)) / 2 // Recalcula a média
      });

      res.json(aluno);
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
};

// Função para deletar um aluno
exports.delete = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      await aluno.destroy();
      res.json({ message: "Deletado com sucesso!" });
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar aluno: ' + error });
  }
};
