const axios = require('axios')
const {bnetKey} = require('../server/config')

// antorus id 8638
// bosses
// loot from bosses 


const getAntorusBosses = (req, res) => {
    
axios.get(`https://us.api.battle.net/wow/boss/?locale=en_US&apikey=${bnetKey}`).then(response => {
   let antorusBosses = [];
   antorusBosses = response.data.bosses.filter(boss => {
        return boss.zoneId === 8638
    })
    
    res.status(200).json(antorusBosses)
}).catch(err => console.log(err))
}
    


const getBossLoot = (req, res) => {
    let bossLootID = req.params.id;
    db = req.app.get('db');

    db.get_loot_by_id([bossLootID])
    .then(loot => console.log(response))
    .catch(err => console.log(err))
}

const getBossInfo = (req, res) => {
    let bossInfoID = req.params.id;
    
    axios.get(`https://us.api.battle.net/wow/boss/${bossInfoID}?locale=en_US&apikey=${bnetKey}`)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(err => console.log(err))
}
module.exports = {
    getAntorusBosses,
    getBossLoot,
    getBossInfo
}

const antorusBosses = [
    {   
        name: "garothi",
        encounterID: 122450,
        npcID: 123371,
        loot: [ 152002,
                151987,
                151937,
                151943,
                152031,
                152009,
                151951,
                151956,
                151998,
                152036,
                151962,
                151988,
                152017,
                152028,
                152039]
    },
    {
        name: "felhounds",
        encounterID: 122477,
        npcID: {
            fharg: 126916,
            shatug: 126915,
        },
        loot: [ 152816,
                151973,
                152056,
                153544,
                152645,
                152021,
                152291,
                152027,
                151980,
                152012,
                152004,
                151968,
                152000,
                151949,
                151947,
                151983,
                152059]
    },
    {
        name: "antoran",
        encounterID: 122367,
        npcID: {    
            svirax: 122367,
            erodus: 125014,
            ishkar: 125012,},
    
        loot: [152125,
                152143,
                152161,
                152006,
                152167,
                152113,
                152011,
                152293,
                152119,
                151992,
                151994,
                151985,
                152154,
                152172,
                151957,
                152179,
                152424,
                152149,
                152043,
                151953,
                152019,
                152136,
                152131]
    },
    {
        name: "hasabel",
        encounterID: 122104,
        npcID: 124393,
        loot: [ 151941,
                152035,
                152057,
                152049,
                152086,
                151945,
                152020,
                152001,
                151990,
                152008,
                151976,
                152063,
                152041,
                151958,
                151965]
    },
    {
        name: "eonar",
        encounterID: 122500,
        npcID: 125562,
        loot: [ 152124,
                151952,
                152112,
                152061,
                152118,
                152158,
                152176,
                152681,
                152013,
                152047,
                152178,
                151981,
                152148,
                152688,
                152166,
                152140,
                152007,
                152130,
                152044,
                152142,
                152054,
                152023,
                152160,
                151970]
    },
    {
        name: "imonar",
        encounterID: 124158,
        npcID: 125055,
        loot: [ 152128,
                151996,
                151938,
                152116,
                152024,
                152122,
                152157,
                152175,
                152042,
                152687,
                152182,
                152146,
                152170,
                152152,
                152050,
                152164,
                151999,
                152139,
                152134,
                152416,
                151944,
                151989,
                152045,
                151939]
    },
    {
        name: "kingaroth",
        encounterID: 122578,
        npcID: 125050,
        loot: [ 151955,
                151975,
                152064,
                152126,
                152048,
                152412,
                152114,
                152051,
                152120,
                151963,
                152155,
                152162,
                152168,
                152173,
                152144,
                152180,
                152055,
                152150,
                151948,
                152034,
                152137,
                152280,
                152132,
                152104]
    },
    {
        name: "varimathras",
        encounterID: 122366,
        npcID: 125075,
        loot: [ 151991,
                151994,
                151960,
                151942,
                152015,
                152092,
                151997,
                152060,
                151966,
                151995,
                151964,
                152025,
                152037,
                152281,
                151979]
    },
    {
       name: "coven", 
       encounterID: 122468, 
       npcID: {
            noura: 122468,
            diima: 122469,
            thuraya: 125436,
            asara: 122467},
        loot: [ 152129,
                152414,
                152010,
                152046,
                151977,
                152117,
                152123,
                151946,
                152040,
                152159,
                152177,
                152289,
                152183,
                152003,
                152153,
                151984,
                152147,
                152171,
                152141,
                152135,
                151971,
                152029,
                152165,
                152058,
                152284]
    },
    {
        name: "aggramar",
        encounterID: 121975,
        npcID: 124691,
        loot: [ 152127,
                152018,
                152282,
                152163,
                152145,
                152115,
                151950,
                152121,
                152156,
                152093,
                152684,
                152062,
                152174,
                152022,
                152169,
                152181,
                152151,
                152026,
                152038,
                152138,
                151940,
                152133,
                152033,
                151978,
                152052,
                152683]
    },
    {
        name: "argus",
        encounterID: 124828,
        npcID: 124828,
        loot: [ 154172,
                154173,
                152283,
                155853,
                155848,
                152016,
                155847,
                151986,
                154175,
                155849,
                152679,
                154174,
                152680,
                152423,
                154176,
                155846,
                155855,
                152686,
                154177,
                155831,
                152005,
                155851,
                155850,
                155854,
                151972,
                151982,
                155852]
    }
]