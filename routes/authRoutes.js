import exxpress from 'express';

const router = exxpress.Router();

router.post("/api/register/", adminMiddleWare, yeyeyecontroller)


module.exports = router