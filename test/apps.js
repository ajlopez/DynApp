
var apps = require('../lib/apps');

exports['build application with two entities'] = function (test) {
    var app = apps.build({
        name: 'myapp',
        title: 'My App',
        entities: function (Fields) {
            return {
                customer: {
                    descriptor: 'Customer',
                    fields: {
                        name: Fields.text('Name').required(),
                        address: Fields.text('Address'),
                        created: Fields.date('Created at')
                    }
                },
                supplier: {
                    descriptor: 'Supplier',
                    fields: {
                        name: Fields.text('Name').required(),
                        address: Fields.text('Address'),
                        created: Fields.date('Created at')
                    }
                }
            }
        }
    });
    
    test.ok(app);
    test.equal(app.name, 'myapp');
    test.equal(app.title, 'My App');
    test.ok(app.entities);

    test.ok(app.entities.customer);
    test.equal(app.entities.customer.descriptor, 'Customer');
    test.ok(app.entities.customer.fields);

    test.ok(app.entities.customer.fields.name);
    test.equal(app.entities.customer.fields.name.type, 'text');
    test.equal(app.entities.customer.fields.name.title, 'Name');
    test.ok(app.entities.customer.fields.name.required);

    test.ok(app.entities.customer.fields.address);
    test.equal(app.entities.customer.fields.address.type, 'text');
    test.equal(app.entities.customer.fields.address.title, 'Address');
    test.ok(!app.entities.customer.fields.address.required);

    test.ok(app.entities.customer.fields.created);
    test.equal(app.entities.customer.fields.created.type, 'date');
    test.equal(app.entities.customer.fields.created.title, 'Created at');
    test.ok(!app.entities.customer.fields.created.required);

    test.ok(app.entities.supplier);
    test.equal(app.entities.supplier.descriptor, 'Supplier');
    test.ok(app.entities.supplier.fields);

    test.ok(app.entities.supplier.fields.name);
    test.equal(app.entities.supplier.fields.name.type, 'text');
    test.equal(app.entities.supplier.fields.name.title, 'Name');
    test.ok(app.entities.supplier.fields.name.required);

    test.ok(app.entities.supplier.fields.address);
    test.equal(app.entities.supplier.fields.address.type, 'text');
    test.equal(app.entities.supplier.fields.address.title, 'Address');
    test.ok(!app.entities.supplier.fields.address.required);

    test.ok(app.entities.supplier.fields.created);
    test.equal(app.entities.supplier.fields.created.type, 'date');
    test.equal(app.entities.supplier.fields.created.title, 'Created at');
    test.ok(!app.entities.supplier.fields.created.required);
};

exports['build application with two related entities'] = function (test) {
    var app = apps.build({
        name: 'myapp',
        title: 'My App',
        entities: function (Fields) {
            return {
                department: {
                    descriptor: 'Department',
                    fields: {
                        name: Fields.text('Name').required()
                    }
                },
                employee: {
                    descriptor: 'Employee',
                    fields: {
                        name: Fields.text('Name').required(),
                        department: Fields.reference('Department').entity('department')
                    }
                }
            }
        }
    });
    
    test.ok(app);
    test.equal(app.name, 'myapp');
    test.equal(app.title, 'My App');
    test.ok(app.entities);

    test.ok(app.entities.department);
    test.equal(app.entities.department.descriptor, 'Department');
    test.ok(app.entities.department.fields);

    test.ok(app.entities.department.fields.name);
    test.equal(app.entities.department.fields.name.type, 'text');
    test.equal(app.entities.department.fields.name.title, 'Name');
    test.ok(app.entities.department.fields.name.required);

    test.ok(app.entities.employee);
    test.equal(app.entities.employee.descriptor, 'Employee');
    test.ok(app.entities.employee.fields);

    test.ok(app.entities.employee.fields.name);
    test.equal(app.entities.employee.fields.name.type, 'text');
    test.equal(app.entities.employee.fields.name.title, 'Name');
    test.ok(app.entities.employee.fields.name.required);

    test.ok(app.entities.employee.fields.department);
    test.equal(app.entities.employee.fields.department.type, 'reference');
    test.equal(app.entities.employee.fields.department.title, 'Department');
    test.strictEqual(app.entities.employee.fields.department.entity, app.entities.department);
};