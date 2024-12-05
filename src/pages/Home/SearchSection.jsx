import React from 'react'
import { useState } from 'react';

const SearchSection = () => {
    const [searchForm, setSearchForm] = useState({
        lookingFor: '',
        age: '',
        religion: '',
        city: ''
    });

    // Handle form change
    const handleInputChange = (e) => {
        setSearchForm({
            ...searchForm,
            [e.target.name]: e.target.value,
        });
    };

    // Submit handler (if you want to process the form submission)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the search action here
        console.log('Form submitted:', searchForm);
    };
    return (
        <>
            <section>
                <div className="str">
                    <div className="hom-head">
                        <div className="container">
                            <div className="row">
                                <div className="hom-ban">
                                    <div className="ban-tit">
                                        <span><i className="no1"> <em style={{ fontFamily: 'Cinzel Decorative', fontStyle: 'cursive' }}>Wedding Soul Mates</em></i> <br />Matrimony</span>
                                        <h1>Find your<br /><b>Right Match</b> here</h1>
                                        <p>The leading choice for finding lifelong partners.</p>
                                    </div>

                                    {/* Search Form */}
                                    <div className="ban-search chosenini">
                                        <form onSubmit={handleSubmit}>
                                            <ul>
                                                <li className="sr-look">
                                                    <div className="form-group">
                                                        <label>I'm looking for</label>
                                                        <select
                                                            name="lookingFor"
                                                            className="chosen-select"
                                                            value={searchForm.lookingFor}
                                                            onChange={handleInputChange}>
                                                            <option value="">I'm looking for</option>
                                                            <option value="Men">Men</option>
                                                            <option value="Women">Women</option>
                                                        </select>
                                                    </div>
                                                </li>

                                                <li className="sr-age">
                                                    <div className="form-group">
                                                        <label>Age</label>
                                                        <select
                                                            name="age"
                                                            className="chosen-select"
                                                            value={searchForm.age}
                                                            onChange={handleInputChange}>
                                                            <option value="">Age</option>
                                                            <option value="18 to 30">18 to 30</option>
                                                            <option value="31 to 40">31 to 40</option>
                                                            <option value="41 to 50">41 to 50</option>
                                                            <option value="51 to 60">51 to 60</option>
                                                            <option value="61 to 70">61 to 70</option>
                                                            <option value="71 to 80">71 to 80</option>
                                                            <option value="81 to 90">81 to 90</option>
                                                            <option value="91 to 100">91 to 100</option>
                                                        </select>
                                                    </div>
                                                </li>

                                                <li className="sr-reli">
                                                    <div className="form-group">
                                                        <label>Religion</label>
                                                        <select
                                                            name="religion"
                                                            className="chosen-select"
                                                            value={searchForm.religion}
                                                            onChange={handleInputChange}>
                                                            <option value="">Religion</option>
                                                            <option value="Any">Any</option>
                                                            <option value="Hindu">Hindu</option>
                                                            <option value="Muslim">Muslim</option>
                                                            <option value="Jain">Jain</option>
                                                            <option value="Christian">Christian</option>
                                                        </select>
                                                    </div>
                                                </li>

                                                <li className="sr-cit">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <select
                                                            name="city"
                                                            className="chosen-select"
                                                            value={searchForm.city}
                                                            onChange={handleInputChange}>
                                                            <option value="">Location</option>
                                                            <option value="Any location">Any location</option>
                                                            <option value="Chennai">Chennai</option>
                                                            <option value="New York">New York</option>
                                                            <option value="Perth">Perth</option>
                                                            <option value="London">London</option>
                                                        </select>
                                                    </div>
                                                </li>

                                                <li className="sr-btn">
                                                    <input type="submit" value="Search" />
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                    {/* End of Search Form */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SearchSection