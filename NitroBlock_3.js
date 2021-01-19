class NitroBlock { //In both instances, NitroBlock will be the name in both instances
}
Scratch.extensions.register(new NitroBlock());

getInfo() {
    return {
        "id": "NitroBlock",
        "name": "NitroBlock",
        "blocks": [
        ],
        "menus": { //we will get back to this in a later tutorial
        }
    };
}

class NitroBlock {
    getInfo() {
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
}
Scratch.extensions.register(new NitroBlock());

class NitroBlock {
    getInfo() {
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    substringy({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
}