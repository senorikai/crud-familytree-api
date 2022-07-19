const router = require('express').Router();
const userModel = require('../model/FamilyTree')

router.post('/names', async (req, res) => {
    try {
        const result = await userModel.insert({ familyname, userId } = req.body)
        if (result) res.json({ Type: 'Success', Payload: result })
        console.log("payload", Payload.result)
    }
    catch (error) {
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }
})

router.get('/users/:userId/ftnames', async (req, res) => {
    try {
        const datas = await userModel.getAll(req.params.userId);
        res.send(datas);
    } catch (error) {
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }
})

router.delete('/names/:nameId', async (req, res) => {
    const nameId = req.params.nameId
    try {
        const result = await userModel.delete(nameId)
        return res.send(result)
    }
    catch (error) {
        res.json({ Type: 'Error', Message: "Internal Server Error" });
    }
})

router.put('/names', async (req, res) => {
    try {
        const { id, familyname } = req.body
        const data = await userModel.update(id, familyname);
        res.send(data);
    }
    catch (error) {
        res.json({ Type: 'Error', Message: "Internal Server Error" });

    }
})


module.exports = router;