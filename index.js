const fs = require('fs');

class Archive {
    location;

    constructor(location) {
        if (!fs.existsSync(location)) {
            fs.writeFileSync(location, Buffer.from("0046615200000000FF" + "FF".repeat(512 * 512) + "FF".repeat(23), "hex"));
        }

        this.location = location;
    }

    readAllocTable() {
        const reader = fs.readFileSync(this.location);
        let raw = reader.subarray(0x9, 0x40008);
        fs.writeFileSync("test1.bin", raw);
    }
}

module.exports = { Archive };