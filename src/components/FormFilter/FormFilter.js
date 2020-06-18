import React from "react";
import PropTypes from "prop-types";

import styles from "./FormFilter.module.css";

const FormFilter = ({ value, onFilterContacts }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find Contact with Name
        <input
          type="text"
          onChange={(e) => onFilterContacts(e.target.value)}
          className={styles.input}
          value={value}
        />
      </label>
    </div>
  );
};

FormFilter.propTypes = {
  value: PropTypes.string,
  onFilterContacts: PropTypes.func,
};

export default FormFilter;
