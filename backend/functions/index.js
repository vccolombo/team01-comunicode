const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const csvtojson = require('csvtojson')

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

const app = express();
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.send({
        "Test": "Test message"
    });
})

app.post('/api/add-users', (req, res) => {
    req.body = [{
            "idn": "19001001",
            "nome": "abraao jose",
            "email": "abraao@mail.com",
            "equipe": "Ação Social",
            "aniversario": "01/01/2001"
        },
        {
            "idn": "19002001",
            "nome": "José da silva",
            "email": "jose@mail.com",
            "equipe": "Arrecadação",
            "aniversario": "01/01/2001"
        },
        {
            "idn": "19002002",
            "nome": "Víctor Cora",
            "email": "victorcora98@gmail.com",
            "equipe": "Arrecadação",
            "aniversario": "18/05/1998"
        },
        {
            "idn": "19003001",
            "nome": "Bartolomeu",
            "email": "bart@mail.com",
            "equipe": "Eventos",
            "aniversario": "01/01/2001"
        }
    ]
    console.log(req.body);
    let ref = db.collection('users');
    req.body.forEach((pessoa) => {
        ref.doc(pessoa.idn).set(pessoa);
        admin.auth().createUser({
            email: pessoa.email,
            emailVerified: false,
            password: pessoa.aniversario,
            displayName: pessoa.nome,
            disabled: false
        }).then((userRecord) => {
            console.log("Successfully created new user:", userRecord.uid);
            return null;
        }).catch(err => {
            return err;
        })
    });
});

app.get('/api/get-user', (req, res) => {
    const idn = req.query.idn;
    let ref = db.collection('users').doc(idn);
    let getDoc = ref.get()
        .then(doc => {
            res.send(doc._fieldsProto);
            return null;
        })
        .catch(err =>
            res.send(err)
        )
})

app.post('/api/add-message', (req, res) => {
    console.log(req.body);
    const timestamp = new Date().getTime();
    req.body.times.forEach((time) => {
        var ref = db.collection('mensagens');
        ref.doc(`${time}`).collection('mensagens').doc(`${timestamp}-${req.body.title}`).set(req.body);
    });
});

app.get('/api/get-messages', (req, res) => {
    console.log(req.query);
    const time = req.query.time;
    let ref = db.collection('mensagens').doc(time).collection('mensagens');
    var result = [];
    let all = ref.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                result = result.concat(doc);
            })
            res.send(result);
            return null;
        })
        .catch(err => {
            console.log(err);
            res.send("Error getting docs");
        });
});

const cleanCSV = (csvString) => {
    // const text = csvString.match(/Time[^]*/g).toString();
    const text = csvString.toString();
    let splitArray = text.split('\n');
    let result = splitArray.join('\n');
    return result;
}

app.post('/add-members', (req, res) => {
    const csv = cleanCSV(req.body.toString());
    console.log(csv);
    return res.send(csv);
});

exports.api = functions.https.onRequest(app);