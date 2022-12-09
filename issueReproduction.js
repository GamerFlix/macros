let updates={
    "embedded": {
        "ActiveEffect": {
            "Mage Armor": {
                "changes": [
                    {
                        "key": "system.attributes.ac.calc",
                        "mode": 5,
                        "value": "mage",
                        "priority": null
                    }
                ],
                "disabled": false,
                "duration": {
                    "startTime": null,
                    "seconds": 1,
                    "combat": null,
                    "rounds": null,
                    "turns": null,
                    "startRound": null,
                    "startTurn": null
                },
                "icon": "icons/magic/defensive/shield-barrier-glowing-triangle-blue.webp",
                "label": "Mage Armor",
                "origin": "Compendium.dnd5e.spells.CKZTpZlxj7hjjo2H",
                "transfer": false,
                "flags": {
                    "effective-transferral": {
                        "transferBlock": {
                            "button": false,
                            "chat": false,
                            "displayCard": false
                        },
                        "castData": {
                            "origin": "Actor.tKUGlkl9BNIqbIYD.Item.Iw1EmicKuvp7lvRH",
                            "castLevel": 1
                        },
                        "mutationKey": "UDAiocljRN8EPHPH"
                    }
                },
                "tint": null
            }
        }
    }
}
await warpgate.mutate(token.document, updates, {}, {comparisonKeys:{ ActiveEffect:  "flags.effective-transferral.mutationKey" }});

let updates2={    "embedded": {
        "ActiveEffect": {
            "Mage Armor": {
                "changes": [
                    {
                        "key": "system.attributes.ac.calc",
                        "mode": 5,
                        "value": "mage",
                        "priority": null
                    }
                ],
                "disabled": false,
                "duration": {
                    "startTime": null,
                    "seconds": 1,
                    "combat": null,
                    "rounds": null,
                    "turns": null,
                    "startRound": null,
                    "startTurn": null
                },
                "icon": "icons/magic/defensive/shield-barrier-glowing-triangle-blue.webp",
                "label": "Mage Armor",
                "origin": "Compendium.dnd5e.spells.CKZTpZlxj7hjjo2H",
                "transfer": false,
                "flags": {
                    "effective-transferral": {
                        "transferBlock": {
                            "button": false,
                            "chat": false,
                            "displayCard": false
                        },
                        "castData": {
                            "origin": "Actor.tKUGlkl9BNIqbIYD.Item.Iw1EmicKuvp7lvRH",
                            "castLevel": 1
                        },
                        "mutationKey": "torvmPBZPBNu0lk7"
                    }
                },
                "tint": null
            }
        }
    }
}

await warpgate.mutate(token.document, updates2, {}, {comparisonKeys:{ ActiveEffect:  "flags.effective-transferral.mutationKey" }});