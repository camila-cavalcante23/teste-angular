# Projeto de Interface Responsiva - Aplicação de Notícias com Angular

Este projeto foi desenvolvido com **Angular** e tem como objetivo entregar uma aplicação frontend responsiva com listagem de notícias, busca dinâmica, visualização de detalhes e criação de novos posts. A aplicação consome dados de uma API externa e é organizada em componentes modulares e standalone.

## 🛠️ Tecnologias Utilizadas

- **Angular (Standalone Components)**: Estrutura principal da aplicação.
- **HTML5 e CSS3**: Marcação semântica e layout responsivo.
- **TypeScript**: Lógica de programação com tipagem estática.
- **RxJS**: Programação reativa com observables.
- **API REST (MockAPI)**: Consumo de endpoints para manipulação de dados.
- **Node.js + Angular CLI**: Ambiente de desenvolvimento.

## ⚙️ Funcionalidades

- 🔍 **Busca de Notícias**: Campo de pesquisa dinâmico com filtragem por título e descrição.
- 📃 **Listagem de Posts**: Exibe todas as notícias disponíveis com imagem e resumo.
- ➕ **Criação de Novos Posts**: Formulário para adicionar novas publicações com título, descrição e imagem.
- 📄 **Visualização de Detalhes**: Página dedicada para exibir conteúdo completo de uma notícia.
- 📱 **Design Responsivo**: Compatível com diferentes tamanhos de tela (desktop, tablet e mobile).

## 🔗 API Consumida

A aplicação consome os dados da seguinte API:

- Listar todos os posts (GET):  
  `https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post`

- Detalhar post por ID (GET):  
  `https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post/:id`

- Criar novo post (POST):  
  `https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post`

## ▶️ Como Executar o Projeto

### Pré-requisitos

- Node.js (v14+)
- Angular CLI (v15+)

