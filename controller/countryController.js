import { countryList } from "../data/countryData.js"

export const CountryController ={
    getAllCountries: (req,res)=>{

        const sortQuery = req.query.sort === "true"

        const originList = [...countryList]

        let sortedList
        if(sortQuery){
            originList.sort((a,b) => {
                if(a.name < b.name){
                    return -1
                }
                if(a.name > b.name){
                    return 1
                }
                return 0
            } )
            console.log("sorted", sortedList)
            res.json(originList)
        }else{
            
            res.json(originList)
        }
        
    },
    addNewCountry: (req,res)=>{

        const body = req.body
        console.log("body", body)
        countryList.push(body)
        res.send("add new country")
    },
    getCountryByCode: (req,res)=>{
        const {code} = req.params
        const CODE = code.toUpperCase()
        const filterdList = countryList.filter(country => country.alpha2Code === CODE || country.alpha3Code === CODE)

        res.json(filterdList[0])
    },
    updateCountryData: (req,res)=>{
        const { code } = req.params;
        const CODE = code.toUpperCase()
        const body = req.body;
        const countryToUpdate = countryList.filter(country => country.alpha2Code === CODE || country.alpha3Code === CODE)

        const changedCountry = {...countryToUpdate[0], ...body}

        countryList.forEach((country, index, countryList)=>{
            if(country.alpha2Code === changedCountry.alpha2Code){
                countryList[index] = changedCountry;
                res.json({msg: `${countryList[index].name} updated`})
            }
        })
    },
    deleteCountry: (req,res)=>{
 
        const { code } = req.params;
        const CODE = code.toUpperCase()

        const countryIndex = countryList.findIndex(country => country.alpha2Code === CODE || country.alpha3Code === CODE)

        if (countryIndex != "-1"){
            countryList.splice(countryIndex,1)
            res.json({msg: "country deleted", countryList})
        }else{
            res.json({msg: "Country doesn´t exist"})
        }
    }
    
}