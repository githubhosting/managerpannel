import React, { useEffect, useState } from 'react'
import { LinearProgress, Link } from 'react-admin'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  link: {
    color: theme.palette.primary.main,
  },
});

const stopPropagation = e => e.stopPropagation();

const FirebaseReferenceField = ({ reference, source, record = {}, classes = {}, children, className, ...rest }) => {
  const [referenceRecord, setReferenceRecord] = useState({})

  async function getReference() {
    const result = await record[source].get()
    setReferenceRecord({
      id: result.id,
      ...result.data()
    })
  }

  useEffect(() => {
    getReference()
  }, [])

  if (referenceRecord) {
    return (
      <Link
        to={ `/${ reference }/${ referenceRecord.id }` }
        className={className}
        onClick={stopPropagation}
      >
        { React.cloneElement(children, {
          className: classnames(
            children.props.className,
            classes.link // force color override for Typography components
          ),
          record: referenceRecord,
          resource: reference,
          ...rest
        }) }
      </Link>
    )
  }
  return <LinearProgress/>
}

const EnhancedFirebaseReferenceField = withStyles(styles)(FirebaseReferenceField);

EnhancedFirebaseReferenceField.defaultProps = {
  addLabel: true,
};

export default EnhancedFirebaseReferenceField;