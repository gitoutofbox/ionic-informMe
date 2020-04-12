
exports.saveReport = function (req, res) {
    const report_type_id = req.body.report_type == true ? 2 : 1;
    const sql = `INSERT INTO im_reports 
    (
        report_type_id,
        person_name,
        person_address,
        reporter_phone
    ) values (
        ${report_type_id},
        '${req.body.person_name}',
        '${req.body.person_address}',
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
};
