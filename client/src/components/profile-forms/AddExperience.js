import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddExperience } from '../../actions/profile'

const AddExperience = props => {
    return (
        <div>
            
        </div>
    )
}

AddExperience.propTypes = {
 AddExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience})(AddExperience)
