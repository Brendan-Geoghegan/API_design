# Neighborhood Collaboration API
## Description
Allows you to store people, houses and addresses from the local neighbourhood:
- Each person has a name, age and number of people in their household.
- Each house has an address and an owner.
- Each address has a postcode and street address.

The API will allow users to:
- Look up a house, its address and owner.
- Look up people in our neighbourhood within certain age brackets and with specific household sizes.

## Instructions and Usage
### Instructions
1 Fork or Clone repo.
2 Run `npm install` to install node packages (There are none at the moment but for future use).
### Usage


**CREATE** - Store people, houses and addresses.

*path* - `/people` for people collection and `/houses` for houses collection.


**GET** - Look up a house, its address and owner

*path* - `/houses`


**GET** - Look up people in our neighbourhood within certain age brackets and with specific household sizes

*path* - `/people?age<:higher&age>:lower&numOfPeople=:householdSize`


**Example:** To find people in neighbourhood in the age bracket of 20-30 with a household size of 4 you would put:

***Request:***

*path* - `/people?age<30&age>20&numOfPeople=4`

***response:***
```
{
    "name": "John Doe",
    "age": 21,
    "numOfPeople": 4
},
{
    "name": "Odersky Venners",
    "age": 29,
    "numOfPeople": 4
},
{
    ...
}
```

