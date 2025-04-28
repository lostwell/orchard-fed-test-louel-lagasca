import '../styles/App.scss'

function App() {

  return (
    <article>
      <section className='content-section'>
        <h1>What does cooking mean?</h1>
        <p>
          Is it simply applying heat to a food product? A way of making certain food safe to eat? 
          Or a way to create flavour and make food more appealing? This is just part of what Hervé This, 
          the father of molecular gastronomy, has dedicated his life to finding out. 
          We spoke to him to find out what his experiments have told him. 
          And in the process even discovered the secret to cooking the perfect egg...
        </p>
        <div>
          <h3>The Perfect Egg</h3>
          <mark>Keep water between 67 and 68°C for a flavourful, tender yolk</mark>
        </div>
      </section>
      <section className='content-section'>
        <h1>Taste the Colours</h1>
        <section>
          <h2>RED</h2>
          <p>Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</p>
        </section>
        <section>
          <h2>Green</h2>
          <p>Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours</p>
        </section>
        <section>
          <h2>White</h2>
          <p>White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</p>
        </section>
      </section>
    </article>
  )
}

export default App
