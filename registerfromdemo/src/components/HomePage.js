import React, { Component  } from 'react'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Input from '@mui/material/Input';
import { IMaskInput } from 'react-imask';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


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
        mask="0-0000-0000-0000"
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

  
  


export default class HomePage extends Component {
    constructor(){
        super();
        this.state={
            CardID:'',
            Dateofbirth:'',
            name:'',
            surname:'',
            Companyname:'',
            email:'',
            TaxID:'',
            address:'',
            phone:'',
            DataRecord:[]
        }
    }
      componentWillUnmount(){
        console.log("Conponent will Mount Calling");
        this.ReadRecord();
    }

    ReadRecord(){
        service.ReadRecord().then((data)=>{
          console.log(data.data.readRecordData)
          this.setState({DataRecord:data.data.readRecordData})
        }).catch((error)=>{
            console.log(error)
        })
    }

    handleChange = (event) =>{
        const {name , value } = event.target;
        this.setState({[name]: value}, ()=>{console.log(this.state)})
    }

    handleClick = () =>{
        if(this.state.CardID === '' || this.state.Companyname === ''
            ||this.state.Dateofbirth === '' || 
            this.state.TaxID === '' || this.state.name === '' || this.state.surname === '' || 
            this.state.email === '' || this.state.address === '' || this.state.phone === '' )
            {
                console.log("Input Field Is Empty");
                return;
            }
            console.log("Data : ",this.state);
            alert("Register Successful !!");
            const data = {
                cardID: this.state.CardID,
                dateofbirth: this.state.Dateofbirth,
                name: this.state.name,
                surname: this.state.surname,
                companyname: this.state.Companyname,
                taxID: this.state.TaxID,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone
              };

            service.CreateRecord(data).then((data)=>{
                console.log(data)
            }).catch((error)=>{
                console.log(error);
            })
    }
    

  render() {
    let state=this.state;

    return (
      <div className='MainContainer2'>
        <div className='SubContainer2'>
            <div className='Box1' >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    Register From
           </Typography>
                <div className='Input-Container'>
                    <div className='flex-Container'>
                        <InputLabel htmlFor="formatted-text-mask-input">CardID</InputLabel>
                            <Input
                            fullWidth
                            value={state.CardID}
                            onChange={this.handleChange}
                            name="CardID"
                            placeholder='เลขบัตรประชาชน'
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCardID}
                            />
                    </div>

                    <div className='flex-Container'>
                        <InputLabel >Name</InputLabel>
                         <Input name='name'
                         fullWidth 
                         placeholder='ชื่อ' 
                         value={state.name} 
                         variant="outlined" 
                         onChange={this.handleChange} />
                        <InputLabel >Surname</InputLabel>
                         <Input name='surname' 
                         fullWidth
                         placeholder='นามสกุล' 
                         value={state.surname} 
                         variant="outlined" 
                         onChange={this.handleChange} />
                       
                    </div>
                    <div className='flex-Container'>
                             <TextField
                                fullWidth
                                name="Dateofbirth"
                                label="Date of birth"
                                type="date"
                                size='small'
                                defaultValue = {null}
                                value={state.Dateofbirth}
                                onChange={this.handleChange}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                    </div>
                    <div className='flex-Container'>
                    <InputLabel  >Company Name</InputLabel>
                        <Select
                        fullWidth
                        size='small'
                        variant='outlined'
                        value={state.Companyname}
                        name="Companyname"
                        onChange={this.handleChange}
                        >
                        <MenuItem value="Company1">Company1</MenuItem>
                        <MenuItem value="Company2">Company2</MenuItem>
                        <MenuItem value="Company3">Company3</MenuItem>
                        <MenuItem value="Company4">Company4</MenuItem>
                        <MenuItem value="Company5">Company5</MenuItem>
                        </Select>
                    </div>
                    <div className='flex-Container'>
                       <InputLabel htmlFor="formatted-text-mask-input">CompanyTaxID</InputLabel>
                            <Input
                            fullWidth
                            value={state.TaxID}
                            onChange={this.handleChange}
                            name="TaxID"
                            placeholder='รหัสบริษัท'
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskTaxID}
                            />
                    </div>
                    <div className='flex-Container'>
                    <InputLabel >E-mail</InputLabel>
                         <Input name='email' 
                         fullWidth
                         placeholder='E-Mail' 
                         value={state.email} 
                         variant="outlined" 
                         onChange={this.handleChange} />
                       
                    </div>
                    <div className='flex-Container'>
                    <InputLabel >Address</InputLabel>
                         <Input name='address' 
                         fullWidth
                         placeholder='ที่อยู่' 
                         value={state.address} 
                         variant="outlined" 
                         onChange={this.handleChange} />
                       
                    </div>
                    <div className='flex-Container'>
                        <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
                            <Input
                            fullWidth
                            value={state.phone}
                            onChange={this.handleChange}
                            name="phone"
                            placeholder='เบอร์โทร'
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskPhone}
                            />
                    </div>
                    
                    <div className='flex-button'>
                    <Button variant="contained" fullWidth color="success" onClick={this.handleClick}>
                        Register
                    </Button>
                    </div>
                </div>
            </div>
            <div className='Box2' >
              
            </div>
        </div>
      </div>
    )
  }
}
