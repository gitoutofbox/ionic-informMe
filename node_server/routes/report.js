var Q = require('q');

exports.saveReport = function (req, res) {
    // console.log('req.body.report_type', typeof req.body.report_type)
    let report_type_id  = '';
    if(typeof req.body.report_type == 'boolean') {
        report_type_id = req.body.report_type == true ? 2 : 1;
    } else {
        report_type_id = (req.body.report_type).toLowerCase() == 'domestic violence' ? 2 : 1;
    }
    

    if(report_type_id == '') {
        
    }
    checkAlreadyReported(req.body.person_name, req.body.person_address, report_type_id).then(data => {
        if(data > 0) {
            let resp = {
                status: "error",
                statusMessage: 'Someone already informed about this person',
                data: ''
            }
            res.send(resp);
            return false;
        }
        const sql = `INSERT INTO im_reports 
    (
        report_type_id,
        person_name,
        person_address,
        reporter_name,
        reporter_phone
    ) values (
        ${report_type_id},
        '${req.body.person_name}',
        '${req.body.person_address}',
        '${req.body.reporter_name}',
        '${req.body.reporter_phone}'
    )`;
    console.log(sql)
    database.query(sql, (err, rows) => {
        if (err) throw err;
        let resp = {
            status: "success",
            statusMessage: "",
            data: rows
        }
        res.send(resp)
    });
    })

    
};

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
