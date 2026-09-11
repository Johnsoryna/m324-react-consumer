// ============================================================================
// TODO Lernpartner: Package des Lernpartners einbinden
//
// 1. Im Terminal installieren:
//        npm install @PARTNER/PAKETNAME
// 2. Die Komponente hier importieren (Name gemäss README des Packages):
//        import PartnerKomponente from '@PARTNER/PAKETNAME'
// 3. Unten im JSX die Zeile mit <PartnerKomponente ... /> einkommentieren
//    und die Props gemäss README des Partners setzen.
// 4. Den Platzhalter-Text entfernen.
// ============================================================================

// import PartnerKomponente from '@PARTNER/PAKETNAME'

export default function PartnerDemo() {
  return (
    <section className="card">
      <h2>Package vom Lernpartner</h2>
      <p className="placeholder">
        Hier wird die Komponente aus dem Package des Lernpartners angezeigt.
        <br />
        Noch offen: <code>npm install @PARTNER/PAKETNAME</code> und Import in{' '}
        <code>src/PartnerDemo.jsx</code>.
      </p>
      {/* <PartnerKomponente /> */}
    </section>
  )
}
