# Casamento · 12.12.2026
Site estático sem backend, dependências de produção, cookies ou armazenamento de dados.

## Editar
Todas as informações estão em `src/config/wedding.js`: nomes, data com offset UTC−3, locais, WhatsApp (somente números, com código do país), links HTTPS de Maps e presentes, Pix, programação, história e FAQ. `siteUrl` define canonical, Open Graph e sitemap no build. A contagem celebra à meia-noite do dia do casamento; os horários de cerimônia são ilustrativos.

Fotos ilustrativas locais em `public/fotos/`. Substitua pelas fotos autorizadas dos noivos. Origem das imagens: Unsplash (IDs registrados em `public/fotos/CREDITOS.md`). Atualize alt no arquivo de configuração, a imagem hero no HTML e `public/social-preview.jpg` se necessário.

## Executar
Node 22+: `npm run build`, `npm test`. `npm run dev` serve o projeto em http://localhost:4173. Na Vercel: build `npm run build`, saída `dist`, preset Other. Sem variáveis de ambiente.

RSVP só abre WhatsApp ou formulário configurado; não confirma nem envia automaticamente. Links ausentes exibem estado de preparação. FAQ e horários devem ser confirmados pelo casal antes de distribuir o convite.
