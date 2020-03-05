import React , { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
// import moment from 'moment';
// import { connect } from 'react-redux';

const Education = ({ education }) => {
    const educated = education.map( edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">
                {edu.degree}
            </td>
            <td>
                <Moment format="YYYY/mm/DD">{edu.from}</Moment> -{" "} 
                { edu.to === null ? ( ' Now') 
                : (
                <Moment format="YYYY/mm/DD">{edu.to}</Moment>
                    )
                }
            </td>
            <td>
                { <button className="btn btn-danger">Delete</button> }
            </td>
        </tr>
    ))
    return (
        <Fragment>
         <h2 className="my-2">Education</h2> 
         <table className="table">
            <thead>
                <tr>
                    <th>School</th>
                    <th className="hide-sm">Degree</th>
                    <th className="hide-sm">Years</th>
                </tr>
            </thead>
            <tbody>{educated}</tbody>
         </table>  
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
}

export default Education