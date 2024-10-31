const Jessica = require('../model/jessica');

const jessicaCreate = (req, res) => {
    const jessica = new Jessica({
        namaPariwisata: req.body.namaPariwisata,
        alamat: req.body.alamat,
        deskripsi: req.body.deskripsi
    });

    console.log(jessica);
    jessica.save()
    .then((jessicaCreate)=>{
        res.status(201).json({
            message: "Data Berhasil Disimpan",
            jessicaId: jessicaCreate._id
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: "Internal Server Error",
            error : err
        })
    })
}

module.exports = {jessicaCreate};