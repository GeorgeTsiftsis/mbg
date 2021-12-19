function Publications() {
  const publications = [
    {
      name: "Gemenetzi, Katerina, et al. 'Higher-order immunoglobulin repertoire restrictions in CLL: the illustrative case of stereotyped subsets 2 and 169'. Blood 137.14 (2021): 1895-1904.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0006497121007771",
    },
    {
      name: "Agathangelidis, Andreas, et al. 'Higher-order connections between stereotyped subsets: implications for improved patient classification in CLL. Blood', The Journal of the American Society of Hematology 137.10 (2021): 1365-1376.",
      link: "https://ashpublications.org/blood/article/137/10/1365/463992/Higher-order-connections-between-stereotyped",
    },
    {
      name: "Balaska, Konstantina, et al. 'Genetic diversity and spatial structure of the imperiled European population of Malus trilobata in Greece.' Genetika 53.1 (2021): 103-119",
      link: "http://www.doiserbia.nb.rs/Article.aspx?id=0534-00122101103B#.YbkBshZBx0w",
    },
    {
      name: "Kotouza, Maria Th, et al. 'TRIP-T cell receptor/immunoglobulin profiler.' BMC bioinformatics 21.1 (2020): 1-21.",
      link: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03669-1",
    },
    {
      name: "Sinapidou, Evaggelia, et al. 'Plant Yield Efficiency by Homeostasis as Selection Tool at Ultra-Low Density. A Comparative Study with Common Stability Measures in Maize.' Agronomy 10.8 (2020): 1203.",
      link: "https://www.mdpi.com/2073-4395/10/8/1203",
    },
    {
      name: "Mylonas, Ioannis, et al. 'Improved plant yield efficiency alleviates the erratic optimum density in maize.' Agronomy Journal 112.3 (2020): 1690-1701.",
      link: "https://acsess.onlinelibrary.wiley.com/doi/abs/10.1002/agj2.20187",
    },
    {
      name: "Gemenetzi, Katerina, et al. 'Truly unmutated IGHV-IGHD-IGHJ gene rearrangements in CLL: do they really exist?.' LEUKEMIA & LYMPHOMA. Vol. 61. 2-4 PARK SQUARE, MILTON PARK, ABINGDON OR14 4RN, OXON, ENGLAND: TAYLOR & FRANCIS LTD, 2020.",
    },
    {
      name: "Gemenetzi, Katerina, et al. 'Higher Order Restrictions of the Immunoglobulin Repertoire in CLL: The Illustrative Case of Stereotyped Subsets# 2 and# 169.' (2019): 5453-5453.",
      link: "https://ashpublications.org/blood/article/134/Supplement_1/5453/425281/Higher-Order-Restrictions-of-the-Immunoglobulin",
    },
    {
      name: "Gemenetzi, Katerina, et al. 'VH CDR3-focused somatic hypermutation in CLL IGHV-IGHD-IGHJ gene rearrangements with 100% IGHV germline identity.' (2019): 4277-4277.",
      link: "https://ashpublications.org/blood/article/134/Supplement_1/4277/425643/VH-CDR3-Focused-Somatic-Hypermutation-in-CLL-IGHV",
    },
  ];

  return publications.map((element, id) => (
    <a
      key={id}
      href={element.link}
      target="_blank"
      rel="noopener noreferrer"
      className={element.link ? "hover:text-blue-400" : ""}
    >
      <p className="max-w-4xl  text-lg text-left  py-1  ">{element.name}</p>
    </a>
  ));
}
export default Publications;
