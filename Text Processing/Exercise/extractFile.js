function extractFile(input) {
    let text = input.split("\\");

    let nameExt = text.pop();
    let nameExtArr = nameExt.split(".");
    let ext = nameExtArr.pop();
    let name = nameExtArr.join(".");
    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log("-------");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.file.cs");