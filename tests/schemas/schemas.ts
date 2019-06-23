import { type } from "os";

export class Schemas {
    
    boardSchema = {
        type: "object",
        properties: {
            name: {
                type: "string"
            },
             id: {
                 type: "string"
             }
        }

    };
    
    listSchema = {
        type: "object",
        properties: {
            id: {
                type: "string"
             },
            name: {
                type: "string"
            },
            closed: {
                type: "string"
            },
            idBoard: {
                type: "string"
            },
            pos: {
                type: "integer"
            }
         }
    };
}