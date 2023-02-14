import React, { useState ,useEffect  } from 'react'
import { useParams } from 'react-router-dom';
// import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Input from '@mui/material/Input';
import { IMaskInput } from 'react-imask';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { PatternFormat } from 'react-number-format';


import './HomePage.scss';
import CrudServices from '../Services/CrudServices';

const service = new CrudServices();

const TextMaskPhone = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="000-000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  
  TextMaskPhone.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };


  const TextMaskCardID = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="0-0000-00000-00-0"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  
  TextMaskCardID.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };


  const TextMaskTaxID = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00000000-000-00-00-0"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  
  TextMaskTaxID.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  

  
  


export default function AdminPage() {
    const { id } = useParams();
    const [Datas, setDatas] = useState([]);
    // const [cardID, setcardID] = useState('');
    // const [name, setname] = useState('');
    // const [surname, setsurname] = useState('');
    // const [dateofbirth, setdateofbirth] = useState('');
    // const [companyname, setcompanyname] = useState('');
    // const [taxID, settaxID] = useState('');
    // const [email, setemail] = useState('');
    // const [address, setaddress] = useState('');
    // const [phone, setphone] = useState('');

    useEffect(() => {
       userGet();
    },[])

    const   userGet=()=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "id": id
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(service.ReadRecordByID(), requestOptions)
        .then(response => response.json())
        .then((result) => {
            console.log("Data :",result);
            console.log("Data2 :", result.readRecordByIDData);
            setDatas(result.readRecordByIDData);
                // setcardID(result['readRecordData']['cardID'])
                // setname(result['readRecordData']['name'])
                // setsurname(result['readRecordData']['surname'])
                // setdateofbirth(result['readRecordData']['dataofbirth'])
                // setcompanyname(result['readRecordData']['companyname'])
                // settaxID(result['readRecordData']['taxID'])
                // setemail(result['readRecordData']['email'])
                // setaddress(result['readRecordData']['address'])
                // setphone(result['readRecordData']['phone'])
            
            })
        .catch(error => console.log('error', error));
    }
   

    return (
      <div className='MainContainer2'>
        <div className='SubContainer2'>
            <div className='Box1' >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    Edit User{<div>{Datas[0].cardID}</div>}
           </Typography>
            <div className='Input-Container'>
                <div className='flex-Container'>
                    <InputLabel></InputLabel>
                        <Input
                        fullWidth
                        value={Datas[0].cardID}
                        name="cardID"
                        placeholder='เลขบัตรประชาชน'
                        />
                    </div>
            </div>
            
                
            </div>
            <div className='Box2' >
               
            </div>
        </div>
      </div>
    )
  }
// }
