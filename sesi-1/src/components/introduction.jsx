function Introduction(props) {
  return (
    <>
      <header>
        <nav>Perkenalan</nav>
      </header>
      <section>
        <div>
          <h1>{props.name}</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam at praesentium sequi molestiae exercitationem eligendi amet, voluptatum dicta cumque accusamus?</p>
        </div>
      </section>
    </>
  )
}

export default Introduction
