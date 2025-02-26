const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Funcionario = require('../models/funcionario.js');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = '3h';

async function cadastrar(nome, email, senha, cargo) {
    // Verificar se o e-mail tem formato válido
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new Error('E-mail inválido');
    }

    // Verificar se o e-mail já está cadastrado
    const funcionarioExistente = await Funcionario.findOne({ where: { Email: email } });
    if (funcionarioExistente) {
        throw new Error('E-mail já cadastrado');
    }

    // Criar o funcionário caso o e-mail não exista
    const hashedPassword = await bcrypt.hash(senha, 10);
    return Funcionario.create({ nome, Email: email, senha: hashedPassword, cargo });
}

async function login(Email, senha) {
    const funcionario = await Funcionario.findOne({ where: { Email } });

    if (!funcionario) return { error: 'Funcionário não encontrado' };

    const isPasswordValid = await bcrypt.compare(senha, funcionario.senha);
    if (!isPasswordValid) return { error: 'Senha incorreta' };

    const token = jwt.sign({ id: funcionario.id, nome: funcionario.nome }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

    return { token, nome: funcionario.nome };
}


module.exports = { cadastrar, login };
