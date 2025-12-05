# Undertale Wiki - Apresentação

Este documento é um roteiro para apresentação em sala de aula do projeto "Undertale Wiki", uma adaptação didática de um app de tarefas.

**Objetivo:** Mostrar ao professor que o aluno implementou navegação, contexto/global state, componentes reutilizáveis e estilização temática.

- **Nome do app:** Undertale Wiki (tema visual inspirado em Undertale — paleta escura, detalhes dourados)
- **Navegação:** Drawer (menu lateral) + Stack (lista -> detalhe -> adicionar)
- **Componentes principais:**
  - `Navbar` — Cabeçalho customizado com estética do tema.
  - `TaskItem` — Item de artigo (mostra título, categoria, favorito).
  - `ArticleDetailScreen` — Tela de visualização de artigo.
  - `AddTaskScreen` — Formulário para adicionar novos artigos.

## Roteiro de apresentação (5-7 minutos)

1. Introdução (30s)
   - Diga o nome do app e o objetivo (pequena wiki temática).

2. Mostrar navegação (60s)
   - Abra o menu lateral (Drawer) e explique as seções: Wiki (lista), Favoritos, Sobre.
   - Clique em um artigo e explique a navegação Stack para detalhe.

2. Demonstrar (90s)
   - Mostrar um artigo clicando em um personagem/local.
   - Marcar um artigo como favorito (ícone de coração vermelho).
   - Abrir a tela "Favoritos" para mostrar que aparece lá.

4. Arquitetura & código (90s)
   - Mostrar `src/contexts/TaskContext.tsx` e explicar que ele guarda os artigos globalmente.
   - Mostrar `src/components/TaskItem.tsx` e como é reutilizado.
   - Mostrar `App.tsx` e explicar a composição Drawer -> Stack.

5. Estética (30s)
   - Fale rapidamente sobre a paleta: fundo preto, texto claro e destaques dourados — inspirado em Undertale.

6. Encerramento (20s)
   - Próximos passos possíveis: adicionar imagens, busca, paginação, ou sincronização com backend.

---

## Observações técnicas
- Este projeto usa Expo + React Navigation.
- Para testar localmente: `npm install` e `npm run start`.

Adicionando imagens locais

- Coloque imagens dentro de `assets/img/` com nomes fáceis, por exemplo `sans.png`, `toriel.png`, `snowdin.png`.
- No código atual eu usei imagens por `imageUrl` (placeholders remotos) para evitar erros de bundling automático.
- Se você quiser usar imagens locais embutidas (requer `require` estático), siga este fluxo:
   1. Coloque `assets/img/sans.png`, `assets/img/toriel.png`, etc.
   2. Abra `src/contexts/TaskContext.tsx` e atualize a propriedade `imageUrl` dos artigos para apontar para a imagem local: remova a URL e, no lugar, adicione um campo `localImageKey: 'sans'` (opcional).
   3. Crie/atualize um map em `src/utils/imageMap.ts` com entradas como:

```ts
// exemplo: src/utils/imageMap.ts
export const imageMap: Record<string, any> = {
   sans: require('../../assets/img/sans.png'),
   toriel: require('../../assets/img/toriel.png'),
   // adicione mais entradas conforme imagens locais
};
```

4. Em `TaskItem` e `ArticleDetailScreen`, use algo como `source={imageMap[article.localImageKey] || { uri: article.imageUrl }}` para priorizar imagens locais.

Observação: o bundler do React Native/Expo precisa do `require` estático — ou seja, as entradas do `imageMap` devem existir no momento do build. Se você inserir imagens depois, lembre-se de atualizar `imageMap.ts` e reiniciar o bundler.

Boa apresentação! Se quiser, eu posso criar o `src/utils/imageMap.ts` e exemplificar como trocar as `imageUrl` por chaves locais — me diga se quer que eu gere o arquivo e faça as alterações automaticamente.