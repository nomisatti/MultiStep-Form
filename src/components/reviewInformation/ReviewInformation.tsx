import React, { useState } from 'react'
import { Card, CardContent, Button } from '@material-ui/core';


export default function ReviewInformation({ submit, allData }) {
    const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

    const [isSubmiting, setIsSubmiting] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmiting(true)
        await sleep(3000)
        setIsSubmiting(false)
        alert('Record is successfully Added')
        console.log('Review Data ', allData)

    }
    return (
        <Card>
            <CardContent>
                <div className='ReviewContent'>
                    <h2>Personal Information</h2>
                    <p>First Name : {allData.firstName}</p>
                    <p>Last Name : {allData.lastName}</p>
                    <p>Age : {allData.age}</p>
                    <p>Email : {allData.email}</p>
                    <p>City : {allData.city}</p>
                    <p>Country : {allData.country}</p>
                    <p>Address : {allData.address}</p>
                    <hr />

                    <h2> Educational Information</h2>
                    <p>Last Degree : {allData.lastDegree}</p>
                    <p>Major Subjects : {allData.majorSubjects}</p>
                    <p>University : {allData.university}</p>
                    <p>CGPA : {allData.cgpa}</p>

                    <hr />

                    <h2>Experience Information</h2>
                    <p>Experience # 1 : {allData.firstExperience} for {allData.firstDuration} Years</p>
                    <p>Experience # 2 : {allData.secondExperience} for {allData.secondDuration} Years</p>
                    <p>Experience # 3 : {allData.thirdExperience} for {allData.thirdDuration} Years</p>
                    <div className="Buttons_Group">
                        <Button onClick={() => submit(2)} variant="contained" type="button" color="secondary">
                            Back
                </Button>

                        {!isSubmiting ?
                            <Button onClick={(e) => onSubmit(e)} variant="contained" type="submit" color="primary">
                                Submit Record
                            </Button>

                            : <Button onClick={(e) => onSubmit(e)} variant="contained" disabled type="submit" color="primary">
                                Submiting Record
                             </Button>


                        }


                    </div>

                </div>
            </CardContent>
        </Card>
    )
}