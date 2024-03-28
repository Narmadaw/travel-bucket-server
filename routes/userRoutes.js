const router = express.Router()
const userController = require('./../controllers/userController')

router.route('/').post(upload.single('image'), userController.addNewUser)





