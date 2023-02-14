import React, { useState ,useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


import './AdminPage.scss';
import CrudServices from '../Services/CrudServices';

const service = new CrudServices();



export default function AdminPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        userGet();
    },[])

    const userGet=()=>{
        fetch(service.ReadRecord())
        .then(res => res.json())
        .then((result) => {
          console.log("Data :",result.readRecordData);
          setItems(result.readRecordData);

      })
    }
   
    
   const handleDelete = id =>{
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "id": id
        });

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://localhost:44353/api/CrudOperration/DeleteRecord", requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result['message']);
            if(result['isSuccess']=== true){
                userGet();
            }
        })
        .catch(error => console.log('error', error));
   }
    return (
      <div className='MainContainer'>
        <div className='SubContainer'>
            <div className='Box1' >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    Admin Dashboard
           </Typography>
                 <TableContainer component={Paper}>
                    <Table lg={{ minWidth: 800 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell >ID</TableCell>
                            <TableCell align="right">Card ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">SurName</TableCell>
                            <TableCell align="right">Date of Birth</TableCell>
                            <TableCell align="right">CompanayName</TableCell>
                            <TableCell align="right">CompanyTaxID</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {items.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.cardID}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.surname}</TableCell>
                            <TableCell align="right">{row.dateofbirth}</TableCell>
                            <TableCell align="right">{row.companyname}</TableCell>
                            <TableCell align="right">{row.taxID}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <Button onClick={()=> handleDelete(row.id)}>Del</Button>
                            </ButtonGroup>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='Box2' >
               
            </div>
        </div>
      </div>
    )
  }
// }
