function Header(){
  return(
  <header>
  <nav>
  <img src="./logo.svg" width="200px" />
  </nav>
  </header>
  )
}
function MainContent() {
  return (
    <div>
  <h1>Reasons I'm excited to learn React</h1>
  <ol>
  <ul>It's a popular library,I'm more likely to get a job as a developer if I know React</ul>
  </ol>
  </div>
  )
}
function Footer(){
  return(
  <footer>
  <small>© 2021 Ziroll development. All rights reserved.</small>
  </footer>
  )
}
function Page() {
return (
<div>
<Header />
<MainContent />
<Footer />
</div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))