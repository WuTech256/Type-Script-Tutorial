type FileSource = { type: 'file', path: string };
const fileSource: FileSource = {
    type: 'file', 
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

// "Outsourcing" Type Guards & Using Type Predicats
function isFile(source: Source) 
{
    return source.type === 'file';
}

function loadData(source: Source) {
    // Open + read file Or reach out to database server
    // if('path' in source) {
    // if(source.type === 'file') {
    if(isFile(source)) {
        // source.path; => use that to open the file
        return;
    }
    // source.connectionUrl => to reach out to database
}


class User {
    constructor(public name: string) {}
    join() {
        // ...
    }
}

class Admin {
    constructor(permissions: string[]) {}
    scan() {
        // ...
    }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

// Type Guards via "instannce of"
function init(entity: Entity) {
    if (entity instanceof User) {
        entity.join();
        return;
    }

    entity.scan();
}
