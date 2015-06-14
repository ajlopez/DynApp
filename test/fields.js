
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

exports['Create date field'] = function (test) {
    var builder = Fields.date('Created');
    var field = builder.build();
    
    test.ok(field);
    test.equal(field.title, 'Created');
    test.equal(field.type, 'date');
}

exports['Create required date field'] = function (test) {
    var builder = Fields.date('Created').required();
    var field = builder.build();
    
    test.ok(field);
    test.equal(field.title, 'Created');
    test.equal(field.type, 'date');
    test.ok(field.required);
}