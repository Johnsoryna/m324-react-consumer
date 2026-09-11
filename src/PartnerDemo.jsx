// ============================================================================
// Package des Lernpartners: @samusn/react-card-package (GitHub Packages)
//
// Installation (Registry-Zuordnung steht in .npmrc, Token kommt aus GITHUB_TOKEN):
//     $env:GITHUB_TOKEN = gh auth token          (PowerShell)
//     npm install @samusn/react-card-package@1.0.0
//
// Das Package exportiert die Komponente Card (Named Export) mit den Props
// title, image, style und children.
// ============================================================================

// TODO nach der Installation einkommentieren:
// import { Card } from '@samusn/react-card-package'
import HorizontalBarGraph from '@johnsoryna/mybargraph'

// Platzhalter, bis das Package installiert ist. Danach: Card aus dem Package verwenden.
const Card = ({ title, children, style }) => (
  <div className="placeholder" style={style}>
    <strong>{title}</strong>
    <div>{children}</div>
  </div>
)

export default function PartnerDemo() {
  return (
    <section className="card">
      <h2>Package vom Lernpartner: @samusn/react-card-package</h2>
      <p className="sub">
        Komponente <code>Card</code> aus GitHub Packages, Registry-Zuordnung in <code>.npmrc</code>.
      </p>
      <div className="partner-grid">
        <Card title="Card aus dem Partner-Package">
          <p>Diese Karte kommt aus @samusn/react-card-package.</p>
        </Card>
        <Card title="Beide Packages kombiniert" style={{ maxWidth: '350px' }}>
          <p>Ein Balken aus @johnsoryna/mybargraph in einer Card des Partners:</p>
          <HorizontalBarGraph value={75} maxvalue={100} barwidthpx={280} label="Fortschritt" color="#7c3aed" />
        </Card>
      </div>
    </section>
  )
}
