import FormUserIntro from '../../Components/FormUserIntro'
import FormEntry from '../../Components/FormEntry'
import PageNotFound from '../../Components/PageNotFound'

export default [
  {
    path: "/",
    name: "Index Page",
    component: FormUserIntro
  },
  {
    path: "/intro",
    name: "Survey Intro",
    component: FormUserIntro
  },
  {
    path: "/form",
    name: "Fill Form",
    component: FormEntry
  },
  {
    path: "*",
    name: "Error 404",
    component: PageNotFound
  }
]


