export function COMapping(){
  const rows = [
    ['CO1','Component-driven UI, declarative rendering, Virtual DOM, unidirectional data flow.'],
    ['CO2','TypeScript interfaces, ES6 modules, pure filtering functions, async API service layer.'],
    ['CO3','Reusable React components: ProductCard, SearchBar, FilterPanel, Navbar.'],
    ['CO4','Context API, lifted state, LocalStorage, derived filtered product list.'],
    ['CO5','React Router, search form, accessible controls, responsive layout, performance-friendly filtering.'],
    ['CO6','Vite build system, TypeScript config, maintainable folder architecture, deployment-ready setup.']
  ];
  return <main className="page"><h1>Course Outcome Mapping</h1><div className="adminPanel"><table><tbody>{rows.map(r=><tr key={r[0]}><th>{r[0]}</th><td>{r[1]}</td></tr>)}</tbody></table></div></main>
}
