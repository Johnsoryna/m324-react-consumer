# bargraph-consumer

React-Projekt (Vite) aus dem Modul 324 DevOps, das externe React-Packages aus `node_modules` verwendet:

1. das eigene Package `@johnsoryna/mybargraph` (Komponente `HorizontalBarGraph`, publiziert auf npmjs.com)
2. das Package eines Lernpartners (siehe unten)

Package-Repository: https://github.com/Johnsoryna/m324-react-bargraph

## Starten

```bash
npm install
npm run dev
```

## Package des Lernpartners einbinden

1. Installieren: `npm install @PARTNER/PAKETNAME`
2. In `src/PartnerDemo.jsx` den Import einkommentieren und den Paketnamen eintragen.
3. Im JSX die Komponente mit den Props gemäss README des Partners einfügen.

## Eigenes Package aktualisieren

```bash
npm install @johnsoryna/mybargraph@latest
```
