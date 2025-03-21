// Intersection Types

// type FileData = {
//     path: string;
//     content: string;
// };

// type DatabaseData = {
//     connectionUrl: string,
//     credentials: string,
// }

// type Status = {
//     isOpen: boolean,
//     errorMessage?: string,
// }

// type AcessedFileData = FileData & Status;
// type AcessedDatabaseData = DatabaseData & Status;

interface FileData {
    path: string;
    content: string;
};

interface DatabaseData {
    connectionUrl: string,
    credentials: string,
}

interface Status {
    isOpen: boolean,
    errorMessage?: string,
}

interface AcessedFileData extends FileData,  Status {}
interface AcessedDatabaseData extends DatabaseData, Status {}
