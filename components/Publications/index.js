function Publications() {
  const publications = [
    {
      name: "Gemenetzi, Katerina, et al. 'Higher-order immunoglobulin repertoire restrictions in CLL: the illustrative case of stereotyped subsets 2 and 169'. Blood 137.14 (2021): 1895-1904.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0006497121007771",
    },
    {
      name: "Agathangelidis, Andreas, et al. Higher-order connections between stereotyped subsets: implications for improved patient classification in CLL. Blood, The Journal of the American Society of Hematology 137.10 (2021): 1365-1376.",
      link: "https://ashpublications.org/blood/article/137/10/1365/463992/Higher-order-connections-between-stereotyped",
    },
    {
      name: "Balaska, Konstantina, et al. 'Genetic diversity and spatial structure of the imperiled European population of Malus trilobata in Greece.' Genetika 53.1 (2021): 103-119",
      link: "http://www.doiserbia.nb.rs/Article.aspx?id=0534-00122101103B#.YbkBshZBx0w",
    },
  ];

  return publications.map((element, id) => (
    <a key={id} href={element.link} target="_blank" rel="noopener noreferrer">
      <h1 className="max-w-4xl text-justify py-1 ">{element.name}</h1>
    </a>
  ));
}
export default Publications;
