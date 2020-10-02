const fs = require("fs")
const {Translate} = require('@google-cloud/translate').v2

const translate = new Translate()

const text = fs.readFileSync(process.argv[2], "utf8")
const targets = (process.argv[3]).split('-')

targets.forEach(async target => {   
    try {
        if (!fs.existsSync('./result')) fs.mkdirSync('./result') 
        let [translations] = await translate.translate(text, target)
        translations = Array.isArray(translations) ? translations : [translations]
        fs.writeFileSync('./result/' + target + "-" + target.toUpperCase() + ".js", translations)
    } catch (error) {
        console.log(error)
    }

})