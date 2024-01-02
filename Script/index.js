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
      t1: `The following policies are applied to the content authored and published by me, 
            on this website and website  all other webistes using the ''lgjt.xyz'' domain is copyright Johannes Thorén. 
            With website meaning, but not limited to:`,

      t2: `All content authored or originaly published by me on this page such as text, images, videos pdfs and documents are all licensed under the ''CC BY-NC-SA 4.0 Deed''. 
            Exceptions to content not using the CC BY-NC-SA 4.0 license are: (1) software published in code or binary format. (2) Content that excplicity states the use of another license.
            (3) Content not originaly authored by me.`,

      t3: `You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation . `,

      t4: `No warranties are given. The license may not give you all of the permissions necessary for your intended use. 
            For example, other rights such as publicity, privacy, or moral rights may limit how you use the material. `
    }
  },

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
        Ul(Li(A("https://lgjt.xyz", "https://lgjt.xyz"))).Id("list-of-websites"),
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

