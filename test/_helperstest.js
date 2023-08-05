

export const get_simple_test_data = () => ({
    "schemas": {
        "ustensil": {
            "_zoo_primarykey": "ust_id",
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "ust_id": {
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
                    "to_object_type": "ustensil",
                    "relation_primary_key_field": "ust_id",
                    "relation_add_object_field": "ustensil",
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
                    "_flm": "full",
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
                                    "ust_id": {
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
        "ustensil": {
            "fork": {
                "ust_id": "fork",
                "name": "Fork",
                "description": "Has \\emph{pointy} spikes to get food to eat",
            },
            "spoon": {
                "ust_id": "spoon",
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
                            "ust_id": "fork",
                            "how": "Roll spaghetti around the fork by turning the fork on its axis."
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
                            "ust_id": "spoon"
                        },
                    ],
                },
            },
        },
    },
});

