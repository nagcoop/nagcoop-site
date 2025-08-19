# NAGCOOP — Login, Publicação e Downloads (Firebase, grátis)

Este kit adiciona:
- **Login (email/senha)** via Firebase Auth
- **Publicar notícias e vídeos** (armazenados no Firestore)
- **Uploads para Downloads** (Firebase Storage) com **leitura pública**

Funciona 100% client-side e roda no GitHub Pages.

---

## Passo a passo (10 minutos)

1) Crie um projeto em https://console.firebase.google.com  
   - Adicione um app **Web** (</>) e copie as **credenciais (CDN)**.

2) Ative:
   - **Authentication** → Sign-in method → **Email/Password: ENABLE**
   - **Firestore Database** → Create database: modo produção.
   - **Storage** → Create bucket (padrão).

3) **Regras de segurança**

**Firestore Rules** (público lê; só logado escreve; só autor edita/deleta):
```
// Firestore Security Rules
rules_version = '2';
service cloud.firestore { 
  match /databases/{database}/documents {
    match /posts/{id} {
      allow read: if resource.data.published == true || request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.authorUid;
    }
  }
}
```

**Storage Rules** (downloads públicos; upload só logado):
```
// Storage Security Rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /downloads/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

> Observação: as **API keys do Firebase ficam públicas** no front-end — isso é normal.
> A segurança é garantida pelas Rules acima.

4) No arquivo `js/firebase-config.js`, cole suas credenciais Firebase (CDN).

5) Suba tudo na sua branch do GitHub Pages (ex.: `main` em `nagcoop/nagcoop-site`).  
   - Se já possui site, apenas **adicione** `login.html`, `admin.html`, `downloads.html`, a pasta `js/` e `css/`.
   - Em algum menu do site, linke `admin.html` e `downloads.html`.

6) Teste:
   - Abra `login.html`, crie uma conta, publique 1 notícia e envie 1 arquivo.
   - Veja a notícia em `index.html` e o arquivo em `downloads.html`.

---

## Como fica o fluxo

- Visitante: vê `index.html` com posts `published = true` e `downloads.html`.
- Logado: acessa `admin.html` para **publicar** e **fazer upload**.

Para manter tudo grátis, **envie vídeos para YouTube** e cole o link no campo de vídeo.
Uploads grandes de vídeo no Storage podem consumir a cota rapidamente.

---

## Personalização rápida

- Estilos em `css/styles.css`.
- Campos do post em `admin.html` → `<form id="postForm">`.
- Renderização do post em `js/app.js` (formatação mínima markdown).

---

## Limites grátis (sujeito a mudanças pelo Firebase)
- Auth: gratuito para logins básicos.
- Firestore/Storage: cotas generosas para sites pequenos.
Monitore no Console Firebase.

