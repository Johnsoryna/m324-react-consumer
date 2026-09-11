// ============================================================================
// Package des Lernpartners: @samusn/react-card-package (GitHub Packages)
//
// Installation (Registry-Zuordnung steht in .npmrc, Token kommt aus GITHUB_TOKEN):
//     $env:GITHUB_TOKEN = "<PAT mit read:packages>"      (PowerShell)
//     npm install @samusn/react-card-package@1.0.0
//
// Danach den Import unten einkommentieren und die Komponente gemäss README
// des Partners mit den passenden Props verwenden.
// ============================================================================

// import Card from '@samusn/react-card-package'

export default function PartnerDemo() {
  return (
    <section className="card">
      <h2>Package vom Lernpartner: @samusn/react-card-package</h2>
      <p className="placeholder">
        Registry: GitHub Packages (npm.pkg.github.com), Zuordnung in <code>.npmrc</code>.
        <br />
        Noch offen: Lesezugriff auf das private Package, dann{' '}
        <code>npm install @samusn/react-card-package@1.0.0</code> und Import in{' '}
        <code>src/PartnerDemo.jsx</code>.
      </p>
      {/* <Card title="Beispiel" /> */}
    </section>
  )
}
