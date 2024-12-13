import jsonschema from 'jsonschema';

export const schema_validator = new jsonschema.Validator();

export const get_simple_test_data = () => ({
    "schemas": {
        "utensil": {
            "_zoo_primarykey": "utl_id",
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "utl_id": {
                    "type": "string",
                },
                "name": {
                    "type": "string",
                    "_flm": "standalone"
                },
                "description": {
                    "type": "string",
                    "_flm": "full"
                },
                "can_eat_dishes": {
                    "type": "array",
                    "_auto_populated": true,
                },
            }
        },
        "dish": {
            "_zoo_primarykey": "dish_id",
            "_zoo_relations": [
                {
                    "object_field": "relations.eaten_with",
                    "to_object_type": "utensil",
                    "relation_primary_key_field": "utl_id",
                    "relation_add_object_field": "utensil",
                    "backreference": {
                        "field": "can_eat_dishes",
                    },
                },
            ],

            "type": "object",
            "additionalProperties": false,
            "properties": {
                "dish_id": {
                    "type": "string",
                },
                "name": {
                    "type": "string",
                    "_flm": "standalone",
                },
                "description": {
                    "type": "string",
                    "_flm": "block_level",
                },
                "relations": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "eaten_with": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "additionalProperties": false,
                                "properties": {
                                    "utl_id": {
                                        "type": "string"
                                    },
                                    "how": {
                                        "type": "string",
                                        "_flm": "full",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    "objects": {
        "utensil": {
            "fork": {
                "utl_id": "fork",
                "name": "Fork",
                "description": "Has \\emph{pointy} spikes to get food to eat",
            },
            "knife": {
                "utl_id": "knife",
                "name": "Knife",
                "description": "Enables you to cut your food in small pieces before eating it",
            },
            "spoon": {
                "utl_id": "spoon",
                "name": "Spoon",
                "description": "Can be used to eat some good \\href{https://en.wikipedia.org/wiki/Soup}{soup}."
            },
        },
        "dish": {
            "pasta": {
                "dish_id": "pasta",
                "name": "Pasta",
                "description": "Like, you know, \\emph{spaghetti}.",
                "relations": {
                    "eaten_with": [
                        {
                            "utl_id": "fork",
                            "how": "Roll spaghetti around the fork by turning the fork on its axis."
                        },
                        {
                            "utl_id": "knife",
                            "how": "To help guide the pasta around the fork.  Not to cut the pasta!"
                        },
                    ],
                },
            },
            "soup": {
                "dish_id": "soup",
                "name": "Soup",
                "description": "A very liquid food dish.  Can have vegetables, etc.",
                "relations": {
                    "eaten_with": [
                        {
                            "utl_id": "spoon"
                        },
                    ],
                },
            },
        },
    },
});

