let africanCountries = [
    {
        name: "Cameroon",
        location: "Central Africa",
        officialLanguages: "Swahili"
    },
    {
        name: "Nigeria",
        location: "West Africa",
        officialLanguages: "English"
    },
    {
        name: "Congo",
        location: "Central Africa",
        officialLanguages: "English"
    }
];

const countryNames = africa => africa.map(
    ({name: countryName}) => ({countryName})
);

console.log(countryNames(africanCountries));

const uniqueLanguages = africa => africa
    .map(({officialLanguages}) => officialLanguages)
    .reduce( 
        (arr, language) => arr.indexOf(language) !== -1 ?
                            arr : [...arr, language]
        , []
        )
console.log(uniqueLanguages(africanCountries))
