
var fields = require('./fields');

function buildApplication(app) {
    if (typeof app.entities === 'function')
        app.entities = app.entities(fields.createFields());
        
    if (typeof app.entities === 'object')
        for (var n in app.entities) {
            var entity = app.entities[n];
            
            if (typeof entity.fields === 'object')
                for (var fn in entity.fields) {
                    var field = entity.fields[fn];
                    
                    if (typeof field.build === 'function')
                        entity.fields[fn] = field.build();
                }
        }
        
    return app;
}

module.exports = {
    build: buildApplication
}