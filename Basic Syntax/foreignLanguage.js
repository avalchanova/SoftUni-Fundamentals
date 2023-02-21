function foreignLanguage(language){

switch (language) {
    case "England":
    case "America": console.log("English"); break
    case "Spain":
    case "Argentina":
    case "Mexico": console.log("Spanish"); break
    default: console.log("unknown"); break

}
}
foreignLanguage('America')