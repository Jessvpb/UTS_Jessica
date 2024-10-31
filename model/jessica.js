const mongoose = require('mongoose');

const jessicaSchema = new mongoose.Schema(
    {
        namaPariwisata: {
            type: String,
            required: true
        },

        alamat: {
            type: String,
            required: true
        },

        deskripsi: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Jessica', jessicaSchema);