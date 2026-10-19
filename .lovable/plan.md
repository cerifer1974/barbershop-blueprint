# Painel /admin — núcleo editável por barbearia

## Objetivo
Um painel privado (só você) para criar e editar sites de barbearia. Cada site é uma configuração isolada que alimenta os mesmos componentes já aprovados. As páginas `/` (Navalha & Nó) e `/horizonte` continuam exatamente como estão.

## O que você vai ver
- **/admin/login** — entrada com e-mail e senha. Só a sua conta tem acesso; cadastro público desligado.
- **/admin** — lista de sites (nome, endereço da página, demo ou real, botões Editar / Ver).
- **/admin/novo** — cria um site a partir de um modelo (copia a estrutura da Horizonte, com textos genéricos de demonstração).
- **/admin/sites/:id** — editor em abas: Marca, Identidade visual, Textos, Serviços, Equipe, Galeria, Endereço e horários, Contatos e links, Publicação (demo/real).
- **/b/:slug** — a página pública de cada site criado no painel, usando a mesma composição da landing aprovada.

## Identidade visual sem seletor de cores
- Na aba Identidade visual você **envia o logo** e/ou **descreve a identidade em texto** (ex.: "verde-oliva, areia e preto, minimalista").
- A ferramenta gera a paleta completa (fundo, superfícies, destaque, texto, seção clara) e mostra uma prévia. Botões "Gerar de novo" e "Aplicar".
- Uma verificação automática garante contraste legível (texto sobre fundo, botão sobre destaque); se falhar, ajusta antes de salvar.

## Fontes sem quebrar o layout
- Escolha entre **pares de fontes pré-aprovados** (título + texto), testados nos mesmos tamanhos da página atual — ex.: Bebas Neue + Archivo, Barlow Condensed + DM Sans, e mais 4–6 pares compatíveis.
- Não há campo livre de fonte, para não alterar alturas, quebras de linha e hierarquia aprovadas.
- A descrição em texto também pode sugerir um par da lista.

## Regras mantidas
- Mesma validação atual: campos obrigatórios e avisos de demonstração. Um site só fica "real" se passar na validação (sem depoimentos/estatísticas fictícias).
- Seções vazias continuam ocultas automaticamente.
- Nada de agendamento próprio: os botões continuam levando ao WhatsApp/link configurado.

## Fora desta etapa
Domínios próprios por cliente, vários usuários no painel, histórico de versões.

## Detalhes técnicos
- Ativar Lovable Cloud: tabela `sites` (id, slug único, config jsonb, status, timestamps) + tabela `user_roles` com papel `admin`; RLS: leitura pública apenas de sites publicados via server function com cliente publicável; escrita só para admin (`has_role`).
- Bucket de arquivos para logos e fotos (upload pelo painel).
- Login e-mail/senha com cadastro desativado; sua conta criada e marcada como admin.
- Rotas do painel sob `_authenticated/admin...`; `/b/$slug` pública com SSR e `head()` vindo da configuração.
- Paleta: server function usando Lovable AI (modelo com visão) que recebe logo e/ou texto e devolve as 9 cores do `ThemeConfig`; checagem de contraste WCAG no servidor.
- Fontes: lista `FONT_PAIRS` tipada; `theme.fonts` só aceita ids dessa lista no editor.
- Editor salva o mesmo tipo `BarberConfig`; `validateBarberConfig` roda no salvar e no publicar.
- `/` e `/horizonte` permanecem com suas configs em arquivo; testes atuais continuam passando, mais testes para contraste e lista de fontes.
