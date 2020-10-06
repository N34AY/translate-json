const fs = require("fs")
const {Translate} = require('@google-cloud/translate').v2

const translate = new Translate(
    {
        projectId: 'lucid-parsec-291313',
        keyFilename: 'APIKEY.json'
    }
)

const object = require('./' + process.argv[2], "utf8")
const targets = (process.argv[3]).split('-')

let stringToTranslate = ''

function getObjValue(object) {
    getProp(object)

    function getProp(o) {
        for(let prop in o) {
            if(typeof(o[prop]) === 'object') {
                getProp(o[prop])
            } else {
                stringToTranslate += o[prop] + ','
            }
        }
    }
}
function replaceObjValue(object, translations) {
    const transArray = [...translations]
    ReplaceProp(object)

    function ReplaceProp(o) {
        for(let prop in o) {
            if(typeof(o[prop]) === 'object') {
                
                ReplaceProp(o[prop])
            } else {
                o[prop] = transArray[0]
                transArray.shift()
            }
        }
    }
    return object
}

getObjValue(object)

function createNewObj(translations, target) {
    for (let i = 0; i < translations.length; i++) { translations[i] = translations[i].trim() }
    let TranslatedObj = replaceObjValue(object, translations)
    let TranslatedJSON = 'module.exports = ' + JSON.stringify(TranslatedObj, null, 2)
    fs.writeFileSync('./result/' + target + "-" + target.toUpperCase() + ".js", TranslatedJSON)
}

targets.forEach(async target => {   
    try {
        if (!fs.existsSync('./result')) fs.mkdirSync('./result') 
        let [translations] = await translate.translate(stringToTranslate, target)
        translations = Array.isArray(translations) ? translations : translations.split(',')
        createNewObj(translations, target)
    } catch (error) {
        console.log(error)
    }
})