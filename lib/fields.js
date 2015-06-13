
function TextFieldBuilder(title) {
    this.build = function () {
        return { title: title };
    }
}

function FieldBuilderFactory() {
    this.text = function (title) {
        return new TextFieldBuilder(title);
    }
}

function createFields() {
    return new FieldBuilderFactory();
}

module.exports = {
    createFields: createFields
}
