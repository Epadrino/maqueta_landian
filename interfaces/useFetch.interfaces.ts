export interface config {
    method: string;
    body: any;
    headers: any;
    credentials: credentials;
}

enum credentials {
    omit = "omit",
    same_origin = "same-origin",
    include = "include"
}