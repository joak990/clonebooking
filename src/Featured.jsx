import "./Featured.css"


const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/971353.jpg?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>200 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/664200.jpg?k=91939c766d293b86038e54714d7d0711888aec8513a494ce3ed4976247712625&o="alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Mar del Plata</h1>
            <h2>220 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/664434.jpg?k=a0cb0f948924bdcea039a5039afc78096d324afe4d3395ec68d09536fc0daa23&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Bariloche</h1>
            <h2>220 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
