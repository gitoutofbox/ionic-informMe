var Q = require('q');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const { BasicAuthenticator } = require('ibm-watson/auth');

const { report } = require('./report');

const assistant = new AssistantV2({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: '2HYzD3bRgKIEzBKA0VmMxDWHCqN2Us5n1kVmFa9KZ6DZ',
    }),
    url: 'https://api.eu-gb.assistant.watson.cloud.ibm.com',
    disableSslVerification: true
});

const assistantId = 'ef70ef3f-9b79-42e9-b4c2-6a4530ddb61e';
let sessionId = '';


let report_type, person_name, person_address, reporter_name, reporter_phone; 
exports.createSession = function (req, res) {
    assistant.createSession({
        assistantId: assistantId
    }).then(resp => {
        sessionId = resp.result['session_id'];
        res.send({ status: "success" });
    }).catch(err => {
        console.log(err);
        res.send({ status: "failure" });
    });
}

exports.sendMessage = function (req, res) {
    let message = req.body.message;
    // console.log(message)
    assistant.message({
        assistantId: assistantId,
        sessionId: sessionId,
        input: {
            'message_type': 'text',
            'text': message
        }
    }).then(resp => {
        let response = JSON.stringify(resp.result, null, 2);
        // console.log('resp', resp)
        let entity =  resp['result']['output']['entities'][0]['entity'];
        let value = resp['result']['output']['entities'][0]['value']; 
        let text = resp['result']['output']['generic'][0]['text'];
        if(entity == 'yes_no') {
            if(resp['result']['output']['entities'][0]['value'] == 'Y') {

            }
        }
        // console.log(resp['result']['output'], entity, )
        setEntityValue(entity, value, message, resp);
        
console.log(entity, value)
        if(entity == 'yes_no' && value == 'Y') {
            saveData(res);
        } else {
            res.send({status: "success", message: text });
        }
    }).catch(err => {
        console.log(err)
        res.send({status: "failure", message: err});
    });
}
function setEntityValue(entity, value, text, resp) {
    switch(entity) {
        case 'report_type':
            report_type = value;
            break;
        case 'sys_person':
            person_name = value;
            break;
        case 'address':
            person_address = value;
            break;
        case 'reporter_name':
            reporter_name = value;
            break;
        case 'reporter_phone':
            reporter_phone = value;
            break;        
    }
}
function saveData(res) {
    console.log('saveData')
    save({
        report_type_id: report_type == 'DOmestic violence' ? 2: 1,
        person_name: person_name,
        person_address: person_address,
        reporter_name: reporter_name,
        reporter_phone: reporter_phone
    }).then(rows => {
        let resp = {
            status: "success",
            statusMessage: "",
            data: 'Thank you for the information.'
        }
        res.send(resp)
    })
}



function save(data) {
    var defered = Q.defer();
    const sql = `INSERT INTO im_reports 
    (
        report_type_id,
        person_name,
        person_address,
        reporter_name,
        reporter_phone
    ) values (
        ${data.report_type_id},
        '${data.person_name}',
        '${data.person_address}',
        '${data.reporter_name}',
        '${data.reporter_phone}'
    )`;
    console.log(sql)
    database.query(sql, (err, rows) => {

        if (err) { defered.reject(err); throw err; }
        defered.resolve(rows);
        
    });

    return defered.promise;
}
function checkAlreadyReported(name, address, report_type_id) {
    var defered = Q.defer();
    const sql = `SELECT COUNT(*) as total_records FROM im_reports 
                WHERE
                report_type_id = ${report_type_id} 
                AND person_name = '${name}' 
                AND person_address = '${address}'`;
                console.log(sql);
    database.query(sql, (err, rows) => {
        if (err) { defered.reject(err); throw err; }
        defered.resolve(rows[0]['total_records']);
    });
    return defered.promise;
}
