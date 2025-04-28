import '../styles/App.scss'

function App() {

  return (
    <article>
      <section className='section horizontal-flex gap-30'>
        <div className='horizontal-flex gap-10 gallery'>
          <img 
            src='/images/section1-img1.PNG'
            alt='Food wrapped in banana leaves while boiled in water'
            style={{
              width: '372px',
              height: '600px',
            }}
          />
          <div className='vertical-flex gap-10'>
            <img
              src='/images/section1-img2.PNG'
              alt='Ingredients being organized'
              style={{
                width: '372px',
                height: '295px',
              }}
            />
            <img
              src='/images/section1-img3.PNG'
              alt='Types of boiled eggs'
              style={{
                width: '372px',
                height: '295px',
              }}
            />
          </div>
        </div>
        <div className='vertical-flex vertical-content gap-30'>
          <div className='header-container'>
            <h1>What does cooking mean?</h1>
          </div>
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
        </div>
      </section>
      <section className='section vertical-flex gap-30'>
        <div className='header-container center'>
          <h1>Taste the Colours</h1>
        </div>
        <div className='horizontal-flex flex-center gap-10'>
          <section className='vertical-flex gap-30'>
            <img
              src='/images/section2-img1.PNG'
              alt='Red jelly on spoon'
              style={{
                width: '375px',
                height: '300px',
              }}
            />
            <div className='vertical-flex gap-10'>
              <h2>RED</h2>
              <p className='description text-center center'>
                Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.
              </p>
            </div>
          </section>
          <section className='vertical-flex gap-30'>
            <img
              src='/images/section2-img2.PNG'
              alt='Green jelly on spoon'
              style={{
                width: '375px',
                height: '300px',
              }}
            />
            <div className='vertical-flex gap-10'>
              <h2>Green</h2>
              <p className='description text-center center'>
                Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours
              </p>
            </div>
          </section>
          <section className='vertical-flex gap-30'>
            <img
              src='/images/section2-img3.PNG'
              alt='White jelly on spoon'
              style={{
                width: '375px',
                height: '300px',
              }}
            />
            <div className='vertical-flex gap-10'>
              <h2>White</h2>
              <p className='description text-center center'>
                White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.
              </p>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}

export default App
