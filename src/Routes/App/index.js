import FormUserIntro from '../../Components/FormUserIntro'
import FormEntry from '../../Components/FormEntry'

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
  }
]


