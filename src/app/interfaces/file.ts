export interface File {
    id?: number;
    name: string;
    device: string;
    path: string;
    status: FileStatus;
}

export enum FileStatus {
    Scheduled = "scheduled",
    Available = "available",
    Unknown = "unknown",
}
