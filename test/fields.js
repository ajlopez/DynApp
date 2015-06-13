
var Fields = require('../lib/fields').createFields();

exports['Create text field'] = function (test) {
    var builder = Fields.text('First Name');
    var field = builder.build();
    
    test.ok(field);
    test.equal(field.title, 'First Name');
    test.equal(field.type, 'text');
}

exports['Create required text field'] = function (test) {
    var builder = Fields.text('First Name').required();
    var field = builder.build();
    
    test.ok(field);
    test.equal(field.title, 'First Name');
    test.equal(field.type, 'text');
    test.ok(field.required);
}