const Header = (headerText) => {
  return Div(
    H(headerText).Id("header-text"),
    Ul(
      Li(RouterLink("Home", "/")).Class("nav-item"),
      // Li(RouterLink("About", "/About")).Class("nav-item"),
      // Li(RouterLink("Repositories", "/Repos")).Class("nav-item")
    ).Id("nav")
  ).Id("header")
}

const Page = (...children) => {
  let body = Div()
  children.forEach((c) => body.Child(c))
  return body
}




RouterOnLoad(
  Router(
    Route("/", Page(
      Header("LGJT.XYZ"),
      Div(
        P("Hi, Glad to see that you have found my webpage :)"),
        P("I am sorry to tell you tho that this page is under construction, feel free to comeback later!")
      ).Id("content")
    ).Id("Home")),
    // Route("/About", Page(
    //   Header("About")
    // ).Id("About")),
    // Route("/Repos", Page(
    //   Header("Repositories")
    // ).Id("Repos"))
  )
)