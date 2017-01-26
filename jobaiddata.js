window.JAData = (function () {
    var stmts = [],
        twowksago = new Date(+new Date - 12096e5),
        today = new Date(),
        objs = [
            {
                "id": "http://adlnet.gov/jobaid/roses/what",
                "definition": {
                    "name": {
                        "en-US": "What is a Rose"
                    },
                    "description": {
                        "en-US": "Roses Job Aid - What is a rose"
                    }
                }
            },
            {
                "id": "http://adlnet.gov/jobaid/roses/pruning",
                "definition": {
                    "name": {
                        "en-US": "Rose Pruning"
                    },
                    "description": {
                        "en-US": "Roses Job Aid - Pruning"
                    }
                }
            },
            {
                "id": "http://adlnet.gov/jobaid/roses/deadheading",
                "definition": {
                    "name": {
                        "en-US": "Rose Dead Heading"
                    },
                    "description": {
                        "en-US": "Roses Job Aid - Dead Heading"
                    }
                }
            },
            {
                "id": "http://adlnet.gov/jobaid/roses/shearing",
                "definition": {
                    "name": {
                        "en-US": "Rose Shearing"
                    },
                    "description": {
                        "en-US": "Roses Job Aid - Shearing"
                    }
                }
            },
            {
                "id": "http://adlnet.gov/jobaid/roses/hybrids",
                "definition": {
                    "name": {
                        "en-US": "Rose Hybrids"
                    },
                    "description": {
                        "en-US": "Roses Job Aid - Hybrids"
                    }
                }
            },
            {
                "id": "http://adlnet.gov/jobaid/roses/styles",
                "definition": {
                    "name": {
                        "en-US": "Rose Styles"
                    },
                    "description": {
                        "en-US": "Roses Job Aid - Styles"
                    }
                }
            },
            {
                "id": "http://adlnet.gov/jobaid/roses/symbolism",
                "definition": {
                    "name": {
                        "en-US": "Rose Symbolism"
                    },
                    "description": {
                        "en-US": "Roses Job Aid - Symbolism"
                    }
                }
            }
        ],
        peeps = [
            {"name":"bob", "account":{"homePage":"http://lms.adlnet.gov","name":"bob"}},
            {"name":"mary", "account":{"homePage":"http://lms.adlnet.gov","name":"mary"}},
            {"name":"vince", "account":{"homePage":"http://lms.adlnet.gov","name":"vince"}},
            {"name":"alice", "account":{"homePage":"http://lms.adlnet.gov","name":"alice"}},
            {"name":"nick", "account":{"homePage":"http://lms.adlnet.gov","name":"nick"}},
            {"name":"hershel", "account":{"homePage":"http://lms.adlnet.gov","name":"hershel"}},
            {"name":"roy", "account":{"homePage":"http://lms.adlnet.gov","name":"roy"}},
            {"name":"alex", "account":{"homePage":"http://lms.adlnet.gov","name":"alex"}},
            {"name":"camille", "account":{"homePage":"http://lms.adlnet.gov","name":"camile"}},
            {"name":"sasha", "account":{"homePage":"http://lms.adlnet.gov","name":"sasha"}},
            {"name":"chad", "account":{"homePage":"http://lms.adlnet.gov","name":"chad"}},
            {"name":"thomas", "account":{"homePage":"http://lms.adlnet.gov","name":"thomas"}},
            {"name":"michael", "account":{"homePage":"http://lms.adlnet.gov","name":"michael"}},
            {"name":"violet", "account":{"homePage":"http://lms.adlnet.gov","name":"violet"}},
            {"name":"owen", "account":{"homePage":"http://lms.adlnet.gov","name":"owen"}},
            {"name":"george", "account":{"homePage":"http://lms.adlnet.gov","name":"george"}},
            {"name":"persephone", "account":{"homePage":"http://lms.adlnet.gov","name":"persephone"}},
            {"name":"jill", "account":{"homePage":"http://lms.adlnet.gov","name":"jill"}},
            {"name":"will", "account":{"homePage":"http://lms.adlnet.gov","name":"will"}},
            {"name":"luke", "account":{"homePage":"http://lms.adlnet.gov","name":"luke"}}
        ],
        tmpl = {
            "id": "",
            "version": "1.0.1",
            "stored": "",
            "timestamp": "",
            "actor": {},
            "verb": ADL.verbs.completed,
            "object": {},
            "context": {
                "contextActivities": {
                    "parent": [
                        { 
                            "id": "http://adlnet.gov/jobaid/roses",
                            "definition": {
                                "name": {
                                    "en-US": "xAPI Android Roses Job Aid"
                                },
                                "description": {
                                    "en-US": "xAPI Android Roses Job Aid"
                                }
                            } 
                        },
                    ],
                    "grouping": [
                        { "id": "" }
                    ],
                    "category": [
                        {
                            "id": "https://w3id.org/xapi/scorm",
                            "definition": {
                                "type": "http://adlnet.gov/expapi/activities/profile"
                            }
                        }
                    ]
                }
            }
        };
    
    for (var i = 0; i < 500; i++) {
        stmts.push(createStmt());
    }
    
    function createStmt() {
        //http://adlnet.gov/jobaid/roses/colors?attemptId=e1d2cc4b-3ce5-4c10-b712-8aca8bbe98db
        var obj = objs[getRandomInt(0,objs.length)],
            s = JSON.parse(JSON.stringify(tmpl)),
            ts = randomDate(twowksago, today);
        s.id = ruuid();
        s.stored = new Date(+ts + 1000 * getRandomInt(0, 60));
        s.timestamp = ts;
        s.actor = peeps[getRandomInt(0, peeps.length)];
        s.object = obj;
        s.context.contextActivities.grouping[0].id = obj.id + "?attemptId=" + ruuid();
        s.context.contextActivities.parent.push({id: s.context.contextActivities.parent[0].id + "?attemptId=" + ruuid(), definition: s.context.contextActivities.parent[0].definition});
        return s;
    }
        
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function ruuid() 
    {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
        });
    }
    
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    
    function orderByTimestamp(stmts) {
        stmts.sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        return stmts;
    }

    return orderByTimestamp(stmts);
}());