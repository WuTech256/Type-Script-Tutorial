const mainUserName = 'Max';
const greeting = `Hi there, ${mainUserName}.`;

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

// type FilePermissions =
//     |   'no-read-write'
//     |   'read-no-write'
//     |   'no-read-no-write'
//     |   'read-write';

type FilePermissions = `${ReadPermissions} - ${WritePermissions}`;

type DataFile = {
    data: string;
    permission: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile} Changed`;

type DataFileEvents = {
    [Key in DataFileEventNames]: () => void;
};
