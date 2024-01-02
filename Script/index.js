const TextContent = {
  home: {
    WIP: "This page is still under construction, some features and pages are still missing or in a state were they do not work as intended"
  },

  about: {
    aboutThisPage: `This page is a small project of mine, it is both my personal page but also a proof of concept. 
                    This page uses a custom framework (if you can call it that) that i am developing on my free time, nothing big revolutionary. 
                    So please report any bugs if you find any. Thanks :)`,

    sourceCode: `The source code of this page can be found on github`,
    websiteLicensing: {
      t1: "This policy applies to all websites under the domain lgjt.xyz. This includes the following websites:",

      t2: `Content authored by me (Johannes Thorén) on the websites is all copyright (C) Johannes Thorén and all avaliable under the ''CC BY-NC-SA 4.0 Deed'' license. 
          Exceptions to this are: (1) software published on this page (in code or binary format) produced me. 
          (2) re-published software or content created by other people, companies or foundations. (3) content that have another licensing notice.`,

      t3: `You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation . `,

      t4: `No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material. `
    }
  }
}


const Header = (headerText) => {
  return Div(
    H(headerText).Id("header-text"),
    Ul(
      Li(RouterLink("Home", "/")).Class("nav-item"),
      Li(RouterLink("About", "/About")).Class("nav-item"),
      // Li(RouterLink("Repositories", "/Repos")).Class("nav-item")
    ).Id("nav"),
  ).Id("header")
}

const Page = (...children) => {
  let body = Div()
  children.forEach((c) => body.Child(c))
  return body
}

const HomePage = () => {
  return Page(
    Header("LGJT.XYZ"),
    Div(P(TextContent.home.WIP)).Id("content")
  ).Id("home")
}

const AboutPage = () => {
  return Page(
    Header("About"),
    Div(
      Div(
        H("About this page", 2),
        P(TextContent.about.aboutThisPage)
      ).Id("about-page"),
      Div(
        H("Website Licensing", 2),
        P(TextContent.about.websiteLicensing.t1),
        Ul(Li(A("https://lgjt.xyz"))),
        P(TextContent.about.websiteLicensing.t2),
        H("Copyright Notice", 3),
        P(TextContent.about.websiteLicensing.t3),
        P(TextContent.about.websiteLicensing.t4),
        A("link to the CC BY-NC-SA 4.0 Deed", "https://creativecommons.org/licenses/by-nc-sa/4.0/")
      ),
      Div(
        H("Source Code", 2),
        P(TextContent.about.sourceCode),
        A("LGJT.XYZ repository", "https://github.com/JohannesThoren/lgjt.xyz"),
        Tag("br"),
        A("LGJTFramework repository", "https://github.com/JohannesThoren/LGJTFramework")
      ).Id("about-me")
    ).Id("content")
  ).Id("about")
}




RouterOnLoad(
  Router(
    Route("/", HomePage()),
    Route("/About", AboutPage()),
    // Route("/Repos", Page(
    //   Header("Repositories")
    // ).Id("Repos"))
  )
)

