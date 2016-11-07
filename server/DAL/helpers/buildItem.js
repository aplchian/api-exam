module.exports = doc => {
    doc._id = doc.type + "_" + doc.name.replace(/ /, "_")
    return doc
}
