import { useState } from 'react'
// Eigenes Package aus node_modules (publiziert auf npmjs.com)
import HorizontalBarGraph from '@johnsoryna/mybargraph'
import PartnerDemo from './PartnerDemo.jsx'
import './App.css'

function App() {
  const [value, setValue] = useState(42)

  return (
    <main className="page">
      <h1>Bargraph Consumer</h1>
      <p className="sub">
        React-Projekt, das die Komponente <code>HorizontalBarGraph</code> aus dem
        npm-Package <code>@johnsoryna/mybargraph</code> verwendet.
      </p>

      <section className="card">
        <h2>Eigenes Package: @johnsoryna/mybargraph</h2>
        <label className="slider">
          Wert: <strong>{value}</strong>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>

        <div className="bars">
          <HorizontalBarGraph value={value} maxvalue={100} barwidthpx={420} label="Fortschritt" />
          <HorizontalBarGraph value={value} maxvalue={60} barwidthpx={300} label="Ziel 60" color="#16a34a" />
          <HorizontalBarGraph value={value} maxvalue={100} barwidthpx={200} color="#f59e0b" showValue={false} />
        </div>
      </section>

      <PartnerDemo />
    </main>
  )
}

export default App
