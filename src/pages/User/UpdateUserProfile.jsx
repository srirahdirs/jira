import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Select from 'react-select';
import { format } from 'date-fns';
import { Toast } from "primereact/toast";
import { useToast } from '../../assets/utils/toastUtil';
const UpdateUserProfile = () => {


    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const { toast, showToast } = useToast();

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : {};
    });
    const formattedDate = new Date(user.dob).toISOString().split('T')[0];  // Ensure the date format is YYYY-MM-DD
    user.dob = formattedDate;
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: "",
        gender: user.gender,
        state: user.state,
        city: user.city,
        dob: user.dob,
        age: user.age,
        height: user.height,
        weight: user.weight,
        fathersName: user.fathersName,
        mothersName: user.mothersName,
        address: user.address,
        marital_status: user.marital_status,
        job_type: user.job_type,
        company_name: user.company_name,
        salary: user.salary,
        total_experience: user.total_experience,
        degree: user.degree,
        school: user.school,
        college: user.college,
        whatsapp: user.whatsapp,
        facebook: user.facebook,
        instagram: user.instagram,
        twitter: user.twitter,
        youtube: user.youtube,
        linkedin: user.linkedin,
        willing_to_marry_from_another_caste: user.willing_to_marry_from_another_caste === 1, // Co Make sure it's a boolean
        religion: user.religion,
        caste: user.caste,
        sub_caste: user.sub_caste,
        gothram: user.gothram,
        dosam: user.dosam,
        star: user.star,
        raasi: user.raasi,

    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked, // Update the checkbox value to true or false
        }));
    };
    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch(`https://countriesnow.space/api/v0.1/countries/states`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ country: 'India' }),
                });

                const result = await response.json();
                setStates(result.data.states || []); // Assume states are inside `data.states`
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };

        fetchStates();
    }, []);
    const fetchCities = async (e) => {
        const selectedState = e.target.selectedOptions[0].text;
        const selectedStateVal = e.target.value;
        if (selectedStateVal) {
            // setFormData({ ...formData, state: selectedState });
            setFormData({
                ...formData,
                state: selectedStateVal // this will set formData.state to the selected value
            });
            try {
                const response = await fetch(`https://countriesnow.space/api/v0.1/countries/state/cities`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ country: 'India', state: selectedState }),
                });

                const result = await response.json();
                setCities(result.data || []); // Assuming cities are in result.data
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
    };

    const cityOptions = cities.map((city) => ({ label: city, value: city }));

    const handleChange = (e) => {

        const { name, value } = e.target;
        if (name === 'gender') {
            if (value.trim() === '') {
                setGenderError('Gender is required');
            } else {
                setGenderError('');
            }
        }
        if (name != 'dob') {
            setFormData({ ...formData, [name]: value });
        }
        if (name === 'dob') {
            if (value === '') {
                setDobError('Dob is required');
            } else {
                setDobError('');
            }
            const formattedDate = format(value, 'yyyy-MM-dd');

            setFormData({ ...formData, dob: formattedDate });
        }
        if (name === 'state') {
            if (value.trim() === '') {
                setStateError('State is required');
            } else {
                setStateError('');
            }
        }
        if (name === 'city') {
            if (value.trim() === '') {
                setCityError('City is required');
            } else {
                setCityError('');
            }
        }

        if (name === 'age') {

            if (value.trim() === '') {
                setAgeError('Age is required');
            } else {
                setAgeError('');
            }
        }
        if (name === 'weight') {
            if (value.trim() === '') {
                setWeightError('Weight is required');
            } else {
                setWeightError('');
            }
        }
        if (name === 'height') {
            if (value.trim() === '') {
                setHeightError('Hight is required');
            } else {
                setHeightError('');
            }
        }
        if (name === 'fathersName') {
            if (value.trim() === '') {
                setfathersNameError('Father\'s Name is required');
            } else {
                setfathersNameError('');
            }
        }
        if (name === 'mothersName') {
            if (value.trim() === '') {
                setmothersNameError('Mother\'s Name is required');
            } else {
                setmothersNameError('');
            }
        }
        if (name === 'address') {
            if (value.trim() === '') {
                setAddressError('Address is required');
            } else {
                setAddressError('');
            }
        }
        if (name === 'marital_status') {
            console.log(name, 'marital_status');
            console.log(value, 'marital_status value');
            if (value.trim() === '') {
                setMaritalStatusError('Marital Status is required');
            } else {
                setMaritalStatusError('');
            }
        }
        if (name === 'gender') {
            if (value.trim() === '') {
                setGenderError('Gender is required');
            } else {
                setGenderError('');
            }
        }
    };
    const validateForm = (fieldValues = formData) => {


        let isValid = true;

        // Validate gender
        if (!fieldValues.gender || fieldValues.gender === '') {
            setGenderError('Gender is required');
            isValid = false;
        } else {
            setGenderError('');
        }

        // Validate dob
        if (!fieldValues.dob || fieldValues.dob === '') {
            setDobError('DOB is required');
            isValid = false;
        } else {
            setDobError('');
        }
        // Validate state
        if (!fieldValues.state || fieldValues.state.trim() === '') {
            setStateError('State is required');
            isValid = false;
        } else {
            setStateError('');
        }

        // Validate city
        if (!fieldValues.city || fieldValues.city.trim() === '') {
            setCityError('City is required');
            isValid = false;
        } else {
            setCityError('');
        }

        // Validate age
        if (!fieldValues.age || fieldValues.age <= 0) {
            setAgeError('Age is required');
            isValid = false;
        } else {
            setAgeError('');
        }

        // Validate weight
        if (!fieldValues.weight || fieldValues.weight.trim() === '') {
            setWeightError('Weight is required');
            isValid = false;
        } else {
            setWeightError('');
        }

        // Validate height
        if (!fieldValues.height || fieldValues.height.trim() === '') {
            setHeightError('Height is required');
            isValid = false;
        } else {
            setHeightError('');
        }

        // Validate father's name
        if (!fieldValues.fathersName || fieldValues.fathersName.trim() === '') {
            setfathersNameError('Father\'s Name is required');
            isValid = false;
        } else {
            setfathersNameError('');
        }

        // Validate mother's name
        if (!fieldValues.mothersName || fieldValues.mothersName.trim() === '') {
            setmothersNameError('Mother\'s Name is required');
            isValid = false;
        } else {
            setmothersNameError('');
        }

        // Validate address
        if (!fieldValues.address || fieldValues.address.trim() === '') {
            setAddressError('Address is required');
            isValid = false;
        } else {
            setAddressError('');
        }


        if (!fieldValues.marital_status || fieldValues.marital_status.trim() === '') {
            setMaritalStatusError('Marital Status is required');
            isValid = false;
        } else {
            setMaritalStatusError('');
        }
        return isValid; // Return the overall validity of the form
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform full form validation before submission
        if (validateForm()) {
            const apiUrl = 'http://localhost:4000/api/updateProfile';
            const token = localStorage.getItem('authToken');
            // Gather all data from formData into a JSON object
            const payload = {
                token,
                user_id: formData.user_id, // Assuming you have this in your formData
                gender: formData.gender,
                state: formData.state,
                city: formData.city,
                dob: formData.dob,
                age: formData.age,
                height: formData.height,
                weight: formData.weight,
                fathers_name: formData.fathersName,
                mothers_name: formData.mothersName,
                address: formData.address,
                marital_status: formData.marital_status,
            };
            console.log(payload);
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload), // Send the full form data as JSON
                });

                const data = await response.json();
                if (data.success) {
                    setUser(data.user);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    showToast('Profile updated successfully!');
                } else {
                    showToast(data.message || 'Update failed', 'error');
                }
            } catch (error) {
                showToast('Something went wrong, please try again.', 'error');
            }
        } else {
            showToast('please fill all the values', 'error');
            console.log('Form has validation errors.', 'error');
            return false;
        }
    };


    const handleEducationSubmit = async (e) => {
        e.preventDefault();

        // Perform full form validation before submission

        const apiUrl = 'http://localhost:4000/api/updateProfile';
        const token = localStorage.getItem('authToken');
        // Gather all data from formData into a JSON object
        const payload = {
            token,
            user_id: formData.user_id, // Assuming you have this in your formData
            job_type: formData.job_type,
            company_name: formData.company_name,
            salary: formData.salary,
            total_experience: formData.total_experience,
            degree: formData.degree,
            school: formData.school,
            college: formData.college
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // Send the full form data as JSON
            });

            const data = await response.json();
            if (data.success) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                showToast('Profile updated successfully!');
            } else {
                showToast(data.message || 'Update failed', 'error');
            }
        } catch (error) {
            showToast('Something went wrong, please try again.', 'error');
        }

    };
    const handleSocialMediaSubmit = async (e) => {
        e.preventDefault();

        // Perform full form validation before submission

        const apiUrl = 'http://localhost:4000/api/updateProfile';
        const token = localStorage.getItem('authToken');
        // Gather all data from formData into a JSON object
        const payload = {
            token,
            user_id: formData.user_id, // Assuming you have this in your formData
            whatsapp: formData.whatsapp,
            facebook: formData.facebook,
            instagram: formData.instagram,
            twitter: formData.twitter,
            youtube: formData.youtube,
            linkedin: formData.linkedin
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // Send the full form data as JSON
            });

            const data = await response.json();
            if (data.success) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                showToast('Profile updated successfully!');
            } else {
                showToast(data.message || 'Update failed', 'error');
            }
        } catch (error) {
            showToast('Something went wrong, please try again.', 'error');
        }

    };
    const handleReligionSubmit = async (e) => {
        e.preventDefault();
        console.log("handleReligionSubmit", formData);

        // Perform full form validation before submission
        if (!formData.religion || formData.religion === '') {
            setReligionError('Religion is required');
            return false;
        } else {
            setReligionError('');
        }
        if (!formData.caste || formData.caste === '') {
            setCasteError('Caste is required');
            return false;
        } else {
            setCasteError('');
        }
        const apiUrl = 'http://localhost:4000/api/updateProfile';
        const token = localStorage.getItem('authToken');
        // Gather all data from formData into a JSON object
        const payload = {
            token,
            user_id: formData.user_id, // Assuming you have this in your formData
            religion: formData.religion,
            caste: formData.caste,
            sub_caste: formData.sub_caste,
            gothram: formData.gothram,
            dosam: formData.dosam,
            star: formData.star,
            raasi: formData.raasi,
            willing_to_marry_from_another_caste: formData.willing_to_marry_from_another_caste,
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // Send the full form data as JSON
            });

            const data = await response.json();
            if (data.success) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                showToast('Profile updated successfully!');
            } else {
                showToast(data.message || 'Update failed', 'error');
            }
        } catch (error) {
            showToast('Something went wrong, please try again.', 'error');
        }

    };

    const [genderError, setGenderError] = useState('');
    const [stateError, setStateError] = useState('');
    const [cityError, setCityError] = useState('');
    const [dobError, setDobError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [heightError, setHeightError] = useState('');
    const [weightError, setWeightError] = useState('');
    const [fathersNameError, setfathersNameError] = useState('');
    const [mothersNameError, setmothersNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [maritalStatusError, setMaritalStatusError] = useState('');
    const [religionError, setReligionError] = useState('');
    const [casteError, setCasteError] = useState('');


    return (
        <section>
            <div className="login pro-edit-update">
                <div className="container">
                    <Toast ref={toast} />
                    <div className="row">
                        <div className="inn">
                            <div className="rhs">
                                <div className="form-login">
                                    <form onSubmit={handleSubmit}>
                                        {/* Basic Info */}
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Basic info</h4>
                                                <h1>Edit my profile</h1>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Name:<span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your full name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Email:<span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    disabled
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Phone:<span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter phone number"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    disabled
                                                />
                                            </div>

                                        </div>
                                        {/* Advanced Bio */}
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Basic info</h4>
                                                <h1>Advanced bio</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Gender:<span style={{ color: 'red' }}>*</span></label>
                                                    <select
                                                        className="form-select"
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={(e) => {
                                                            handleChange(e);
                                                        }}
                                                    >
                                                        <option value="">Select your Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                    {genderError && <p className="error-message">{genderError}</p>}
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">State:<span style={{ color: 'red' }}>*</span></label>
                                                    <select

                                                        className="form-select"
                                                        name="state"
                                                        value={formData.state}
                                                        onChange={fetchCities}
                                                    >
                                                        <option value="">Select a State</option>
                                                        {states.map((state) => (
                                                            <option key={state.state_code} value={state.state_code}>
                                                                {state.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {stateError && <p className="error-message">{stateError}</p>}
                                                </div>

                                                <div className="col-md-6 form-group">
                                                    <label className="lb">City:<span style={{ color: 'red' }}>*</span></label>
                                                    <Select
                                                        className='city_dropdown'
                                                        options={cityOptions}
                                                        name="city"
                                                        value={formData.city ? { label: formData.city, value: formData.city } : null} // Set selected city if present
                                                        onChange={(selectedOption) => setFormData({ ...formData, city: selectedOption ? selectedOption.value : "" })}
                                                        placeholder="Select a City"
                                                        isClearable // Allow clearing the selection
                                                    />
                                                    {cityError && <p className="error-message">{cityError}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group dob-container">
                                                    <label className="lb">Date of birth:<span style={{ color: 'red' }}>*</span></label>
                                                    <div className="card flex justify-content-center">
                                                        <input
                                                            type="date"
                                                            name="dob"
                                                            value={formData.dob ? new Date(formData.dob).toISOString().split('T')[0] : ''} // Ensure correct format
                                                            onChange={handleChange} // Use the existing handleChange function
                                                            className="form-control"
                                                        />
                                                    </div>

                                                    {dobError && <p className="error-message">{dobError}</p>}
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Age:<span style={{ color: 'red' }}>*</span></label>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="age"
                                                            onChange={(e) => {
                                                                handleChange(e);
                                                            }}
                                                            value={formData.age || ''}
                                                        />
                                                    </div>
                                                    {ageError && <p className="error-message">{ageError}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Height:<span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="height"
                                                        value={formData.height || ''}
                                                        onChange={handleChange}
                                                    />
                                                    {heightError && <p className="error-message">{heightError}</p>}
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Weight:<span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="weight"
                                                        value={formData.weight || ''} // Fallback to an empty string if weight is undefined/null
                                                        onChange={handleChange}
                                                    />
                                                    {weightError && <p className="error-message">{weightError}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Father's name:<span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="fathersName"
                                                        value={formData.fathersName || ''}
                                                        onChange={handleChange}
                                                    />
                                                    {fathersNameError && <p className="error-message">{fathersNameError}</p>}
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Mother's name:<span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="mothersName"
                                                        value={formData.mothersName || ''}
                                                        onChange={handleChange}
                                                    />
                                                    {mothersNameError && <p className="error-message">{mothersNameError}</p>}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Address:<span style={{ color: 'red' }}>*</span></label>
                                                <textarea
                                                    className="form-control"
                                                    name="address"
                                                    value={formData.address || ''}
                                                    onChange={handleChange}
                                                />
                                                {addressError && <p className="error-message">{addressError}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Marital Status:<span style={{ color: 'red' }}>*</span></label>
                                                <div className="form-group">
                                                    <select
                                                        value={formData.marital_status} // Bind to formData state
                                                        name="marital_status"
                                                        onChange={handleChange} // Update form data on change
                                                        className="form-control" // Normal form control styling
                                                    >
                                                        <option value="">Select Marital Status</option> {/* Default placeholder */}
                                                        <option value="Never Married">Never Married</option>
                                                        <option value="Divorced">Divorced</option>
                                                        <option value="Widowed">Widowed</option>
                                                        <option value="Awaiting Divorce">Awaiting Divorce</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    {maritalStatusError && <p className="error-message">{maritalStatusError}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group"></div>
                                                <div className="col-md-6 form-group">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleSubmit}
                                                    >
                                                        Save & Continue
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Job & Education */}
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Job details</h4>
                                                <h1>Job & Education</h1>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Job type:</label>
                                                <select
                                                    className="form-select"
                                                    name="job_type"
                                                    value={formData.job_type}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select your Job Type</option>
                                                    <option value="Business">Business</option>
                                                    <option value="Employee">Employee</option>
                                                    <option value="Government">Government</option>
                                                    <option value="Jobless">Jobless</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Company name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="company_name"
                                                    value={formData.company_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Monthly Income / Salary:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="salary"
                                                        value={formData.salary}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Total experience:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="total_experience"
                                                        value={formData.total_experience}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Degree:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="degree"
                                                    value={formData.degree}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">School:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="school"
                                                        value={formData.school}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">College:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="college"
                                                        value={formData.college}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group"></div>
                                                <div className="col-md-6 form-group">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleEducationSubmit}
                                                    >
                                                        Save & Continue
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Caste information */}
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Religion</h4>
                                                <h1>Religion & Caste Information</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Religion:<span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="religion"
                                                        value={formData.religion}
                                                        onChange={handleChange}
                                                        placeholder="ex:Hindu/Muslim/Christian"
                                                    />
                                                    {religionError && <p className="error-message">{religionError}</p>}
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Caste:<span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="caste"
                                                        value={formData.caste}
                                                        onChange={handleChange}
                                                        placeholder="ex:Gounder/Chettiar/Adidravidar"
                                                    />
                                                    {casteError && <p className="error-message">{casteError}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Sub Caste:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="sub_caste"
                                                        value={formData.sub_caste}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Gothram:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="gothram"
                                                        value={formData.gothram}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Dosam:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="dosam"
                                                        value={formData.dosam}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Star / Natchatra:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="star"
                                                        value={formData.star}
                                                        onChange={handleChange}
                                                        placeholder="ex:Revathi/Rohini"
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Zodiacal Sign / Raasi:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="raasi"
                                                        value={formData.raasi}
                                                        onChange={handleChange}
                                                        placeholder="ex:Meenam/Mesam"
                                                    />
                                                </div>
                                                <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                                    <input
                                                        type="checkbox"
                                                        name="willing_to_marry_from_another_caste"
                                                        checked={formData.willing_to_marry_from_another_caste}// Will be true or false
                                                        onChange={handleCheckboxChange}
                                                        style={{ marginRight: '10px' }}
                                                    />

                                                    <label style={{ margin: 0 }}>
                                                        Willing to marry from another caste
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group"></div>
                                                <div className="col-md-6 form-group">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleReligionSubmit}
                                                    >
                                                        Save & Continue
                                                    </button>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Media</h4>
                                                <h1>Social media</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">WhatsApp:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="whatsapp"
                                                        value={formData.whatsapp}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Facebook:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="facebook"
                                                        value={formData.facebook}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Instagram:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="instagram"
                                                        value={formData.instagram}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">X (Twitter):</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="twitter"
                                                        value={formData.twitter}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">YouTube:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="youtube"
                                                        value={formData.youtube}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">LinkedIn:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="linkedin"
                                                        value={formData.linkedin}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 form-group">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleSocialMediaSubmit}
                                                    >
                                                        Save & Complete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateUserProfile;
