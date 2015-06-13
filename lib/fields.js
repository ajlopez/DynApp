
function TextFieldBuilder(title) {
    var required = false;
    
    this.build = function () {
        return { title: title, type: 'text', required: required };
    };
    
    this.required = function () {
        required = true;
        return this;
    };
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
