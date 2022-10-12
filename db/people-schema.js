db = connect("localhost:27017/collaboration");


db.createCollection("people", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "name", "age", "numOfPeople"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                age: {
                    bsonType: "number",
                    minimum: 0,
                    maximum: 120,
                    description: "must be a actual age"
                },
                numOfPeople: {
                    bsonType: "number",
                    minimum: 0,
                    description: "must be the number of people in your household"
                }
            }
        }
    }
});


db.createCollection("houses", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "address", "owner"],
            properties: {
                address: {
                    bsonType: "object",
                    required: [ "postalCode", "streetAddress"],
                    properties: {
                        postalCode: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        streetAddress: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        }
                    },
                    description: "must be an object including both key value pairs"
                },
                owner: {
                    bsonType: "string",
                    description: "must be a string and is required"
            }
        }
    }
}});
