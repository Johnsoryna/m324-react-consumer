# bargraph-consumer

React-Projekt (Vite) aus dem Modul 324 DevOps, das externe React-Packages aus `node_modules` verwendet:

1. das eigene Package `@johnsoryna/mybargraph` (Komponente `HorizontalBarGraph`, publiziert auf npmjs.com)
2. das Package des Lernpartners `@samusn/react-card-package` (publiziert auf GitHub Packages)

Package-Repository: https://github.com/Johnsoryna/m324-react-bargraph

## Starten

```bash
npm install
npm run dev
```

## Package des Lernpartners (GitHub Packages)

GitHub Packages verlangt auch zum Lesen ein Token. Die Datei `.npmrc` im Projekt ordnet den Scope `@samusn`
der GitHub-Registry zu und liest das Token aus der Umgebungsvariable `GITHUB_TOKEN` (Personal Access Token
mit `read:packages`). Das Token selbst steht nie im Repository.

```powershell
$env:GITHUB_TOKEN = "<dein Token>"
npm install @samusn/react-card-package@1.0.0
```

Alternativ mit dem Token der GitHub-CLI: `$env:GITHUB_TOKEN = gh auth token`.

Danach in `src/PartnerDemo.jsx` den Import einkommentieren und die Komponente mit den Props gemäss README des Partners einfügen.

## Eigenes Package aktualisieren

```bash
npm install @johnsoryna/mybargraph@latest
```
