
# 🧱 SGA 2.0 – Projeto Base em TypeScript com Arquitetura em Camadas (MVC)

Este repositório contém a estrutura inicial do projeto **SGA 2.0**, desenvolvida em **TypeScript** e organizada com base na **arquitetura em camadas (MVC)**, conforme boas práticas modernas para aplicações escaláveis.

---

## 📐 Arquitetura Adotada: Camadas (MVC)

A estrutura está organizada em diretórios separados por responsabilidade:

```
src/
├── controllers/   → Lida com as requisições e direciona para os serviços
├── services/      → Contém a lógica de negócio (não criada nesta fase)
├── models/        → Define e representa os dados da aplicação
├── routes/        → Gerencia as rotas da aplicação
├── utils/         → Funções auxiliares e reutilizáveis
├── config/        → Arquivos de configuração (ex: variáveis de ambiente)
└── index.ts       → Ponto de entrada da aplicação
```

> 🔸 Nesta etapa, apenas os diretórios foram criados — sem lógica de negócio, conforme solicitado.

---

## 🚀 Como executar o projeto

```bash
# Instalar as dependências
npm install

# Compilar o projeto
npx tsc

# O código compilado ficará em: /dist
```

> O projeto ainda não possui lógica executável — o foco aqui é a estrutura.

---

## 🧠 Por que essa estrutura?

- 📦 **Organização clara e separação de responsabilidades**
- 📈 **Facilidade de manutenção e escalabilidade**
- 👨‍💻 **Padronização compatível com projetos reais**
- 🔒 **Uso de TypeScript para maior segurança e legibilidade**

---

## 📄 Sobre esta entrega

Esta entrega cumpre os seguintes critérios propostos na Aula 3:

- ✅ Estrutura de pastas com base em arquitetura
- ✅ Tipagem básica em `index.ts`
- ✅ Arquitetura justificada neste README
- ✅ Nenhuma lógica de negócio implementada