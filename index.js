'use strict'

module.exports = function reStagify(string, alsoTransformRi = false, alsoTransformRy = false) {
    let transformed = string.replaceAll(/re/ig, "Re:");
    
    if(alsoTransformRi) {
        transformed = transformed.replaceAll(/ri/ig, "Re:");
    }

    if(alsoTransformRy) {
        transformed = transformed.replaceAll(/ry/ig, "Re:");
    }

    return transformed;
}