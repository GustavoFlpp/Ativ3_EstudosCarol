
# 🧱 SGA 2.0 – Projeto Base em TypeScript com Arquitetura em Camadas (MVC)

Este repositório contém a estrutura inicial do projeto **SGA 2.0**, desenvolvida em **TypeScript** e organizada com base na **arquitetura em camadas (MVC)**, conforme boas práticas modernas para aplicações escaláveis.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/) – Ambiente de execução
- [TypeScript](https://www.typescriptlang.org/) – Superset de JavaScript com tipagem
- [ts-node](https://typestrong.org/ts-node/) – Executa arquivos `.ts` diretamente sem build
- [npm](https://www.npmjs.com/) – Gerenciador de pacotes

> Todas as ferramentas são instaladas automaticamente via `npm install`.

---

## 📐 Estrutura de Pastas (Arquitetura em Camadas)

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

## ⚙️ Instalação e uso

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/SGA2.0.git
cd SGA2.0
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar o projeto com ts-node
```bash
npx ts-node src/index.ts
```

> Ou, se estiver configurado no `package.json`:
```bash
npm run dev
```

---

## 🧠 Por que essa estrutura?

- 📦 Organização clara e separação de responsabilidades
- 📈 Preparação para escalabilidade e manutenção futura
- 👨‍💻 Arquitetura em camadas (MVC) amplamente adotada
- 🔒 Uso de TypeScript para maior segurança e legibilidade
