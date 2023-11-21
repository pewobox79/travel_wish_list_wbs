import express from 'express'
import { CountryController } from '../controller/countryController.js'
const router = express.Router()

router.get("/", CountryController.getAllCountries)
router.post("/", CountryController.addNewCountry)
router.get("/:code", CountryController.getCountryByCode)
router.put("/:code", CountryController.updateCountryData)
router.delete("/:code", CountryController.deleteCountry)

export default router