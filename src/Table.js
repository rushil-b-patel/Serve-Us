import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from './FormContext';
import axios from 'axios';

function Table() {

    const [state, setState] = useContext(FormContext);

    //Using fetch()
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json())
    //     .then((data) => { 
    //         setData(data); 
    //         })
    // },[])

    //Using axios
    // const [axiosdata,setAxiosData] = useState([]);
    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then((response) =>{
    //         setAxiosData(response.data);
    //     });
    // },[])

    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-32 mt-10">Data</h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-10 mx-32">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Full Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Mobile Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Services
                            </th>
                        </tr>
                    </thead>

                    {
                        state.map((value) => (
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {value.fname} {value.lname}
                                    </th>
                                    <td class="px-6 py-4">
                                        {value.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {value.number}
                                    </td>
                                    <td class="px-6 py-4">
                                        {value.date}
                                    </td>
                                    <td class=" py-4">
                                        {value.service}
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                    {/* {
                        data.map((value) => (
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {value.name} {value.lname}
                                    </th>
                                    <td class="px-6 py-4">
                                        {value.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {value.phone}
                                    </td>
                                    <td class="px-6 py-4">
                                        {value.website}
                                    </td>
                                    <td class=" py-4">
                                        {value.address.city}
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    } */}

                </table>
            </div>
        </div>
    )
}

export default Table