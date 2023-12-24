const Social = (img, alt, link) => {return A("",link).Child(Img(img, alt))}

const Home = () => {return Tab("Home", Div(
  H("Welcome!", 2),
  P("Welocme to my website! Here you will find everything from project to information about me. Feel free to explore. Keep In mind that this page is still under construction.")
).Class("ContentWrapper"))}

const Projects = () => {
    let list = Ul().OnAppend(async()=>{
      let response = await fetch("https://api.github.com/users/JohannesThoren/repos?per_page=1000")
      let data = await response.json()

      data.forEach((el) => {
        let name = el.fork ? "Fork of " + el.name : el.name
        list.Child(Li(
          A(name, el.html_url), 
          el.description ? P(el.description) : P("No Description"),
        ))
      })
    })
  
    return Tab("Projects", Div(
      H("Projects", 2),
      P("Here are some of my projects that are avalible on github"),
      Tag("hr"),
      list
    ).Class("ContentWrapper"))
}


OnLoad(
  Div(
    H("LGJT.XYZ", 1)).Id("header"),
  TabRoot(
    Home(),
    Projects()
  )
)