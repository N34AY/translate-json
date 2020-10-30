exports.Translate = (objectPath, targets) => {
    const fs = require("fs")
    const {Translate} = require('@google-cloud/translate').v2

    const translate = new Translate( { projectId: 'lucid-parsec-291313', keyFilename: 'APIKEY.json' } )

    let stringToTranslate = ''

    const object = require(objectPath, "utf8")

    function getObjValue(object) {
        getProp(object)
    
        function getProp(o) {
            for(let prop in o) {
                if(typeof(o[prop]) === 'object') {
                    getProp(o[prop])
                } else {
                    stringToTranslate += o[prop] + '$'
                }
            }
        }
    }
    getObjValue(object)
    console.log(stringToTranslate);
    function createNewObj(translations, target) {
        for (let i = 0; i < translations.length; i++) { translations[i] = translations[i].trim() }
        let TranslatedObj = replaceObjValue(object, translations)
        let TranslatedJSON = 'export default ' + JSON.stringify(TranslatedObj, null, 2)
        fs.writeFileSync('./transResult/' + target + "-" + target.toUpperCase() + ".js", TranslatedJSON)
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

    targets.forEach(async target => {   
        try {
            if (!fs.existsSync('./transResult')) fs.mkdirSync('./transResult') 
            let [translations] = await translate.translate(stringToTranslate, target)
            translations = Array.isArray(translations) ? translations : translations.split('$')
            console.log(translations);
            createNewObj(translations, target)
        } catch (error) {
            console.log(error)
        }
    })
    
}