function companyUsers(input) {
    let companies = {};

    for (let line of input) {
        let [companyName, employeeID] = line.split(" -> ");
        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }
        companies[companyName].push(employeeID);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sorted) {
        console.log(el[0]);
        let set = new Set(el[1]);
        for (let n of set) {
            console.log(`-- ${n}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);