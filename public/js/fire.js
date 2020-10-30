//*

const db = firebase.firestore();

const polls = db.collection( "polls" );

var pollsData = [];

polls.get()
    .then( query => query.forEach( doc => pollsData.push( { id: doc.id, data: doc.data() } ) ) )
    .then( function() {
        ReactDOM.render(React.createElement(App, { data: pollsData }), document.getElementById("root"));
    } );

/*/
const pollsData = [
    {
        "id": "LAQJVHaTUhWCiOlnKkU6",
        "data": {
            "title": "poll1",
            "options": [
                "a",
                "b"
            ]
        }
    },
    {
        "id": "a730cPsrNY9quIxf3dfb",
        "data": {
            "title": "poll2",
            "options": [
                "a",
                "b",
                "c",
                "d"
            ]
        }
    },
    {
        "id": "CNCdRlIWrOjBN4L4Ywf0",
        "data": {
            "title": "poll3",
            "options": [
                "a",
                "b",
                "c"
            ]
        }
    }
];

ReactDOM.render(React.createElement(App, { data: pollsData }), document.getElementById("root"));
//*/